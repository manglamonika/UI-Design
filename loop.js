// most important dom
// let doci=document.body
// console.log(doci)
// let ii=document.body.childNodes.length
// console.log(ii)
// let w=alert(Array.from(document.body.childNodes).filter)
// alert(document.body.parentNode===document.documentElement)
// alert(document.documentElement)
// alert(document.head.nextSibling)
// alert(document.body.previousSibling)
// alert(document.documentElement.parentNode)
// alert(document.documentElement.parentElement)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// let arr=Array.from(document.body.childNodes)
// console.log(arr)
// console.log(document.body.childNodes[0]===document.body.firstChild)
// console.log(document.body.childNodes[document.body.childNodes.length-1])===document.body.lastChild
// console.log(document.body.firstChild)
// b=document.body.firstChild
// console.log(b.parentNode)
// console.log(b.parentElement)
// console.log(b.firstChild.nextSibling)
// console.log(document.body.textContent)
// console.log(document.getElementById("first"))
// let c=first.getAttribute("class")
// console.log(c)
// console.log(first.hasAttribute("class"))
// console.log(first.hasAttribute("style"))
// first.removeAttribute("class","true sachin")
// console.log(first.attributes)
// console.log(first.dataset)
// console.log(first.dataset.player)
// console.log(first.dataset.set)


let a=document.getElementsByTagName('div')[0]
a.innerHTM=a.innerHTML +"<h1>hello </div>"



 









//array 
// let marks_class12=[78,89,56,47,76,"radhe","null"]
// console.log(marks_class12[0])
// console.log(marks_class12[1])
// console.log(marks_class12[3])
// marks_class12[8]=77
// console.log(marks_class12[8])
// marks_class12[7]=70
// console.log(marks_class12[7])


// console.log(marks_class12)

// let obj=[4,6,7,"harry"]
// for(let y in obj){
//     console.log(obj)
// }

// let n=[5,6,7,"jj"]// for (let i=0
    
//     ;i<n.length;i++){
//     console.log(i)
// }

//array method

//it convert the array into string

// let m=[4,8,2,7,77,"harry"]
// console.log(m.length)

// let n=m.toString()
// console.log(n,typeof(n))

// let s=m.join("and")
// console.log(s)

// // let h=m.pop()
// m.pop()
// console.log(m)
// m.push(2)
// m.push("to",3)
// console.log(m)
// let k=delete m[1]
// console.log(m.length)

// let h=m.shift()
// console.log(h,m)
// let l=[7,8,2,"radhe"]
// let k=[99,77,88 ]
// console.log(m.concat(l,k))
// let compare=(a,b)=>{
//     return b-a
// }
// let fruit=["banana","apple",888,101,567,433,11,44,"oo",25,100]
// fruit.sort(compare) 
// fruit.reverse()
// console.log(fruit)/

// fruit.splice(2,4,121,222,233,555)
// console.log(fruit)
// let fe=[2,3,4,5,6,7]
// console.log(s)
// let num =fe.slice(-3,-1)
// console.log(num)





















// let by="HAr\"ry"
// console.log(by.length)
//string prototype .include()

// const h="a";
// const m="b";
// if(a<b){
//     console.log(`${m }is greater than ${h}`)
// }
// else if(a>b){
//     console .log(`${h} is greater than ${m }`)
// }
// else{
//     console.log(`${m } and m are equal ${h}`)
// }



// const s1="2+2"
// const s2=new String("2+2");


// console.log(s1)
// console.log(eval(s1 ))
// console.log(s2)
// console.log(eval(s2))
// console.log(eval(s2.valueOf()))

// let text="abcdEFGHI,Jklno ,pQRSTUVWXYZ"
// console.log(text.substring(7,6
//     ))
// console.log(text.slice(2,4))
// console.log(text.includes("m"))
// console.log(text.startsWith("a"))
// console.log(text.toUpperCase())


// q-3of string extract the amount of string "pls give rs1000"
// const w="please give rs 1000"
// let amount=Number.parseInt(w.slice("please give rs".length ))
// console.log(amount)

// let friend="       deepika    hii         "
//console.log(friend.replace("hii","RADHE"))
// friend[3]="r"
// console.log(friend)//friend is not change bcz string is immutabl 

// console.log(friend.trim())
// console.log(friend.trimStart())
// console.log(friend.trimEnd())

// let num='5'
// console.log(num.padEnd(10,'abcdefg'))


 



































//template literal
// let b1="prem"
// let b2="radha"
// let sentence=`${b2} krishn se ${b1} krti h`
// console.log(sentence)


//escape sequence character

// let n="harry bhai"
// //console.log("name\r",n.toLowerCase())
// //console.log(n.slice(2))
// console.log(n.replace("bhai","bab"))



//concatenate
// let a="   radhe    "
// let b="krishna"
// console.log(b.concat(a))
// console.log(a.trim())


// let a="cat"
// console.log(a.charAt(1))





// let n="harry"
// console.log(n[0])


// const sum =(a,b)=>{
//     console.log("hii radha rani")
// return a+b
// }
// console.log(sum(5,6))//function special type

// f to c
// function tocelcius (f){
//     return (5/9)*(f-32)

// }
// let y=tocelcius(56)
// console.log(y)


// function myFunc(theobject){
//     theobject="toyata"
// }
// const mycar={
//     make:"honda",
//     model:"hyundai",
//     year:1998
// }
// console.log(mycar.make)

// myFunc(mycar);
// console.log(mycar.make)


// function fact(n){
//     if(n==0||n==1){
//         return 1;
//     }
//     else{
//         return n*fact(n-1)
//     }
// }
// console.log(fact(5))














// function oneplusav(x,y){
//     return Math.round (1+(x+y)/2)
// }



// let a=1
// let b=2
// let c=3

// console.log("avg",oneplusav(a,b))
// console.log("avg",oneplusav(b,c))
// console.log("avg",oneplusav(c,a))












// let n=prompt("enter value")
// n=Number.parseInt(n)
// let i=10
// do{
//     console.log(i)
//     i++
// }while(i<n)





// let fact=1
// let n=prompt("enter value of n")
// n=Number.parseInt(n)
// for(let i=1;i<=n;i++){
//     fact=fact*i
    
    

// }
// console.log(fact)