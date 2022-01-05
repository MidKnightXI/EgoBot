import { client } from 'tmi.js';
import { flipCoin, rollDice, russianRoulette } from './src/builtinGames'
import { onMessageHandler } from './src/messageHandler'

const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.BOT_OAUTH_TOKEN
  },
  channels: [
    process.env.CHANNEL_NAME
  ]
};

const cli = new client(opts);

cli.connect();
cli.on('connecting', onConnecting)
cli.on('connected', onConnectedHandler);
cli.on('message', onMessageHandler)

function onConnecting() {
  console.log(`BigEgo is trying to reach your chat ...`)
}

function onConnectedHandler(addr, port, target) {
  console.log(`Connected to ${addr}:${port}`);
}