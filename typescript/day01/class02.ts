/**
 * 类
 */
class Lady{
    name:string = "123";
    age:number = 12;
    say(): string{
       return "1233"
    }
}
const p9:Lady = new Lady();
console.log(p9.say());

class Sister extends Lady{
    a:string = '1232';
    eat(): string{
       return 'eat'
    }
    say():string{
        return super.say()+'dddd'
    }
}
const s1:Sister = new Sister();
console.log(s1.eat());

