let keyCodes = [65, 83, 68, 70, 71, 72, 74, 75, 76];
const sounds =
    document.addEventListener("keydown", (e) => {
        // console.log(e.keyCode)
        if (keyCodes.includes(e.keyCode)) {
            console.log("yees")
            const items = document.querySelectorAll(`[data-key="${e.keyCode}"`)
            console.log(item)
            items[1].parentElement.classList.add('active')


        }
    })

console.log()
