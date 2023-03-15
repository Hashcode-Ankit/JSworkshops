
console.log("hello")
console.log(ankit)
var a = 10
ankit()

let c = 20
function ankit(){
    var b= 20
    function hello(){
        console.log("hello")
        a = 10
    }
    hello()
    console.log("ankit")
}