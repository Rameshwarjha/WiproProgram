function add (num1:number,num2:number):number{
    return num1+num2;
}
function square (num1:number):number{
    return num1*num1;
}
let a:number=10;
let b:number=20;
  
console.log("Sum ",add(a,b));
let c:string="abc";
// console.log("Sum "+add(a,c));
let person:[string,number]=["abc",123];
console.log(person);
console.log("Square ",square(a))