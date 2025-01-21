let userdata={
    "name": "John",
    "age": 30,
}
console.log(userdata)
console.log(typeof(userdata))
let vasa=JSON.stringify(userdata);
console.log(typeof(vasa))
console.log(vasa)
let vasanth=JSON.parse(vasa)

console.log(typeof(vasanth))
console.log(vasanth)
// setTimeout,setinterel,promise,async,await
setTimeout(function(){
    console.log("hello")
},2000)
console.log("first this was excuted")
setTimeout(function(){
    console.log("hello")
},2000)
