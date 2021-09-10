const tmi = require('tmi.js');

const opts = {
    identity: {
      username: process.env.BOT_USERNAME,
      password: process.env.OAUTH_TOKEN
    },
    channels: [
        process.env.CHANNEL_NAME
    ]
  };

const cli = new tmi.client(opts);

cli.connect();
console.log("I'm getting developped by MidKnight, check his GitHub \uD83D\uDE4F\n\nHere -> https://github.com/MidKnightXI")
cli.on('connecting', onConnecting)
cli.on('connected', onConnectedHandler);
cli.on('message', onMessageHandler);


function onMessageHandler(target, context, msg, self) {
    if (self || !msg.startsWith('!'))
        return;
    const cmd = msg.trim();
    switch (cmd) {
        case '!dice':
            client.say(target, rollDice());
            console.log("onMessageHandler: !dice");
        case '!roulette':
            client.say(target, russianRoulette());
        default:
            if (!customCommandHandler(target, cmd))
                console.log(`onMessageHandler: ${cmd} is an unknown command.`);
    }
}

function customCommandHandler(target, cmd) {
    
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function russianRoulette() {
    var bullet = Math.floor(Math.random() * 8);

    if (Math.floor(Math.random() * 7) + 1 === bullet)
        return "*BOOM*, you lost your head Sadge";
    else
        return "*click*, nothing ... pepeS";
}

function onConnecting() {
    console.log(`BigEgo is trying to reach your chat ...`)
}

function onConnectedHandler(addr, port) {
    console.log(`Connected to ${addr}:${port}`);
}