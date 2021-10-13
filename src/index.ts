//原始类型
let bool:boolean = true;
let num:number = 2;
let str:string = 'string';

// 数组
let arr1:number[] = [1,2,3];
let arr2:Array<number> = [1,2,3];

//元组
let tuple:[number,string] = [1,'2'];

// 函数
let add = (x:number,y:number)=>x+y;
let compute:(x:number,y:number)=>number;
compute = (a,b)=>a+b;

//对象
let obj:{x:number,y:number} = {x:1,y:2}

// symbol
let s1:symbol = Symbol();
let s2 = Symbol();
console.log('symbol',s1===s2);

// undefind null

let un:undefined = undefined;
let nu:null = null;

// void
let noReturn = ()=>{};

// any
let x;

// never
let error = ():never=>{
    throw new Error("error");
}

let endLess = ():never=>{
    while(true){}
}

// 数组枚举

enum Role {
    Reporter=1,
    Developer,
    Maintainer,
    Owner,
    Guest
}

console.log('Role',Role);

enum Message {
    Success='恭喜你，成功了',
    Fail='抱歉，失败了'
}

console.log(Message,'Message');


enum Char{
    a,
    b=Char.a, 
    c=1+3,
    d=Math.random(),
    e='123'.length,
    f=4
}

console.log(Char,'Char');

// 常量枚举（编译或会移除）
const enum Month {
    Jan,
    Feb,
    Mar
}

//接口
interface List {
    readonly id:number;
    name?:string;
    [x:string]:any
}

interface Result{
    data:List[]
}

function render(result:Result){
    result.data.forEach(value=>{
        console.log(value.id,value.name,value.age);
        // value.id = 1;
    })
}

let result = {
    data:[
        {id:1,name:'A',sex:'male'}
    ]
}

render(result);

interface StringArray{
    [index:number]:string
}

let chars:StringArray = ['a','b'];

interface Names {
    [x:string]:any;
    [y:number]:string;
}












document.querySelectorAll('.app')[0].innerHTML = 'hello typescript';
