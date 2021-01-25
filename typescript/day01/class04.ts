/**
 * Getter 与 Setter
 */
class Person{
    constructor(private _age:number){}
    get getAge(){
        return this._age;
    }
    set setAge(age:number){
        this._age = age;
    }
    static say():string{
        return "123"
    }
}
const p4:Person = new Person(19);
p4.getAge;
p4.setAge = 20

Person.say();
