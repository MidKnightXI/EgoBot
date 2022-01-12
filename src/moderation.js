export function onBanHandler(channel, username, reason, userstate) {
  console.log(`User ${username} got banned on ${channel}.`)
  cli.say(channel, `${username} have been banned of the channel *BONK*`)
}