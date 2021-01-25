/**
 * typescript 访问类型
 * //  构造函数
 */

 class Person{
     public name:string;
     private age:number;
     constructor(name:string, age:number){
       this.name = name;
       this.age = age;
     }
     public sayHello():void{
        console.log(this.name);
     }
     public toAge():void{
         console.log(this.age);
     }
 }
const sj: Person = new Person('123',19);
 
class Women extends Person{
    public ss:string;
    constructor(ss:string){
      super("tom",12);
      this.ss = ss;
    }
    public run():void{
        console.log("run");
    }
}

const w:Women = new Women("123");