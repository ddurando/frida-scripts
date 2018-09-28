var unlinkatPtr = Module.findExportByName("libc.so", "unlinkat");
var unlinkat = new NativeFunction(unlinkatPtr, 'int', ['int', 'pointer', 'int']);

function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

Interceptor.replace(unlinkatPtr, new NativeCallback(function (pathPtr, flags) {
    
    console.log("[*] paused unlinkat")
    pausecomp(10000)
}, 'int', ['int','pointer', 'int']));



 
 
  
