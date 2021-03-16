
console.log(324324)


let array=[1,2,4,3,1,3,4,5]
arrayLen=array.length
console.log(arrayLen)

array.forEach((element,index )=> {
    console.log(element,index)
})


const newArray = array.map((number)=>{
    return number*5
})

console.log(newArray)


const sum = array.reduce((sum,number)=>{
    return sum+number
} ,0)
console.log(sum)


const items = [
    {price : 10},
    {price : 20},
    {price : 30},
    {price : 40},
    {price : 50},
]
console.log(items[0].price)

const suum = items.reduce((sum,item)=>{
    return sum+item
},0)

