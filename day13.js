console.log(1*54923)

const grandParent = document.querySelector("#grand-parent")

//grandParent.style.color="Red"

const parentOne = grandParent.children[0]
//parentOne.style.color="red"
const parentTwo = parentOne.nextElementSibling
//parentTwo.style.color="violet"

const childOne = parentOne.children[0]
const childTwo = parentOne.children[1]

//childOne.style.color="red"
childTwo.style.color="red" 


