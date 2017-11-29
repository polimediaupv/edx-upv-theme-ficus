$(function() {
        $('#cookiechangerlink').leanModal({ top : 200 , clickClose : "false", closeButton: "cl"});
        $( "#change_cookies" ).change(function() {
            alert( "Handler for .change() called." );
        })
        $("#cookiesaccept").click(
             function()
             {
               SetCookie('complianceCookie','True',30);
               //location.reload();
               window.location.href=window.location.href;
             }
        );
        $("#cookiesdeny").click(
             function()
             {
               SetCookie('complianceCookie','False',30);
               eraseCookie('complianceCookie');
               clearCookie('__utma','.upv.es','/');
               clearCookie('__utmb','.upv.es','/');
               clearCookie('__utmc','.upv.es','/');
               clearCookie('__utmz','.upv.es','/');
               window.location.href = 'http://www.upv.es';
             }
        );
    });
 var cookieDuration = 14;                    // Number of days before the cookie expires, and the banner reappears
 var cookieName = 'complianceCookie';        // Name of our cookie
 var cookieValue = 'True';                     // Value of cookie
 document.addEventListener('DOMContentLoaded', function()
    {
     if(checkCookie(window.cookieName) != window.cookieValue)
     {
        document.getElementById('cookiechangerlink').click();
     }
     else
     {
     }
    });
    var createCookie = function(name, value, days) {
        var expires;
        if (days)
        {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        else
        {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }
 function checkCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
 }
 function SetCompCookie(cookieValue)
 {
     SetCookie('complianceCookie',cookieValue,30);
     if (cookieValue=="True")
     {
         location.reload();
     }
     else
     {
         eraseCookie('complianceCookie');
         window.open('','_self').close();
     }
 }
 function SetCookie(cookieName,cookieValue,nDays) {
    var today = new Date();
    var expire = new Date();
    if (nDays==null || nDays==0) nDays=1;
    expire.setTime(today.getTime() + 3600000*24*nDays);
    document.cookie = cookieName+"="+cookieValue
                 + ";path=/;expires="+expire.toGMTString();
 }
 function clearCookie(d,b,c){try{if(function(h){var e=document.cookie.split(";"),a="",f="",g="";for(i=0;i<e.length;i++){a=e[i].split("=");f=a[0].replace(/^\s+|\s+$/g,"");if(f==h){if(a.length>1)g=unescape(a[1].replace(/^\s+|\s+$/g,""));return g}}return null}(d)){b=b||document.domain;c=c||"/";document.cookie=d+"=; expires="+new Date+"; domain="+b+"; path="+c}}catch(j){}};
 function eraseCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
 };
