import { client } from 'tmi.js';
import onMessageHandler from './src/messageHandler.js'
import { onBanHandler } from './src/moderation.js';

const opts = {
  options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.BOT_OAUTH_TOKEN
  },
  channels: process.env.CHANNEL_NAME.split(', ')
}

global.cli = new client(opts);

cli.connect();
cli.on('connecting', onConnecting)
cli.on('connected', onConnectedHandler);
cli.on('disconnected', onDisconnectedHandler)
cli.on('message', onMessageHandler)
cli.on('ban', onBanHandler)

function onConnecting() {
  console.log(`BigEgo is trying to reach your chat ...`)
}

function onConnectedHandler(addr, port, target) {
  console.log(`Connected to ${addr}:${port}`);
}

function onDisconnectedHandler(reason) {
  console.log(`Disconnected: ${reason}`)
}