console.log("[+] FRIDA init")
console.log("[+] Hook Build Information")
setImmediate(function(){
    Java.performNow(function() {
        var MyBuild = Java.use("android.os.Build");
        myBuild.HARDWARE.value = "TestHardware";
        myBuild.FINGERPRINT.value = "TestFingerprint";
        myBuild.DEVICE.value = "TestDevice";
        myBuild.BOARD.value = "TestBoard";
        myBuild.MODEL.value = "TestModel";
    });
});
    
