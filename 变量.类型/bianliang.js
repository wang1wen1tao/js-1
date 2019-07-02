//undefined null 0 -0 NaN "" 返回false
//number string null undefined boolean
console.log(true === undefined)
console.log(false === undefined)
console.log(null === undefined)
let a = new String("a");
console.log(a);

//类型转换
var a1=['a','b','c'];
var b = [];
for(var i  = 0 ;i < a1.length;i++){
    b[i] = a1[i]
}
console.log(b);

function isArry(a,b){
    if(a.length != b.length) return false;
      for(let i in a){
          if(a[i]===b[i]) return true;
      }
    return true;  
}
var aa = isArry(a1,b)
console.log(aa)
console.log(10+'axxas');
console.log("2"*"2");
console.log("sd"*"swcsd");
var n;
console.log(n);
console.log(0===null) //false
console.log(0 == undefined) //false
console.log(null == undefined);  //true