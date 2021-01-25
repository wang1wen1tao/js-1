/**
 * 泛型
 */

 function myFun<ANY>(param:ANY[]){
   return param
 }

 myFun<string>(["1","2","3"])


 function myFunOne<ANY>(param:Array<ANY>){
      return param;
 }

 myFunOne<number>([1,2,3])


 function join<T,P>(first:T,second:P):string{
     return `${first}${second}`
 }

join<string,string>("123","344")


class BigCar<T>{
    constructor(private girl:T[]){};
     getIndex(index:number){
         return this.girl[index];
     }
}
const b1:BigCar<number> = new BigCar<number>([1,2,3]);
b1.getIndex(2);