//countdown

const timeLim = 1000

const countdown = (timeLim) => {

    let intt = setInterval(() => {
        console.log("Time : ", timeLim);
        timeLim = timeLim - 100;
        if (timeLim == 0) {
            console.log('Done')
            clearInterval(intt)
        }
    }, 100);

}
countdown(timeLim)

