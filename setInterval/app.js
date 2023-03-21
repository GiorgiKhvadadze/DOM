// setInterval - runs function repeatedly, at specific intervals

function showScore(name, score) {
    console.log(`hello ${name}, your score is ${score}`);
}

// setInterval(showScore, 2000)

const firstID = setInterval(showScore, 1000, 'bob', '43')
const secondID = setInterval(showScore, 2000, 'susan', '52')

clearInterval(firstID)