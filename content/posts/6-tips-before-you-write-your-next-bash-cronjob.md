---
title: "6 Tips Before You Write Your Next Bash Cronjob"
date: 2019-04-22T19:59:49-04:00
draft: false
categories: ["sysadmin"]
---

Hi lovely people! :wave: As part of a research I am doing I had to write some bash scripts which were supposed to run every couple of minutes. I made some embarrassing mistakes along the way. I will write about those mistakes in hopes that you don't make them if and when you write your own bash scripts as cronjobs.

So without wasting any time lets begin!

1\. Shebang
===========


I have heard people say since forever that add a shebang at the top of your scripts. This tells the terminal which program to use to run your scripts if your script is an executable file. I wrote code in bash but when I asked the terminal to run it, it threw all sorts of weird errors. At first, I thought my computer has gone rogue but thankfully the problem was simpler. I had forgotten to write this one line at the top of my script:

```bash
#! /bin/bash
```

2\. Output Redirection
========================

It is useful and in some cases even required to read the output generated by the background job. You can redirect the output of the script to a log file like this:

```
*/15 * * * * /home/localadmin/Desktop/tcp_script.sh >> /home/localadmin/Desktop/pipe.log 2>&1
```

- `*/15` makes the command run every 15 minutes
- `>>` is redirecting the output to the `pipe.log` file
- 2>&1 is making sure that stderr also gets redirected to the same destination (file descriptor) where the standard output (`&1`) is being redirected

3\. Infinite Loops
===================

Oh my God, this one was the most embarrassing issue. I was running a `While true` loop in my bash script. When you are tired problems like this can often creep in. I wanted some code to run for a while (4 minutes). The problem was that this infinite loop was also a cronjob so cron kept on running a new instance every 15 minutes but the old one never stopped executing.  

For this particular problem the solution was to use this:

```bash
#! /bin/bash
end=$((SECONDS+240))

while [ $SECONDS -lt $end ];
do

# Other code .....

done
```

This makes sure that your loop only runs for 240 seconds. The `SECONDS` variable keeps track of seconds elapsed since the script started executing.

4\. Adding Timeouts
====================

I was using `tcpdump` to capture wireless packets and store some information about them. The problem was that `tcpdump` keeps on running for as long as it can until it receives a quit or terminate signal. For my cronjob I wanted it to run for only 4 minutes and after that self-terminate.

The solution was to use the `timeout` command:

```
timeout 240 tcpdump <args_for_tcpdump>
```

240 means that `tcpdump` will automatically quit after 240 seconds. This can come in handy if you are working with something like `tcpdump` which you want to terminate when running from within a script.

5\. Sudo vs normal user
========================

There are two crontabs. One is for the normal user and one is for root. If your script requires sudo privileges then you need to put your job in root's crontab.

When you type `crontab -e` in the terminal you are editing current user's crontab. However, when you type `sudo crontab -e` you are editing root's crontab. root's crontab jobs are run with sudo privileges.

6\. Complete program names
===========================

Holy moly this one had me pulling my hair out. I was running some jobs via root's crontab. The problem was that my bash script contained program names only. For example, I was using `ifconfig` and I only had this:

```bash
ifconfig mon0 up
```

But I was getting errors that there is no command called `ifconfig`. As it turns out root's crontab does not get access to the complete set of environment variables and does not know about all the commands which are typically accessible in a normal terminal session.

Make sure that you either propagate your environment to root's crontab before the script is run or you prefix every command with the full path to that program on disk. I used the latter method because I knew I wasn't going to use this script on any other machine so I could get away with hardcoding the paths. 

For example, I rewrote the ifconfig command like this:

```bash
/sbin/ifconfig mon0 up
```

Things started working and I was as happy as a clam :smile: See you all in the next post where we will finish up our greenhouse monitoring system! :heart:

<hr>

**References**

- [Run Cron job every N minutes plus offset](https://stackoverflow.com/questions/12786410/run-cron-job-every-n-minutes-plus-offset)
- [Time condition loop in shell](https://stackoverflow.com/questions/11176284/time-condition-loop-in-shell)
- [Bash if command doesn't finish in X time?](https://unix.stackexchange.com/questions/405337/bash-if-command-doesnt-finish-in-x-time)
- [How to set up a root cron job properly?](https://askubuntu.com/questions/419548/how-to-set-up-a-root-cron-job-properly)
- [Why crontab scripts are not working?](https://askubuntu.com/questions/23009/why-crontab-scripts-are-not-working)