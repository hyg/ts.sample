import { machine } from './machine';

interface FSM extends machine{
    s0:string;
    state:[string];
    event:[string];
    action:[(obj:FSM)=>FSM];
    f(obj:FSM,event:string):FSM;
}

interface TEST {
    name:string;
    age:number
}

var f:TEST = {name:"hyg",age:49};
export {f}