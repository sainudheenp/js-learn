let body = document.querySelector('body')
body.style = "background-color:grey;"

console.log(body)
console.log("hello")


let heading = document.getElementById("main_heading")
console.log(heading)
console.log(heading.innerText)
heading.style = "font-size:1.5rem;font-family:cursive;"


const litsItems = document.querySelectorAll(".list_item")
console.log(litsItems)
litsItems.forEach(li => {
  li.style.color = "white";
  li.style.fontFamily = "sans"
});



// crearte element

const h4 = document.createElement("h4")
h4.innerHTML = "Zainn";
body.append(h4)

// Mdoifying Attributes and classes

h4.setAttribute('class', 'zian')


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

function alertButton() {
  alert("LOVE GO!")
}

function changeBg(color) {
  body.style.backgroundColor = color;
}




buttontwo.addEventListener("click", alertButton)

let buttonthree = document.querySelector(".btn3")
buttonthree.addEventListener("click", function () { changeBg("red") })

let buttonone = document.querySelector(".btn1")
buttonone.addEventListener("mouseover", () => { changeBg("green") })



// hide and reveal
const hidden = document.querySelector('.hidden')
hidden.addEventListener("click", () => {
  console.log('hidden clicked');
  chech()
})
let reveal = document.querySelector('.reveal')
reveal.addEventListener("click", () => {
  console.log('reveal clicked');
  chech()
})

// console.log(reveal)
function chech() {
  if (hidden.classList.contains('none')) {
    hidden.classList.remove('none')
  }
  else {
    hidden.classList.add('none')
  }
}


// delegation


// document.querySelector('#football').addEventListener
//   (
//     'click', (e) => {
//       console.log("football")
//       const target = e.target;
//       console.log(target)
//       target.style.backgroundColor = 'green'
//     }
//   )

document.querySelectorAll('.dpli').forEach(li => {
  li.addEventListener(
    'click', (e) => {
      // console.log("li clicked")
      target = e.target;
      console.log(e.target.classList);
      console.log(`${target.innerHTML} is clicked `)
      console.log( target.style.backgroundColor  )
      target.style.backgroundColor = 'green'
    }
  )
}
)

const sports = document.querySelector("#sports")
let Newsport = document.createElement('li')
Newsport.innerHTML= 'rugby'
Newsport.setAttribute('id','rugby')
Newsport.setAttribute('class','dpli')

sports.appendChild(Newsport)
