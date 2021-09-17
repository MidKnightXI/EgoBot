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
cli.on('connecting', onConnecting)
cli.on('connected', onConnectedHandler);
cli.on('message', wordFilter);
cli.on('message', onMessageHandler);

const builtinGames = require("./builtinGames");


function wordFilter(target, context, msg, self) {
}

function onMessageHandler(target, context, msg, self) {
    if (self || !msg.startsWith('!'))
        return;
    msg = msg.trim();
    const cmd = msg.substr(1, msg.length);
    switch (cmd) {
        case 'dice':
            cli.say(target, builtinGames.rollDice());
            console.log("onMessageHandler: !dice");
            break;
        case 'roulette':
            cli.say(target, builtinGames.russianRoulette());
            console.log("onMessageHandler: !roulette");
            break;
        case 'flip':
            if (builtinGames.flipaCoin() === 1)
                cli.say(target, "it's tail!");
            else
                cli.say(target, "it's head!");
            console.log("onMessageHandler: !flip");
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
        return true;
    }
    return false;
}

function jsonChecker(cmd) {
    const fs = require('fs');
    let parsedJSON = JSON.parse(fs.readFileSync('commands.json'));
    return (JSON.stringify(parsedJSON[cmd]));
}

function onConnecting() {
    console.log(`BigEgo is trying to reach your chat ...`)
}

function onConnectedHandler(addr, port, target) {
    console.log(`Connected to ${addr}:${port}`);
}