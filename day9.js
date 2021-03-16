/*
console.log(90989098909)


const a = [1,2,3,4,5,6 ,7,8,1010]

console.log(a[0])
console.log(a[3])
console.log(a[5])
console.log(a[1])
console.log(a[4])

a.push(199)

console.log(a)

a.push(["hehehe","oisdfvnoasdjk"])
console.log(a) 

console.log(a.length)
*/


 let person = {
    name:'difdsijv',
    age:23,
    favoriteNumner:3,
    sayHi: function (){
        console.log("say HELLOW")
    },
    sayHE(){ 
        console.log("ijvnaijsvjidvniajdbvahd")
    }
}

console.log(person)
console.log(person.favoriteNumner)
console.log(person.sayHi())
person.sayHi()    
person.sayHE()

let car ={
    makeer : "sdifuvb",
    model : "sdbisndaifjv",
    isUsed : true,
    makeNoise(){
        console.log("vroom")
    }
}
console.log(car)
console.log(car.isUsed)
car.makeNoise()



let person2 = {
    name:"jdfvnadjivna",
    hobbies:["kjvn","advn",293423],
    address:{
        street:"1234rdsfdfbbfvsd",
        city: "nowhere"
    }
}

console.log(person2)
console.log(person2.name)
console.log(person2.hobbies)
console.log(person2.address.city)


let book={
    Title:"sfvinasjidbhfnjkfadj",
    Author:{
        name:"dnvsfkooajfvfkofssfksofjko",
        age :-123049,
    }
}

console.log(book)
console.log(book.Title)
console.log(book.Author)
console.log(book.Author.age)



let a11=[1,2]
let b11=[1,2]

console.log(a11===b11 )//here memory address are being checked and they are different . 

const a = [3432,2]

const elementToAdd = 3

add(a,elementToAdd)
console.log(a)

function add(a,elementToAdd){
    a.push(elementToAdd)
}
























