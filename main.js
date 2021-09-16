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
console.log("I'm getting developped by MidKnight, check his GitHub \uD83D\uDE4F\n\nHere -> https://github.com/MidKnightXI\n")
cli.on('connecting', onConnecting)
cli.on('connected', onConnectedHandler);
cli.on('message', onMessageHandler);

const builtinGames = require("./builtinGames")


function onMessageHandler(target, context, msg, self) {
    if (self || !msg.startsWith('!'))
        return;
    msg = msg.trim();
    const cmd = msg.substr(1, msg.length);
    console.log(cmd)
    switch (cmd) {
        case 'dice':
            cli.say(target, builtinGames.rollDice());
            console.log("onMessageHandler: !dice");
            break;
        case 'roulette':
            cli.say(target, builtinGames.russianRoulette());
            console.log("onMessageHandler: !roulette")
            break;
        default:
            if (!customCommandHandler(target, cmd))
                console.log(`onMessageHandler: '${cmd}' is an unknown command.`);
                break;
    }
}

function customCommandHandler(target, cmd) {
    const checkerOutput = jsonChecker(cmd);

    if (checkerOutput != undefined) {
        cli.say(target, checkerOutput);
    }
}

function jsonChecker(cmd) {
    const fs = require('fs');
    let rawdata = fs.readFileSync('commands.json');
    let parsedJSON = JSON.parse(rawdata);
    return (parsedJSON[cmd]);
}

function onConnecting() {
    console.log(`BigEgo is trying to reach your chat ...`)
}

function onConnectedHandler(addr, port, target) {
    console.log(`Connected to ${addr}:${port}`);
}