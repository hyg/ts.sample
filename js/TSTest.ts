import JSLib = require('./JSLib');

if(JSLib != null){
    cc.log('ts 调用 js');
    cc.log(JSLib);
    JSLib.print();
    cc.log(`libname:${JSLib.libname}`);
}else{
    cc.log('null');
}