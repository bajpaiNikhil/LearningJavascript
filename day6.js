console.log("I!Stupid")


function hello() {
    console.log("hehehaha")

}
hello()

function xyz(){
    console.log("hehehahaha")
}

xyz()

function add(a,b){
     return a+b
}

let s = add(5,3)
console.log(s)

function namee(c){
    console.log("name is :",c)
}
namee("abc")

function nameee(c){
    return c
}
console.log(nameee("abc"))
let f = "Hello " + nameee("abc")
console.log(f)

 
function printVariable(variable){
    console.log(variable)
}

function func(x){
    x("hehehaha1")
}
func(printVariable)
//console.log(printVariable(3))


function sumCallBack(a,b,callBack){
    callBack(a+b)
}

function handleSum(sum){
    console.log(sum)
}
sumCallBack(2,3,handleSum)




function func2(variable2,callingFunction){
    callingFunction("hello " + variable2)
}

function func1(variable1){
    console.log(variable1)
}

func2("name",func1)