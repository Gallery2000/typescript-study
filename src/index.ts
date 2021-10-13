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

interface Add{
    (x:number,y:number):number
}

// 类型别名

type Add2 = (x:number,y:number)=>number

// let add2:Add2 = (a,b)=>a+b;


// 混合类型接口

interface Lib{
    ():void;
    version:string;
    doSomeThing():void;
}

function getLib(){
    let lib:Lib = (()=>{}) as Lib;
    lib.version = '1.0';
    lib.doSomeThing = ()=>{};
    return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomeThing();
let lib2 = getLib();

 function add1(x:number,y:number){
     return x+y;
 }
 
 let add2:(x:number,y:number)=>number;

interface add3{
    (x:number,y:number):number
}

type add4 = (x:number,y:number)=>number;

function add5(x:number,y?:number){
    return y?x+y:x;
}

function add6(x:number,y=2,z:number){
    return x+y+z;
}
console.log('add6',add6(0,undefined,3));

function add7(x:number,...rset:number[]){
    return x+rset.reduce((pre,curr)=>pre+curr,0);
}

console.log('add7',add7(1,2,3,4,5,6,7,8));

// 函数重载
function add8(...rset:number[]):number;
function add8(...rset:string[]):string;
function add8(...rest:any[]):any{
    let first = rest[0];
    if(typeof first==='string'){
        return rest.join('');
    }
    if(typeof first==='number'){
        return rest.reduce((pre,cur)=>pre+cur,0);
    }
}

console.log('add8',add8(1,2,3));
console.log('add8',add8('a','b','c'));



class Dog{
    // private constructor 不能实例化，也不能继承
    // protected constructor 不能实例化，只能被能继承
    constructor(name:string){
        this.name = name;
    }
    public name:string
    run(){

    }
    private pri(){

    }
    //属性“pro”受保护，只能在其子类中访问。
    protected pro(){

    }
    readonly legs:number = 4;
    static food:string = 'bones'
}  

console.log(Dog.prototype);
const dog = new Dog('wangwang');
console.log('dog',dog);
// dog.pri();
// dog.pro();
// dog.legs++;
console.log(Dog.food);
//类的静态方法只能在构找函数时调用

class Husky extends Dog{
    // public修饰符
    constructor(name:string,public color:string){
        super(name);
        this.color = color;
        // this.pri();
        this.pro();
    }
    // color:string
}

class Cat{
    constructor(name:string){
        this.name = name;
    }
    name:string;
    run(){
        
    }
}
Cat.prototype //{run:f,constructor:f} 类的原型不包括属性
new Cat('miaomiao') //{name:'miaomiao'} 类的属性只在实例上


//abstract 类修饰符，使类只能被继承
abstract class Animal{
    constructor(name:string){

    }
    // 抽象方法，不指定方法的具体实现
    abstract sleep():void
}

class Monkey extends Animal{
    constructor(name){
        super(name);
    }
    run(){

    }
    sleep(){
        console.log('monkey sleep')
    }
}

let monkey = new Monkey('qitiandasheng');
monkey.sleep();

class Mouse extends Animal{
    constructor(name){
        super(name);
    }
    sleep(){
        console.log('mouse sleep')
    }
}

let mouse = new Mouse('shushu');

let animals:Animal[] = [monkey,mouse];

animals.forEach(i=>{
    i.sleep();
});

// this类型

class WorkFlow{
    step1(){
        return this;
    }
    step2(){
        return this;
    }
}
const workFlow = new WorkFlow();
workFlow.step1().step2();


class MyFlow extends WorkFlow{
    next(){
        return this;
    }
}

new MyFlow().next().step1().next().step2();


interface Human{
    // new(name:string):void
    name:string;
    eat():void;
}

class Asian implements Human{
    constructor(name){
        this.name = name;
    }
    name:string;
    eat(){}
    sleep(){}
}

interface Man extends Human{
    run():void
}

interface Child{
    cry():void
}

interface Boy extends Man,Child{

}

let boy:Boy = {
    name:'123',
    eat(){},
    run(){},
    cry(){}
}

// 类继承接口用implements,其他都用extends，
class Auto{
    state = 1;
}
interface AutoInterFace extends Auto{

}

class C implements AutoInterFace{
    state = 1;
}

class Bus extends Auto implements AutoInterFace{
     
}




document.querySelectorAll('.app')[0].innerHTML = 'hello typescript';
