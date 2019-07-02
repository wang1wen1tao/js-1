/*function print(o){
    for(let i in o)
    console.log(o[i]);
}*/
(o=>{
 console.log(o)
})(2)
let number = [2,3];
console.log(...number);
/*function distance(x1,x2,y1,y2){
    let dx = x1-x2;
    let dy = y1-y2;
    return Math.sqrt(dx*dx+dy*dy);
}*/
let res = [8,9,10,2]
console.log(distance(...res));
function jiecheng(x){
    if(x < 1) return 1;
    else return   x * jiecheng(x-1);   
}
for(let i = 0;i < 4;i++){
    console.log(jiecheng(i));
}
let person = {
    name:'李四',
    age:12,
    add:function (){
        console.log(this.age);
    }
}