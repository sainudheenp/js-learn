const min_hand = document.querySelector('.hours-hand')
const hours_hand = document.querySelector('.hours-hand')
const sec_hand = document.querySelector(".second-hand")


// setInterval(() => {
//     let time = new Date()
//     // console.log(time.getDate())


//     // console.log(time.getHours())
//     console.log(time.getSeconds()*360/100)


//     min_hand.style.transform = `rotate(${time.getSeconds()}deg)`
// // hours_hand.style.transform =""


// }, 1000);

function setData() {
    const time = new Date();
    const sec = time.getSeconds()
    const secDeg = ((sec / 60) * 360) + 90;
    sec_hand.style.transform = `rotate(${secDeg}deg)`;



    const mins = time.getMinutes();
    const minsDeg = ((mins / 60) * 360) + ((sec / 60) * 6) + 90
    min_hand.style.transform = `rotate(${minsDeg}deg)`;
    console.log(    min_hand.style.transform = `rotate(${minsDeg}deg)`   )

    const hours = time.getHours()
    const hoursDeg = ((hours/12)*360)+((mins/60)*30)+90;
    hours_hand.style.transform = `rotate(${hoursDeg}deg)`;

}

setInterval(() => {
    setData()
}, 1000);