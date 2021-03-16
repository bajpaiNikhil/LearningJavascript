

function createUser(name,age){

    return {name: name, age: age, humna : true}
}

function User(name,age){
    this.name=name
    this.age=age
    this.isHuman=true
} 

const user1= createUser("seritugerwo",098)
console.log(user1)

const user2= new User("vjdkms",98890)
console.log(user2)

/*
const date = new Date()
console.log(date)
*/




