// vars 

const  accordion = document.getElementsByClassName('content-container')
console.log(accordion)

// accordion.forEach( item => {
//     item.addEventListener("click", ()=>{
//         item.classList.toggle('active')
//     })
// });

for(i=0 ; i < accordion.length; i++){
    accordion[i].addEventListener('click' , function(){
        this.classList.toggle('active');
        console.log("hle",this)

    })
}