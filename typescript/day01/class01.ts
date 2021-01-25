/**
 * 1.ts的静态类型
 * 2.ts自定义静态类型
 */
let count :number;
count = 1;


interface car {
  name:string,
  seat:number
}
const newCar :car ={
  name:'123',
  seat:3,
}

interface person{
    age:number,
    isAdmin:boolean
}
const p:person = {
    age:12,
    isAdmin:false
}

/**
 * 1.基础静态类型和对象类型
 */

 const data:{
     arr:string,
     code:number,
 } = {
    arr:'123',
    code:200
 }

 const arr :string [] = ["张三","李思"];

class Peoples {}

const pr: Peoples = new Peoples();

const fun: () =>string = ()=>{
    return '123';
}

/**
 *  函数参数和返回类型的定义
 */

function add(one:number,two:number):number{
    return one+two;
}

const cc:number= add(1,2)

function add1():void{
    console.log(123);
}
add1();

function add3({one,two}:{one:number,two:number}):number{
    return one+two;
}

/**
 *  数组类型的定义
 */

const arr2:number[]=[1,2,3];

const un:undefined[] = [undefined,undefined];

const arr3:any[] = ['1',1,{name:'1'}];

const arr4:(number | string )[] = [1,'123123'];

const p1: {name:string,age:number}[] = [
   {name:'123',age:12},
   {name:'147231',age:15}
]

type lady = {name:string,age:number};

const p2:lady[] = [
    {
        name:'12',
        age:12
    }
]

/**
 * 元组的基本使用
 */

 const x:(string | number)[]= ["123","123",12]

 const y:[string,string,number] = ["123","1",12]


/**
 * interface 接口
 *  
 */

 interface Girl{
     name:string,
     age:number,
     phone:string
 }

const fun1 = (gril:Girl)=>{
   console.log(gril.name);
}
const gril = {
    name:"1233",
    age:123,
    phone:'123213123'
}
fun1(gril);