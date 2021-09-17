function rollDice() {
    return String(Math.floor(Math.random() * 6) + 1);
}

function russianRoulette() {
    let bullet = Math.floor(Math.random() * 8);

    if ((Math.floor(Math.random() * 7) + 1) === bullet)
        return "*BOOM*, you lost your head Sadge";
    else
        return "*click* nothing ... pepeS";
}

function flipaCoin() {
    return ((Math.floor(Math.random() * 10)) % 2)
}


module.exports = {rollDice, russianRoulette, flipaCoin};