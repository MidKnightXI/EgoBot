function rollDice() {
    return String(Math.floor(Math.random() * 6) + 1);
}

function russianRoulette() {
    const bullet = Math.floor(Math.random() * 8);

    if ((Math.floor(Math.random() * 7) + 1) === bullet)
        return "*BOOM*, you lost your head Sadge";
    else
        return "*click* nothing ... pepeS";
}

function flipCoin() {
    return ((Math.floor(Math.random() * 10)) % 2)
}


export default {rollDice, russianRoulette, flipCoin};