function BallPick(black, white) {
    let totalBalls = black + white;
    console.log("Probability of picking White : ", white / totalBalls)
    console.log("Probability of picking Black : ",black/totalBalls)
}


BallPick(4, 4)
BallPick(2,8)