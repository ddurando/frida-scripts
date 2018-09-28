console.log("[+] FRIDA init")
setImmediate(function(){
    Java.performNow(function() {
        ['java.lang.StringBuilder', 'java.lang.StringBuffer'].forEach(function(clazz, i) {
          console.log('[?] ' + i + ' = ' + clazz);
          var func = 'toString';
          Java.use(clazz)[func].implementation = function() {
            var ret = this[func]();
            send('[' + i + '] ' + ret);

          }
          return ret;
       
      });
})
});
    