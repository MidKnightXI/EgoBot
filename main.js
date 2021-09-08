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

cli.on('message', onMessageHandler);
cli.on('connected', onConnectedHandler);


function onMessageHandler(target, context, msg, self) {
    if (self || !msg.startsWith('!'))
        return;
    const cmd = msg.trim();
    switch (cmd) {
        case '!dice':
            client.say(target, rollDice());
            console.log("onMessageHandler: !dice");
        default:
            console.log(`onMessageHandler: ${cmd} is an unknown command.`);
    }
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function onConnectedHandler(addr, port) {
    console.log(`Connected to ${addr}:${port}`);
}