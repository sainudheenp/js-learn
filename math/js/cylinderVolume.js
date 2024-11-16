function cylinderVol(radius, height) {
    const pi = 3.14159;
    let Volume = pi * (radius * radius) * height;
    return console.log("Volume :", Volume)
}


cylinderVol(5, 10)