const link = document.querySelector("a")
link.innerHTML = "Vonnue.com"
link.setAttribute("href","https://www.vonnue.com")

h1 = document.querySelector('h1')
h1.setAttribute("class" , "blue_p")
h1.classList.add("red_p")
h1.classList.remove("blue_p")

console.log(h1.classList) 

paras= document.querySelectorAll("p")
console.log(paras)

paras.forEach(p => {
    // console.log(p.innerHTML)
    // console.log(p.innerText)
    if (p.textContent.includes("error")){
        // console.log(p.innerHTML)
        p.setAttribute("Style" , "font-size:3rem; color:white; background-color:red;border:2px solid red; text-align:center;border-radius:40px")
    }else if (p.innerText.includes("success")){
        p.setAttribute("Style" , "font-size:3rem; color:white;background-color:green;border:2px solid green; text-align:center;border-radius:40px")
    }
    else{
        p.setAttribute("Style" , "font-size:3rem; color:white;background-color:blue;border:2px solid blue; text-align:center;border-radius:40px")

    }
    
});