//forEach 从头至尾遍历数组
let a  =[1,2,3,4,5];
let sum = 0;
a.forEach(i => {
   sum+=i;
});
console.log(sum)
//map 调用数组的每个元素传递给指点函数,返回一个新数组
let b = [1,2,3,4,5,6]
let c = b.map(x=>{
    return x*x
})
console.log(c);
//filter 返回数组元素是调用数组元素的的一个子集，用逻辑判定
let h = b.filter(x=>{
    if(x > 3)
    return x*x
})
console.log(h);
//every some 是数组的逻辑判定,他们对数组指定的函数进行判定
//every 针对所有的的元素
let e = b.every(x=>{
    if(x % 2 == 0)
    return true;
 // return false  
})
console.log(e);
//some 针对其中一个元素
let ee = b.every(x=>{
    if(x % 2 == 0)
    return true
 // return false  
})
console.log(ee)
//join 将数组中的元素转化为字符串并连接在一起返回的字符串
let s = [1,2,3]
console.log(s.join())
console.log(s.join(" "))
console.log(s.join('&'))
//reverse() 反转数组
console.log(...s.reverse());
//sort() 数组元素排序
//splice() 删除数组元素
//pop()push 数组当栈使用
//slice 返回子数组
//ES6语法数组
//扩展运算符
console.log(...[1,2,3]);
console.log([1,2,3]);
console.log(1,...[2,3,4],5);
function add(x,y,z){
   return x+y-z;
}
let number = [2,3,2];
console.log(add(...number))
console.log(Math.max.apply(null,[1,2,3]))
console.log(Math.max(...[1,2,3]));
let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log(arr1.push(...arr2));