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