import TSLib from './TSLib';

if(TSLib != null){
    cc.log('js 调用 ts');
    cc.log(TSLib);

    let ts = new TSLib();
    ts.print();
    cc.log(`libname:${ts.libname}`);
    cc.log(`tag:${TSLib.TAG}`);
}else{
    cc.log('null');
}