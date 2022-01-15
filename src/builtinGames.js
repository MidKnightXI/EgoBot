function rollDice(channel) {
  console.log('yes')
  cli.say(channel, 'You got a ' + String(Math.floor(Math.random() * 6) + 1));
  return;
}
function russianRoulette(channel) {
  const bullet = Math.floor(Math.random() * 8);

  if ((Math.floor(Math.random() * 7) + 1) === bullet)
    cli.say(channel, "*BOOM*, you lost your head Sadge")
  else
    cli.say(channel, "*click* nothing ... pepeS");
  return;
}

function flipCoin(channel) {
  (Math.floor(Math.random() * 10)) % 2 === 1 ? cli.say(channel, 'tail') : cli.say(channel, 'head')
  return;
}

export function checkGames(channel, msg) {
  let games = {
    '!roll': () => rollDice(channel),
    '!roulette': () => russianRoulette(channel),
    '!flip': () => flipCoin(channel)
  }
  return games[msg]() ? true : false
}