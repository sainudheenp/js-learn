let body = document.querySelector('body')
body.style = "background-color:grey;"

console.log(body)
console.log("hello")


let heading= document.getElementById("main_heading")
console.log(heading)
console.log(heading.innerText)
heading.style= "font-size:1.5rem;font-family:cursive;"


const litsItems = document.querySelectorAll(".list_item")
console.log(litsItems)
litsItems.forEach(li => {
    li.style.color= "white";
    li.style.fontFamily ="sans"
});



// crearte element

const h4 = document.createElement("h4")
h4.innerHTML = "Zainn" ;
body.append(h4)

// Mdoifying Attributes and classes

h4.setAttribute('class','zian')


console.log(heading.getAttribute('id'))

heading.classList.add("added")

// remove item
h4.remove()



// parent & child node Travelsal


let ul = document.querySelector('ul')
console.log(ul)
console.log(ul.parentElement)
console.log(ul.parentNode)

console.log(ul.childNodes)
console.log(ul.childElementCount)
console.log(ul.children)
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)

// sibling mode

console.log(ul.nextElementSibling)
console.log(ul.previousElementSibling)


// Dom manipulation

// Event listeneres


const buttontwo = document.querySelector('.btn2')

function alertButton(){
  alert("LOVE GO!")
}

function changeBg(){
body.style= "background-color:red;"
}




buttontwo.addEventListener("click",alertButton)

let buttonthree = document.querySelector(".btn3")
buttonthree.addEventListener("click",changeBg)

let buttonone = document.querySelector(".btn1")
buttonone.addEventListener("mouseover",changeBg)