


function sum(a,b){
    return a+b
}
console.log(sum(1,3))

let sumArrow = (a,b) => {
    return a+b
}
console.log(sumArrow(1,3)
)

let sumArrowModify = (a,b) => a+b

console.log(sumArrowModify(90,0))


let printName = (name) => {
    return name
}
console.log(printName("abs"))

let printHi = (namee) => "hi " + namee

console.log(printHi("dfkvnzdjkvn"))


//hoisting


function sum(a,b){
    return a+b
}

console.log(sum(1,3))


//closure

function print(variable_1){
    let c=3
    return function func(variable_2) {
        console.log(variable_1)
        console.log(variable_2)
        console.log(c)
    }
}
 
aa = print(11)

aa(2)
