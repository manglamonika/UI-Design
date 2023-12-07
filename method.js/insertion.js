//synchronous programming run one after another
// let x=prompt("what is ur name")
// document.write(x)
// let b=prompt("what is ur age")
// document.write(b)

// let c=prompt("what is ur fav color")
// document.write(c)

// console.log(x+"is" +b+ "years old" +c+"blue ")

//asynchronous progamming yh age piche chl skti h like pehle start ayega  fr end than ey i am good after 3 sec
// console.log("start")
// setTimeout(function(){
//     console.log("hey i am good")
// },3000)
// console.log("end")

//call back function
// function loadScript(src){
//     let script=document.createElement('script')
//     script.src=src
//     script.onload=function(){
//     console.log("src"+src)
//     callback()
//     }
//     document.body.appendChild(script)
// }
// function hello(){
//     alert("hello")
// }
// function goodmrning(){
//     alert("goodmorning")
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",hello 
// )


// function add (a,b,callback){
//     console.log(`the sum of ${a} and ${b} is ${a+b}`)
//     callback()
// }
// function disp(){
//     console.log("this")
// }

// const cal=(a,b,operation)=>{
//     return operation(a,b)
// }
// const addition=cal(3,4,function(num1,num2){
// return num1+num2
// })
// console.log(addition)

// const subtracr=(a,b)=>a-b
//     const subresult=cal(8,6,subtracr)
    
//     console.log(subresult)

// function multiply(c,d){
//     return c*d
// }
// const remult=cal(5,6,multiply)
// console.log(remult)

// add(5,6,disp  )

// var promise=new Promise(function(resolve ,reject){
// const x="geeks for geeks"
// const y="geeks for geeks"
// if(x==y){
//     resolve()
// }
// else{
//     reject()  
// }
// })

// promise.then(function(){
//     console.log("success")
// }).catch(function(){
//     console.log('some error')
// }).finally(function(){
//     console.log("i will always be executed")
// })

// const fun=(num)=>{
//     return num+num
// }
// console.log(fun(3))

// other function call back function
let w=[4,-6,7,-7,9,-4]

// const fun=(num)=>{
// return num < 0
// }
// const d=w.findIndex(fun)
// console.log(d)
// w.forEach((num,i)=>{
//     console.log(num,i)
// })

// function mainfunc(callback){

//     console.log("performing operation")
//      w.find(callback)
//     w.forEach(callback)
// }
// function callbackfun(n,i){
//     console.log(n,i)
//     console.log(n>0 &&n<10)
// }
// mainfunc(callbackfun)


// function op(a,b,operation){
//     return operation(a,b)

// }
//  function addi(m,n){
//     return m+n
//  }
//  function sub(o,p){
//     return o-p
//  }  
 
//  function equal(s,t){
//     return s===t

//  }
//  console.log(op(8,4,addi))
//  console.log(op(8,7,sub))
//  console.log(op(8,"8",equal))

// function greet(name,callback){
//     console.log("hi"+name)
//     callback()
// }
// function callme(){
//     console.log("hello")
// }
// greet('peter',callme)

function getcheese(callback){
    setTimeout(function(){
        const cheese="😘"
console.log("cheese",cheese)
callback(cheese)
    },3000)
}
function makedough(cheese,callback){
    setTimeout(function(){
        const dough=cheese+"❤️"
console.log("make dough",dough)
callback(dough)
    },2000)
}
function makepizza(dough,callback){
    setTimeout(function(){
const pizza=dough+"👌"
console.log("here is ur pizza",pizza)
callback(pizza)
    },5000)
}
getcheese((cheese)=>{
console.log("yummy",cheese)
})

getcheese((cheese)=>{
    makedough(cheese,(dough)=>{
        console.log("make it",dough)

    })
})

getcheese((dough)=>{
    makepizza(dough,(pizza)=>{
        console.log("yummy pizza",pizza)
    })
})




// let a=document.getElementsByTagName('div')[0]
// // .innerHTML+="<h1>hello <h2>"

// let div=document.createElement('div')
// div.innerHTML+="<h1>hello </h1>"
// a.append(div)//before after append and prepend (div)

 
// function addcode(){
//     document.getElementById('first')
//     .innerHTML+="<h2>radhe radhe</h1>"
    

// }
// function addcode(){
//     document.getElementById('second')
//     .insertAdjacentElement("afterend",<h3>radhe radhe</h3>)
// }
// first.insertAdjacentHTML('beforeend','<div>beforend</div>')
// first.insertAdjacentHTML('afterend','<div>afterend</div>')
// first.insertAdjacentHTML('beforebegin','<div>beforebegin</div>')
// first.insertAdjacentHTML('afterbegin','<div>afterbegin</div>')
// first.remove()

//classlist and class name
// first.className="text-black "
// first.classList.add("red")
// first.classList.toggle("red")
// first.classList.add("red")
// first.classList.add("yellow")
// first.classList.add("blue")
// first.classList.contains("red")
// first.className="text-black -red"


//settimeout and set interval() method

// document.write("hello")
// let a=setTimeout(function(){
// alert("i am inside of settimeout")
// },5000)
// let b=prompt("do you want to run this time out y,n")
// if("n"==b){
//     clearTimeout(a)
// }
// // clearTimeout(a)
// console.log(a)

// const sum=(a,b)=>{
//     console.log("yes i am coming",a+b)
    
// }
// setTimeout(sum,1000,3,5)

// setInterval(function() {
//     alert("run")
// }, 3000);

// const sum=(c,d)=>{
//   console.log("execute",c+d
  
//   )
// }
// setInterval(sum,3000,5,6
//     )


// let x=btn.addEventListener('click',function(){
//     console.log(e.target)
//     alert("hello world 1")
// })

// let y=btn.addEventListener('click',function(){
//     console.log(e)
//     alert("hello world 2")
// })
// btn.addEventListener('click',x)

// let a=prompt("what is ur fav no 1 or 2")
// if (a=='2'){
//     btn.removeEventListener('click',y)
//         alert("hii")
    
// }

