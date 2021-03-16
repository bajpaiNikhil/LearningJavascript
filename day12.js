//console.log(window)
console.log("dfjos")

//alert("STIKOFMNDKMK")

console.log(document )

console.log(document.body)

console.log(document.documentElement)
/*
const element =  document.createElement("span")
element.innerText = "HEHEHEHAHAHAasdvdsfavddsa1"
document.body.appendChild(element)
way to add element into the html using document 
*/




const divById = document.getElementById("div_id")

divById.style.color="BLUE"

const divsWithClass = document.getElementsByClassName("div-class")

const divsWithClassArray = Array.from(divsWithClass)

console.log(divsWithClass)

console.log(divsWithClassArray)

divsWithClassArray.forEach(div=>(div.style.color="green"))

divsWithClassArray[2].style.color="red"




//selection of element using Query selector.

const dataAttribute = document.querySelector('[data-test]')
console.log(dataAttribute)

dataAttribute.style.color="violet"

const classAttribute = document.querySelectorAll('.div_class')
console.log(classAttribute)

const classAttributeArray = Array.from(classAttribute)
console.log(classAttribute)

classAttributeArray.forEach(div=> (div.style.color="white"))


const input1 = document.querySelector("input")
console.log(input1)

//add Event Listner >>

const btn = document.querySelector('[data-btn]')
console.log(btn)

function printClick(){
    console.log("Clicked")
}

btn.addEventListener("click",printClick)

//btn.removeEventListener("click",printClick) to remove event listner



const input = document.querySelector("[data-input-text]")


input.addEventListener("input",e =>{
    //console.log("input")
    console.log(e.target.value===" ")
})


//form

const form_data = document.querySelector("[data-form]")

form_data.addEventListener('submit',e=>{
    e.preventDefault()

    console.log("submitted")
})

const link = document.querySelector("a")

link.addEventListener("click",e=>{
    e.preventDefault()
    console.log("stoped")
})




