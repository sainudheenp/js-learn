function hexColor() {
    // generate hex colors
    const randomColor = Math.floor(Math.random() * 16777216)
    console.log(randomColor)

    const hexColor = `#${randomColor.toString(16).padStart(6, "0")}`
    console.log(hexColor)

}
hexColor()

let reverse=(str) => { console.log(str.split("").reverse().join("")) };

reverse("Sainudheen")

