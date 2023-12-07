
/*practice se
// 1-create an arry of number and take input from the user to add number to this arry*/
// let num=[2,4,4,5]
// let a=prompt("enter a value")
// a=parseInt(a)
// num.push(a)
// console.log(num)

//most imp question 

let x=Math.random()
console.log(x)
let vari=x
do{
let a=prompt("enter value 1-100")
a=parseInt(a)
if(x==a){
    console.log("guess correct nuumber")
}
else if(x>=a){
    console.log("guessno is greater than correct nuumber")

}
else(x<=a)
    console.log("guess incorrect nuumber")
}while(x==a)

console.log(a)

// let arr=[4,5,6,7,8]
// let a;
// do{
//     let num=[2,4,4,5]
//     let a=prompt("enter a value")
//     a=parseInt(a)
//     num.push(a)
//     console.log(num)
// }while(a!=0)
// console.log(arr)



//2-filter for number divisible by 10 from an given arry
// let k=[100,55,15,700,50]
// let arr=k.filter((value)=>{
//     return (value%10==0)
// })
// console.log(arr)

//create an arry of square of given number
// let l=[2,3,4,5]
// let w=l.map((value)=>{
//     return value*value
// })
// console.log(w)




//calculate fact using reduce method
// let arr=[1,2,3]
// let n=arr.reduce((value,value1)=>{
//     return value*value1 

// })
// console.log(n)


// let num=[4,5,6,7]
// let newarr=num.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(newarr)


// let n=num.filter((value)=>{
//     console.log(value)
//     return value >5
// })
// console.log(n,num)

// for(let i in num){
//     console.log(num[i])
// }


// for(let i=0;i<num.length;i++){
//     console.log(num[i])
// }


// num.forEach((element)=>{
//     console.log(element*element)
// })