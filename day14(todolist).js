//1 Select all elements

const form = document.querySelector("#new-item-form")
const list = document.querySelector("#list")
const input = document.querySelector("#item-input")

//2 when i submit the form add a new element 

form.addEventListener("submit",e=>{
    e.preventDefault()
    //console.log(input.value) to view the input item just to see
    //1. creat a new item
    const item = document.createElement("div")
    item.innerText = input.value
    item.classList.add("list-item")
    //console.log(item)

    //2. add the new item into the list 
    list.appendChild(item)
    //3. clear input
    input.value=""
    //4. setup event listener to delete when clicked
    item.addEventListener("click",a=>{
        item.remove()
        
    })

})