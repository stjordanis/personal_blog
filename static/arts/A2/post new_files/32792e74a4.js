(function($){window.TWP=window.TWP||{};TWP.Identity=TWP.Identity||{};var init=function(){try{$(window.document).on("onTwpMeterReady",function(){setTimeout(function(){TWP.Identity.showMessages()},500)})}catch(e){}};var _qaEnvironment=window.location.host.indexOf("digitalink.com")!=-1;var originalPageHeight;var showingBreakingNewsBar=function(){var breakingNewsBar=$(".pb-f-page-breaking-news-bar .breaking-news-bar").first();var closeBarTime=localStorage.getItem("breaking_news_bar_close_time")===null?
0:parseInt(localStorage.getItem("breaking_news_bar_close_time"));if(!breakingNewsBar.data("suppressed")&&breakingNewsBar.data("hasTimestamp")&&(breakingNewsBar.data("inEditor")||breakingNewsBar.data("timestamp")>closeBarTime))return true;return false};var omnitureShowMessages=function(reason,eventCode,errorType){if(!!window.s&&typeof s.sendDataToOmniture=="function")try{s.sendDataToOmniture("onsitemessaging",eventCode,{eVar1:window.wp_page_name,prop2:window.wp_subsection,eVar2:window.wp_channel,prop3:window.wp_content_type,
eVar17:window.wp_content_type,eVar26:reason,evar53:errorType},{wait:true})}catch(e){}};function isInternational(_rpld1){if(_rpld1){var matches=_rpld1.match(/20:([^|]*)/);if(matches&&matches.length>1){var country=matches[1];if(["usa","mnull","***"].indexOf(country)==-1)return true}}return false}var _getOtherMessages=function(remindMeLaterVariant){var messages=[];var _rplmct;try{_rplmct=TWP.Identity.paywall.pwresp.mtrct}catch(ex){_rplmct=$.cookie("rplmct")}var _rplsb=$.cookie("rplsb");var today=new Date;
var message={};var _client_region=$.cookie("client_region");var _rpld1=$.cookie("rpld1");var _international=isInternational(_rpld1);var showRMLMessage=window.location.search.indexOf("rml\x3dtrue")!=-1;var showFirstUPC=window.location.search.indexOf("firstUPC\x3d")!=-1;if(!showRMLMessage)showRMLMessage=_rplmct==2&&_rplsb!="1"&&remindMeLaterVariant;if(!showFirstUPC)showFirstUPC=_rplmct==1&&_rplsb!="1"&&!_international&&_client_region==="0";if(window.location.search.indexOf("wpisrc\x3dnl_az_most")!=
-1&&TWP.Identity.paywall.pwresp.sub!=1){message.messageDate=today.getTime();today.setDate(today.getDate()+1);message.messageExpire=today.getTime();message["id"]="nl_az_most";message["useCase"]="PRIMENEWSLETTER";messages.push(message)}else if(showRMLMessage){message={};message.messageDate=today.getTime();var year=today.getFullYear();var month=today.getMonth();today.setDate(today.getDate()+1);message.messageExpire=today.getTime();message["id"]="remind_me_later_"+month+"_"+year;message["useCase"]="REMINDMELATER";
messages.push(message);var invisibleCaptcha=document.createElement("script");invisibleCaptcha.setAttribute("src","https://www.google.com/recaptcha/api.js?render\x3dexplicit");document.head.appendChild(invisibleCaptcha);window.RML={};window.RML.show=function(e){if(typeof e!="undefined")e.stopImmediatePropagation();$("#rml_email").css("display","inline-block");$("#rml_buttons").css("display","none");var reason=window.RML._local?"ntfn_rmd_later_local":window.RML._international?"ntfn_rmd_later_intl":
"ntfn_rmd_later";omnitureShowMessages(reason,"event80")};window.RML.active=false;window.RML._validateEmail=function(e){var email=$("#rmlEmailVal").val();var regex=/^[^@]*@[^.@]*\.[^@.]*$/;if(regex.test(email)){window.RML.active=true;$("#rml_submit_button").css({"background-color":"#2A2A2A",color:"#ffffff"});if(typeof e!=="undefined"&&e.keyCode==13)window.RML.submit()}else{window.RML.active=false;$("#rml_submit_button").css({"background-color":"#D5D5D5",color:"#959595"})}};window.RML._resetCaptcha=
function(){$(".grecaptcha").each(function(index,el){$(el).replaceWith("\x3cdiv class\x3d'grecaptcha' id\x3d'"+el.id+"'\x3e\x3c/div\x3e")})};window.RML.submit=function(e){if(window.RML.active){if(typeof e!="undefined")e.stopImmediatePropagation();$("#rmlSpinner").css("display","inline-block");window.recaptcha_rml=window.grecaptcha.render("recaptcha_rml",{sitekey:"6Lf0DRoUAAAAAEawkoNEUKcpWx8eh_I7PRArTA9V",callback:window.RML._recaptchaCallback,size:"invisible"});window.grecaptcha.execute(window.recaptcha_rml)}};
window.RML._recaptchaCallback=function(captcha_res){var email=$("#rmlEmailVal").val();var url="";var data={email:email,recaptchaResponse:captcha_res,offerType:"national"};if(window.RML._international)data.offerType="international";else if(window.RML._local)data.offerType="local";if(showRMLMessage){url="https://subscribe.washingtonpost.com/subscriptionapi/remind-me-later";if(_qaEnvironment)url=url.replace("washingtonpost","digitalink")}if(_qaEnvironment)url=url.replace("washingtonpost","digitalink");
$.ajax({type:"POST",url:url,data:JSON.stringify(data),xhrFields:{withCredentials:true},contentType:"application/json",cache:"false",success:function(){$("#rmlSpinner").css("display","none");$("#i_userMessages").css("background-color","#04A85F");$("#i_userMessagesDismiss").css("background-color","rgba(0,0,0,0.2)");$("#rml_email").css("display","none");$("#i_userMessagesDismiss").css("display","none");if(showRMLMessage){$("#i_rmlmessage").html("\x3ci class\x3d'fa fa-check' aria-hidden\x3d'true'\x3e\x3c/i\x3e \x3cspan style\x3d'font-family:FranklinITCProBold'\x3eWe sent this offer to "+
email);var reason=window.RML._local?"ntfn_rmd_later_local":window.RML._international?"ntfn_rmd_later_intl":"ntfn_rmd_later";omnitureShowMessages(reason,"event87");setTimeout(function(){_hideMessageArea()},3500)}window.RML._resetCaptcha();window.RML.dismiss()}}).fail(function(){alert("An error occurred submitting your request. Please try again.");window.RML._resetCaptcha();$("#rmlSpinner").css("display","none");if(showRMLMessage){var reason=window.RML._local?"ntfn_rmd_later_local":window.RML._international?
"ntfn_rmd_later_intl":"ntfn_rmd_later";omnitureShowMessages(reason,"event53","BackEnd: Error submitting RML")}})};window.RML.dismiss=function(){var messageId=message["id"];var reason="ntfn_rmd_later";_dismissMessageLocal(messageId,reason,false)}}else if(showFirstUPC){message={};message.messageDate=today.getTime();today.setDate(today.getDate()+1);message.messageExpire=today.getTime();message["id"]="first_upc_"+"_"+month+"_"+year;message["useCase"]="FIRSTUPC";messages.push(message)}return messages};
var _getUserMessages=function(_callback,remindMeLaterVariant){var otherMessages=_getOtherMessages(remindMeLaterVariant);var secure_login_id=$.cookie("wapo_secure_login_id");var login_id=$.cookie("wapo_login_id");if(secure_login_id&&login_id){var url="https://subscribe.washingtonpost.com/onsiteapi/get-messages";if(_qaEnvironment)url=url.replace("washingtonpost","digitalink");$.ajax({type:"GET",url:url,dataType:"text",timeout:2E3,xhrFields:{withCredentials:true},cache:"false",success:function(data){if(data==
""&&otherMessages.length){data={messages:otherMessages};_callback(data)}else if(data&&data[0]==="{")try{data=JSON.parse(data);data.messages=data.messages.concat(otherMessages);if(_callback&&(new Date).getTime()<data.notValidAfter&&data&&data.messages&&data.messages.length>0)_callback(data);else _callback({})}catch(ex){_callback({})}else _callback({})}}).fail(function(){_callback({})})}else if(otherMessages.length)_callback({messages:otherMessages})};var _messageTypes={CANCEL:[{display:{"default":{message:"You have canceled your subscription. {LINK} to keep your access past {DATE}.",
action:"Reactivate",link:"https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription"},mobile:{message:"{LINK} your subscription to keep your access.",action:"Reactivate",link:"https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription"}},trigger:{type:"percent",remaining:"100"},dismiss:"1 per visit, per device",reason:"ntfn_cancelled_subscriber_1",style:"urgent"},{display:{"default":{message:"{LINK} your subscription before {DATE} to keep your access.",action:"Reactivate",
link:"https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription"},mobile:{message:"{LINK} your subscription to keep your access.",action:"Reactivate",link:"https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription"}},trigger:{type:"days",remaining:"15"},dismiss:"1 per visit, per device",reason:"ntfn_cancelled_subscriber_2",style:"urgent"},{display:{"default":{message:"{LINK} your subscription in the next {DAYS} days to keep your access.",action:"Reactivate",link:"https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription"},
mobile:{message:"{LINK} your subscription to keep your access.",action:"Reactivate",link:"https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription"}},trigger:{type:"days",remaining:"7"},dismiss:"1 per visit, per device",reason:"ntfn_cancelled_subscriber_3",style:"urgent"},{display:{"default":{message:"Your subscription expires in {HOURS} hours. {LINK} now to keep your access. ",action:"Reactivate",link:"https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription"},
mobile:{message:"{LINK} your subscription to keep your access.",action:"Reactivate",link:"https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription"}},trigger:{type:"hours",remaining:"24"},dismiss:"1 per visit, per device",reason:"ntfn_cancelled_subscriber_4",style:"urgent"}],SUSPEND:[{display:{"default":{message:"We were unable to process your last payment. {LINK} to keep your access.",action:"Update your payment method",link:"https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription"},
mobile:{message:"{LINK} to keep your access.",action:"Update your payment method",link:"https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription"}},trigger:{type:"percent",remaining:"100"},dismiss:"1 per visit, per device",reason:"ntfn_suspended_subscriber_1",style:"urgent"},{display:{"default":{message:"Your account still has payment issues. {LINK} to keep your access.",action:"Update your payment method",link:"https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription"},
mobile:{message:"{LINK} to keep your access.",action:"Update your payment method",link:"https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription"}},trigger:{type:"percent",remaining:"49"},dismiss:"1 per visit, per device",reason:"ntfn_suspended_subscriber_2",style:"urgent"},{display:{"default":{message:"{LINK} in {HOURS} hours to keep your access.",action:"Update your payment method",link:"https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription"},mobile:{message:"{LINK} to keep your access.",
action:"Update your payment method",link:"https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription"}},trigger:{type:"hours",remaining:"24"},dismiss:"1 per visit, per device",reason:"ntfn_suspended_subscriber_3",style:"urgent"}],FREETRIAL:[{display:{"default":{message:"Welcome to your free trial of The Washington Post. Enjoy free digital access until {DATE}."},mobile:{message:"Welcome to your free trial of The Washington Post."}},trigger:{type:"once"},dismiss:"1 per visit, per device",
reason:"ntfn_free_trial_subscriber_1",style:"default"},{display:{"default":{message:"We hope you're enjoying your free trial. {LINK} to keep your access past {DATE}.",action:"Subscribe",link:"https://subscribe.washingtonpost.com/acquisition?promo\x3dosn_r_tftp"},mobile:{message:"Your free trial expires on {DATE}. {LINK} to keep your access.",action:"Subscribe",link:"https://subscribe.washingtonpost.com/acquisition?promo\x3dosn_r_tftp"}},trigger:{type:"percent",remaining:"95"},dismiss:"1 per visit, per device",
reason:"ntfn_free_trial_subscriber_2",style:"default"},{display:{"default":{message:"Your digital access expires in {DAYS} days. Become a subscriber to keep your access.",action:"Subscribe now",link:"https://subscribe.washingtonpost.com/acquisition?promo\x3dosn_r_tftp"},mobile:{message:"{LINK} to keep your access.",action:"Subscribe",link:"https://subscribe.washingtonpost.com/acquisition?promo\x3dosn_r_tftp"}},trigger:{type:"percent",remaining:"50"},dismiss:"1 per visit, per device",reason:"ntfn_free_trial_subscriber_3",
style:"urgent"},{display:{"default":{message:"Your free trial expires in {DAYS} days. {LINK} to enjoy your access past {DATE}.",action:"Subscribe",link:"https://subscribe.washingtonpost.com/acquisition?promo\x3dosn_r_tftp"},mobile:{message:"{LINK} to keep your access.",action:"Subscribe",link:"https://subscribe.washingtonpost.com/acquisition?promo\x3dosn_r_tftp"}},trigger:{type:"percent",remaining:"25"},dismiss:"1 per visit, per device",reason:"ntfn_free_trial_subscriber_4",style:"urgent"},{display:{"default":{message:"Your free trial expires soon. {LINK} to keep your access past {DATE}.",
action:"Subscribe",link:"https://subscribe.washingtonpost.com/acquisition?promo\x3dosn_r_tftp"},mobile:{message:"Your free trial expires soon. {LINK} to keep your access past {DATE}.",action:"Subscribe",link:"https://subscribe.washingtonpost.com/acquisition?promo\x3dosn_r_tftp"}},trigger:{type:"percent",remaining:"5"},dismiss:"1 per visit, per device",reason:"ntfn_free_trial_subscriber_5",style:"urgent"},{display:{"default":{message:"Hurry! Your free trial expires in {HOURS} hours. {LINK} to keep your access.",
action:"Subscribe",link:"https://subscribe.washingtonpost.com/acquisition?promo\x3dosn_r_tftp"},mobile:{message:"Your free trial expires in {HOURS} hours. {LINK} to keep your access.",action:"Subscribe",link:"https://subscribe.washingtonpost.com/acquisition?promo\x3dosn_r_tftp"}},trigger:{type:"hours",remaining:"24"},dismiss:"1 per visit, per device",reason:"ntfn_free_trial_subscriber_6",style:"urgent"}],START:[{display:{"default":{message:"Welcome to The Washington Post. Thank you for subscribing."},
mobile:{message:"Welcome to The Washington Post. Thank you for subscribing."}},trigger:{type:"once"},dismiss:"1 per visit, per device",reason:"ntfn_start_1",style:"default"},{display:{"default":{message:"What are you interested in? Browse The Post's wide selection of {LINK}",action:"email newsletters and breaking news alerts.",link:"https://subscribe.washingtonpost.com/newsletters/#/newsletters?method\x3dMP\x26location\x3dWELE_ON"},mobile:{message:"What are you interested in? Browse our {LINK}",action:"newsletters and alerts.",
link:"https://subscribe.washingtonpost.com/newsletters/#/newsletters?method\x3dMP\x26location\x3dWELE_ON"}},trigger:{type:"percent",remaining:"90"},dismiss:"server",reason:"ntfn_start_2",style:"default"}],PRIMENEWSLETTER:[{display:{"default":{message:"Enjoy this free story for Amazon customers. {LINK} to get every story.",action:"Subscribe",link:"https://subscribe.washingtonpost.com/acquisition?promo\x3dosn_amzn_nl"},mobile:{message:"Enjoy this free story. {LINK} to get every story.",action:"Subscribe",
link:"https://subscribe.washingtonpost.com/acquisition?promo\x3dosn_amzn_nl"}},trigger:{type:"always"},dismiss:"none",reason:"ntfn_nl_az_most",style:"default"}],REMINDMELATER:[{display:{"default":{message:'\x3cspan style\x3d"font-family:FranklinITCProBold;"\x3eWe\u2019re glad you\u2019re enjoying The Washington Post.\x3c/span\x3e You\u2019re almost out of free articles.',action:"",link:"https://subscribe.washingtonpost.com/acquisition/#/marketing/promo/o_14_decrm/offer/1490"},mobile:{message:'\x3cspan style\x3d"font-family:FranklinITCProBold;"\x3eWe\u2019re glad you\u2019re enjoying The Washington Post.\x3c/span\x3e You\u2019re almost out of free articles.',
action:"",link:"https://subscribe.washingtonpost.com/acquisition/#/marketing/promo/o_14_decrm/offer/1490"}},trigger:{type:"percent",remaining:"100"},dismiss:"local",reason:"ntfn_rmd_later",style:"rml"}],FIRSTUPC:[{display:{"default":{message:"Thanks for reading. Try one month of unlimited access for $1. \x26nbsp; {BUTTON-WHITE}",action:"View offer",link:"https://subscribe.washingtonpost.com/acqlite/digital/o16_0918"},mobile:{message:'\x3cdiv style\x3d"line-height:16px;margin-bottom:8px;"\x3eThanks for reading. Try one month of unlimited access for $1.\x3c/div\x3e{BUTTON-WHITE}',
action:"View offer",link:"https://subscribe.washingtonpost.com/acqlite/digital/o16_0918"}},trigger:{type:"once"},dismiss:"local",reason:"ntfn_first_upc",style:"default"}]};var _processSettingMessages=function(messages){for(var i=0;i<messages.length;i++)if(messages[i].useCase=="NEWSREADER")if(messages[i].newsreaderStatus==="OPTED_OUT"){if(TWP.newsreader._isOptedIn())TWP.newsreader._optOut()}else if(messages[i].newsreaderStatus==="OPTED_IN")if(!TWP.newsreader._isOptedIn())TWP.newsreader._optIn()};var _generateMessages=
function(messageData,mobile){var messages=messageData.messages||[];_processSettingMessages(messages);var type;var i;for(i=0;i<messages.length;i++){if(messages[i].messageExpire-(new Date).getTime()<0)continue;if(messages[i].useCase=="START"&&messages[i].isFreeTrial=="Y"){messages[i].useCase="FREETRIAL";if(messages[i].sourceType=="DEVICE"||[425,428,431,435,436,439,441,443,445,447].indexOf(messages[i].currentRateId)!=-1)messages[i].useCase="SKIPMESSAGE"}if(messages[i].promoCode=="GRAHAM100"||messages[i].promoCode==
"dg_amazonprimedeal"||messages[i].newsreaderStatus=="OPTED_OUT"||messages[i].newsreaderStatus==="OPTED_IN")continue;type=messages[i].useCase;if(_messageTypes[type])break}if(!_messageTypes[type])return false;var messageDuration=messages[i].messageExpire-messages[i].messageDate;var timeRemaining=messages[i].messageExpire-(new Date).getTime();var percentRemaining=timeRemaining/messageDuration;var _messageTemplate;var messageId=messages[i].id;for(var m=0;m<_messageTypes[type].length;m++){var trigger=
_messageTypes[type][m].trigger;if(trigger.type=="once"){var messageReason=_messageTypes[type][m].reason;if(!_isDismissed(messageId,messageReason)){_messageTemplate=_messageTypes[type][m];break}}else if(trigger.type=="hours"){var hoursRemaining=timeRemaining/(1E3*60*60);if(trigger.remaining>hoursRemaining&&hoursRemaining>0)_messageTemplate=_messageTypes[type][m]}else if(trigger.type=="days"){var daysRemaining=timeRemaining/(1E3*60*60*24);if(trigger.remaining>daysRemaining&&daysRemaining>0)_messageTemplate=
_messageTypes[type][m]}else if(trigger.type=="percent"){if(trigger.remaining/100>percentRemaining&&percentRemaining>0)_messageTemplate=_messageTypes[type][m]}else if(trigger.type=="always")_messageTemplate=_messageTypes[type][m];else if(trigger.type=="until_dismissed"||trigger.type=="until_dismissed_or_clicked")_messageTemplate=_messageTypes[type][m]}if(!_messageTemplate||_isDismissed(messageId,_messageTemplate.reason)&&_messageTemplate.trigger.type!="always")return false;if(_messageTemplate.trigger.type==
"once")_dismissMessageLocal(messageId,_messageTemplate.reason,false);var _message=_messageTemplate.display["default"];if(mobile&&_messageTemplate.display.mobile)_message=_messageTemplate.display.mobile;var _html=_message.message;var validUntil=(new Date(messages[i].messageExpire)).toLocaleDateString("en-us",{month:"long",day:"numeric"});_html=_html.replace("{DATE}",validUntil);var validHours=Math.round(timeRemaining/(1E3*60*60));if(validHours<0)return false;var validDays=Math.round(validHours/24);
_html=_html.replace("{DAYS}",validDays);_html=_html.replace("{HOURS}",validHours);if(_qaEnvironment&&_message.link)_message.link=_message.link.replace("washingtonpost.com","digitalink.com");if(_message.link)_message.link+=(_message.link&&_message.link.indexOf("?")>-1?"\x26tid\x3d":"?tid\x3d")+_messageTemplate.reason;else _message.link="#";var action="\x3ca href\x3d"+_message.link+" style\x3d'color:white;display:inline-block;text-decoration:underline;white-space: nowrap;'\x3e"+_message.action+"\x3c/a\x3e";
_html=_html.replace("{LINK}",action);var button="\x3cdiv onclick\x3d'"+_message.button_click+"' style\x3d'cursor:pointer;background-color:#97B95C;color:#FFFFFF;padding:7px;padding-left:20px;padding-right:20px;border-radius:3px;font-size:16px;display:inline-block;margin-left:10px;'\x3e"+_message.action+"\x3c/div\x3e";_html=_html.replace("{BUTTON}",button);var btnWhiteStyle="cursor:pointer;background-color:#ffffff;color:#1955a5;padding:7px;padding-left:20px;padding-right:20px;border-radius:2px;font-size:16px;display:inline-block;";
if(mobile)btnWhiteStyle="cursor:pointer;background-color:#ffffff;color:#1955a5;padding:7px;padding-left:20px;padding-right:20px;border-radius:2px;font-size:14px;display:inline-block;";var button_white="\x3cdiv onclick\x3d'"+_message.button_click+"' style\x3d'"+btnWhiteStyle+"' class\x3d'i_userMessages_btn_white'\x3e"+_message.action+"\x3c/div\x3e";_html=_html.replace("{BUTTON-WHITE}",button_white);return{html:_html,id:messageId,reason:_messageTemplate.reason,link:_message.link,style:_messageTemplate.style,
dismiss:_messageTemplate.dismiss,trigger:_messageTemplate.trigger}};var _isDismissed=function(id,reason){var dismissed=false;try{dismissed=JSON.parse(localStorage.getItem("userMessages"));if(dismissed&&dismissed[id])if(dismissed[id].reasons[reason])return true}catch(ex){return true}try{dismissed=JSON.parse(sessionStorage.getItem("userMessages"));if(dismissed&&dismissed[id])if(dismissed[id].reasons[reason])return true}catch(ex){return true}return false};var _dismissMessageServer=function(id,reason,
hide,synchronous){var async=!synchronous;if(id){var url=_qaEnvironment?"https://subscribe.digitalink.com":"https://subscribe.washingtonpost.com";$.ajax({type:"POST",url:url+"/onsiteapi/dismiss",xhrFields:{withCredentials:true},async:async,data:JSON.stringify({id:id}),processData:false,success:function(){},error:function(){},contentType:"application/json"});_dismissMessageLocal(id,reason,hide)}};var _dismissMessageLocal=function(id,reason,hide){hide=hide==null?true:hide;try{var dismissed=JSON.parse(localStorage.getItem("userMessages"));
dismissed=dismissed&&typeof dismissed=="object"?dismissed:{};dismissed[id]=dismissed[id]&&typeof dismissed[id]=="object"?dismissed[id]:{};dismissed[id].status="dismissed";dismissed[id].timestamp=new Date;dismissed[id].reasons=typeof dismissed[id].reasons=="object"?dismissed[id].reasons:{};dismissed[id].reasons[reason]=true;localStorage.setItem("userMessages",JSON.stringify(dismissed))}catch(ex){}if(hide)_hideMessageArea()};var _dismissMessageSession=function(id,reason,hide){hide=hide==null?true:hide;
try{var dismissed=JSON.parse(sessionStorage.getItem("userMessages"));dismissed=dismissed&&typeof dismissed=="object"?dismissed:{};dismissed[id]=dismissed[id]&&typeof dismissed[id]=="object"?dismissed[id]:{};dismissed[id].status="dismissed";dismissed[id].timestamp=new Date;dismissed[id].reasons=typeof dismissed[id].reasons=="object"?dismissed[id].reasons:{};dismissed[id].reasons[reason]=true;sessionStorage.setItem("userMessages",JSON.stringify(dismissed))}catch(ex){}if(hide)_hideMessageArea()};var _hideMessageArea=
function(){var $messageArea=$("#i_userMessages");$messageArea.css({overflow:"hidden"});$messageArea.animate({height:0},function(){$("#page").animate({height:originalPageHeight},function(){$messageArea.remove()})})};var _displayMessages=function(messageData){var mobile=$(window).width()<=480;var _message=_generateMessages(messageData,mobile);if(window.RML){window.RML._local=$.cookie("client_region")==1;var _rpld1=$.cookie("rpld1");window.RML._international=isInternational(_rpld1)}if(_message){var userMessageCss=
"#i_userMessages{-webkit-backface-visibility:hidden;-webkit-transform:translate3d(0,0,0);cursor:pointer;display:none;position:fixed;left:0;right:0;top:60px;font-family:FranklinITCProBold;background-color:#1955a5;color:#fff}#i_userMessages.urgent{background-color:#efdede;color:#a94442}#i_userMessagesDismiss{cursor:pointer;position:absolute;top:10px;right:20px;background-color:#004681;color:#fff;height:26px;width:26px;line-height:26px;font-size:26px;text-align:center;font-family:FranklinITCProLight;font-weight:300;border-radius:100px}.urgent #i_userMessagesDismiss{background-color:#c39190;color:#efdede}";
var rmlCss="#i_userMessages.rml,#i_userMessages.audio{cursor:auto;font-family:FranklinITCProLight}.rml #i_userMessagesDismiss,.audio #i_userMessagesDismiss{top:20px}#i_rmlmessage{display:inline-block;max-width:575px;position:relative;vertical-align:top;text-align:left;margin-bottom:20px;font-size:20px;line-height:25px;padding-top:10px}#rml_buttons,#audio_buttons{margin-left:20px;margin-right:20px;display:inline-block;text-align:center}#rml_offer_button{cursor:pointer;margin:10px;padding:12px;height:46px;width:201px;border-radius:2px;background-color:#fff;color:#1955a5;display:inline-block;font-family:FranklinITCProBold}#rml_send_offer_button{cursor:pointer;margin:10px;padding:12px;height:46px;width:163px;border-radius:2px;border:1px solid rgba(255,255,255,0.2);background-color:transparent;color:#fff;display:inline-block;font-family:FranklinITCProBold}#rml_submit_button{cursor:pointer;margin-left:0;padding:12px;height:46px;width:201px;border-radius:4px;border-top-left-radius:0;border-bottom-left-radius:0;background-color:#d5d5d5;color:#959595;float:right;font-family:FranklinITCProBold;text-align:center}#rml_email{max-width:calc(100% - 30px);overflow:hidden;margin:15px;margin-left:20px;margin-right:20px;display:none;text-align:center}#rml_email_box{display:inline-block;margin-right:0;margin-bottom:0}#rml_email input{margin-bottom:10px;font-family:FranklinITCProLight;padding:10px;height:46px;width:315px;border:1px solid #d5d5d5;border-radius:4px;border-top-right-radius:0;border-bottom-right-radius:0;background-color:#fff;color:#000;font-size:16px}#rml_terms{font-family:FranklinITCProLight;font-size:13px;clear:both;text-align:left}#rml_terms a{text-decoration:underline;color:#fff}#i_audiomessage{display:inline-block;max-width:525px;position:relative;vertical-align:top;text-align:left;margin-bottom:20px;top:21px}#audio_send_offer_button{cursor:pointer;margin:10px;padding:12px;height:46px;width:163px;border-radius:2px;color:#fff;display:inline-block;font-family:FranklinITCProBold;background-color:#1955a5}@media only screen and (max-width: 665px){#i_rmlmessage{max-width:calc(100% - 15px)}#rml_email{margin:auto!important;margin-bottom:10px!important;float:left;text-align:left}#rmlEmailVal{width:220px!important;border-radius:4px!important}#rml_submit_button{width:220px!important;border-radius:4px!important;float:none!important}#audio_buttons{margin:auto;display:block;text-align:center}}";
$("head").append('\x3cstyle type\x3d"text/css"\x3e'+userMessageCss+rmlCss+"\x3c/style\x3e");var dynamicStyle=mobile?"font-size:14px;text-align:left;z-index:10000;":"font-size:16px;text-align:center;z-index:10000;";var dynamicPadding=mobile?"20px":"40px";if(_message.style=="urgent"){_message.html=_message.html.replace("color:white","color:#A94442");$(".top-nav").append("\x3cdiv id\x3d'i_userMessages' class\x3d'urgent' style\x3d'"+dynamicStyle+"'\x3e"+"\x3cdiv style\x3d'padding:13px;'\x3e\x3cdiv style\x3d'margin-left:"+
dynamicPadding+";margin-right:40px;'\x3e"+_message.html+"\x3c/div\x3e"+"\x3cdiv id\x3d'i_userMessagesDismiss'\x3e\x26times;\x3c/div\x3e"+"\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e").css("overflow","visible")}else if(_message.style=="rml"||_message.style=="newsletter"){_message.html=_message.html.replace("color:white","color:#ffffff");if(_message.reason==="ntfn_rmd_later")_message.reason=window.RML._local?"ntfn_rmd_later_local":window.RML._international?"ntfn_rmd_later_intl":"ntfn_rmd_later";var email=
$.cookie("wpniuser");var regex=/^[^@]*@[^.@]*\.[^@.]*$/;if(!regex.test(email))email="";var dest=window.TWP.originalUrl||window.location.href.split("?")[0];dest=encodeURIComponent(dest);if(!$.cookie("wapo_secure_login_id")&&_message.style=="rml")_message.html+=' Already a subscriber?  \x3ca style\x3d"color:white;text-decoration:underline;" href\x3d"https://subscribe.washingtonpost.com/loginregistration/index.html#/loginhome/group/long?destination\x3d'+dest+'"\x3eSign in\x3c/a\x3e';var html="\x3cdiv id\x3d'i_userMessages' class\x3d'rml' onclick\x3d'event.stopImmediatePropagation();' style\x3d'"+
dynamicStyle+"'\x3e"+"\x3cdiv style\x3d'padding:13px;'\x3e\x3cdiv style\x3d'margin-left:"+dynamicPadding+";margin-right:"+dynamicPadding+";'\x3e\x3cdiv id\x3d'i_rmlmessage'\x3e"+_message.html+"\x3c/div\x3e";if(_message.style=="rml"){_message.cta="Subscribe for $1";if(window.RML._local){_message.cta="Get up to 80% off";_message.link="https://subscribe.washingtonpost.com/acquisition/?promo\x3do_14_local\x26oscode\x3dRPX0\x26view\x3d2\x26wpsrc\x3dCM0001411\x26ttexclude\x3d1\x26hl\x3dhl1N49\x26tid\x3dntfn_rmd_later_local\x26destination\x3d"+
dest}else if(window.RML._international)_message.link="https://subscribe.washingtonpost.com/acquisition/?tid\x3dntfn_rmd_later_intl\x26destination\x3d"+dest+"#/marketing/promo/o_14_intl/offer/1528";html+='\x3cdiv id\x3d"rml_buttons"\x3e'+'\x3cdiv id\x3d"rml_offer_button" onclick\x3d"window.location.href\x3d\''+_message.link+"?destination\x3d"+dest+"';\"\x3e"+_message.cta+"\x3c/div\x3e"+'\x3cdiv id\x3d"rml_send_offer_button" onclick\x3d"RML.show(event);"\x3eSend me this offer\x3c/div\x3e'+"\x3c/div\x3e"+
'\x3cdiv id\x3d"rml_email"\x3e'+'\x3cdiv id\x3d"rml_email_box"\x3e\x3cinput onchange\x3d"RML._validateEmail(event);" onkeydown\x3d"RML._validateEmail(event);" id\x3d"rmlEmailVal" type\x3d"text" value\x3d"'+email+'" placeholder\x3d"Enter your email address"\x3e\x3c/div\x3e'+'\x3cdiv id\x3d"rml_submit_button" onclick\x3d"RML.submit(event);"\x3e\x3cspan class\x3d"spinner"\x3e\x3ci id\x3d"rmlSpinner" class\x3d"fa fa-spinner fa-spin" aria-hidden\x3d"true" style\x3d"display:none"\x3e\x3c/i\x3e\x3c/span\x3e Send me this offer\x3c/div\x3e\x3cdiv id\x3d"rml_terms"\x3eBy submitting your email, you agree to our \x3ca target\x3d"terms" href\x3d"http://www.washingtonpost.com/terms-of-service/2011/11/18/gIQAldiYiN_story.html"\x3eTerms of Service\x3c/a\x3e and \x3ca target\x3d"terms" href\x3d"http://www.washingtonpost.com/privacy-policy/2011/11/18/gIQASIiaiN_story.html"\x3ePrivacy Policy.\x3c/a\x3e \x3c/div\x3e'+
"\x3c/div\x3e"+"\x3c/div\x3e"+"\x3cdiv id\x3d'i_userMessagesDismiss'\x3e\x26times;\x3c/div\x3e"+'\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"recaptcha_rml" class\x3d"grecaptcha"\x3e\x3c/div\x3e\x3c/div\x3e'}else if(_message.style=="newsletter")html+='\x3cdiv id\x3d"rml_email" style\x3d"display:inline-block;"\x3e'+'\x3cdiv id\x3d"rml_email_box"\x3e\x3cinput onchange\x3d"RML._validateEmail(event);" onkeydown\x3d"RML._validateEmail(event);" id\x3d"rmlEmailVal" type\x3d"text" value\x3d"'+email+'" placeholder\x3d"Enter your email address"\x3e\x3c/div\x3e'+
'\x3cdiv id\x3d"rml_submit_button" onclick\x3d"RML.submit(event);"\x3e\x3cspan class\x3d"spinner"\x3e\x3ci id\x3d"rmlSpinner" class\x3d"fa fa-spinner fa-spin" aria-hidden\x3d"true" style\x3d"display:none"\x3e\x3c/i\x3e\x3c/span\x3e Sign up\x3c/div\x3e\x3cdiv id\x3d"rml_terms"\x3eBy submitting your email, you agree to our \x3ca target\x3d"terms" href\x3d"http://www.washingtonpost.com/terms-of-service/2011/11/18/gIQAldiYiN_story.html"\x3eTerms of Service\x3c/a\x3e and \x3ca target\x3d"terms" href\x3d"http://www.washingtonpost.com/privacy-policy/2011/11/18/gIQASIiaiN_story.html"\x3ePrivacy Policy.\x3c/a\x3e \x3c/div\x3e'+
"\x3c/div\x3e"+"\x3c/div\x3e"+"\x3cdiv id\x3d'i_userMessagesDismiss'\x3e\x26times;\x3c/div\x3e"+'\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"recaptcha_rml" class\x3d"grecaptcha"\x3e\x3c/div\x3e\x3c/div\x3e';$(".top-nav").append(html).css("overflow","visible");window.RML._validateEmail()}else if(_message.style=="audio_series"){_message.html=_message.html.replace("color:white","color:#ffffff");if(mobile)dynamicPadding="55px";$(".top-nav").append("\x3cdiv id\x3d'i_userMessages' class\x3d'audio' onclick\x3d'event.stopImmediatePropagation();' style\x3d'"+
dynamicStyle+";background:#1955a5 url(https://subscribe.washingtonpost.com/acq/images/audio_series_bg.png)';background-size:cover;\x3e"+"\x3cdiv style\x3d''\x3e\x3cdiv style\x3d'margin-left:"+dynamicPadding+";margin-right:"+dynamicPadding+";'\x3e\x3cdiv id\x3d'i_audiomessage'\x3e"+_message.html+"\x3c/div\x3e"+'\x3cdiv id\x3d"audio_buttons"\x3e'+'\x3cdiv id\x3d"audio_send_offer_button" onclick\x3d"window.location.href\x3d\''+_message.link+'\';"\x3e\x3cimg src\x3d"https://subscribe.washingtonpost.com/acq/images/audio_icon.svg" style\x3d"width:15px;height:21px;vertical-align:middle;"\x3e \x3cspan style\x3d"vertical-align:middle;"\x3eStart listening\x3c/span\x3e\x3c/div\x3e'+
"\x3c/div\x3e"+"\x3c/div\x3e"+"\x3cdiv id\x3d'i_userMessagesDismiss' style\x3d'background-color: rgba(0,0,0,0.5);height: 36px;width: 36px;line-height: 36px;font-size: 36px;top: 7px;'\x3e\x26times;\x3c/div\x3e"+"\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e").css("overflow","visible")}else{_message.html=_message.html.replace("color:white","color:#ffffff");$(".top-nav").append("\x3cdiv id\x3d'i_userMessages' style\x3d'"+dynamicStyle+"'\x3e"+"\x3cdiv style\x3d'padding:13px;'\x3e\x3cdiv style\x3d'margin-left:"+
dynamicPadding+";margin-right:40px;'\x3e"+_message.html+"\x3c/div\x3e"+"\x3cdiv id\x3d'i_userMessagesDismiss'\x3e\x26times;\x3c/div\x3e"+"\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e").css("overflow","visible")}var $userMessages=$("#i_userMessages");var messageHeight=$userMessages.css("height");var lastMessageHeight=messageHeight;var pageHeight=$("#page").css("height");originalPageHeight=pageHeight;pageHeight=parseInt(pageHeight)+parseInt(messageHeight);$("#page").css("height",pageHeight+"px");var headerHeight=
$("#wp-header").height();$userMessages.css("top",headerHeight+"px");$userMessages.css("height","0px");$userMessages.css("display","block");$userMessages.animate({height:messageHeight},function(){$userMessages.css("height","auto")});setTimeout(function(){omnitureShowMessages(_message.reason,"event66")},2E3);$userMessages.click(function(){if(_message.link=="#"&&_message.button_click===null)$("#i_userMessagesDismiss").click();else if(_message.trigger&&_message.trigger.type=="until_dismissed_or_clicked"){_dismissMessageServer(_message.id,
_message.reason,true);window.location.href=_message.link}else window.location.href=_message.link});$("#i_userMessagesDismiss").click(function(event){event.stopPropagation();if(_message.dismiss=="server")_dismissMessageServer(_message.id,_message.reason);else if(_message.dismiss=="local")_dismissMessageLocal(_message.id,_message.reason);else _dismissMessageSession(_message.id,_message.reason);omnitureShowMessages(_message.reason,"event63")});$(window).resize(function(){$userMessages=$("#i_userMessages");
$userMessages.css("height","auto");var newMessageHeight=$userMessages.css("height");var heightChange=parseInt(newMessageHeight)-parseInt(lastMessageHeight);lastMessageHeight=newMessageHeight;var pageHeight=$("#page").css("height");pageHeight=parseInt(pageHeight)+heightChange;$("#page").css("height",pageHeight+"px")})}};var _showMessages=function(){var articlePage=window.location.pathname.match(/\//g).length>4&&window.location.pathname!="/pb/homepage/"&&window.location.pathname!="/"&&window.location.pathname!=
"";if(articlePage&&!showingBreakingNewsBar())_getUserMessages(_displayMessages,true)};TWP.Identity.showMessages=_showMessages;TWP.Identity.getUserMessages=_getUserMessages;TWP.Identity.dismissMessageServer=_dismissMessageServer;TWP.Identity.omnitureShowMessages=omnitureShowMessages;TWP.Identity.hideMessageArea=_hideMessageArea;init()})(window.Zepto||window.jQuery);