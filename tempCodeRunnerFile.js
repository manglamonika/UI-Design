let num=[2,4,4,5]
let a=prompt("enter a value")
a=parseInt(a)
let newarr=num.map((value)=>{
    return value+a
})
console.log(newarr)