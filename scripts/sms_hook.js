console.log("[+] FRIDA init")
setImmediate(function(){
    Java.performNow(function(){
        console.log("[*] 'SmsManager.sendTextMessage' hooked successfully");
        sms = Java.use("android.telephony.SmsManager");
        sms.sendTextMessage.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'android.app.PendingIntent', 'android.app.PendingIntent').implementation = function(destinationAddress, scAddress, text, sentIntent, deliveryIntent){
            console.log("[SMS] destinationAddress: " + destinationAddress);
            console.log("[SMS] scAddress: " + scAddress);
            console.log("[SMS] text: " + text);
            return;
        }
    });
});
    