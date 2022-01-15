import { checkModeration } from './moderation.js';
import { checkGames } from './builtinGames.js'
import Filter from 'bad-words'

const filter = new Filter()

function checkInfos(channel, userstate, message, self) {
}

export default function onMessageHandler(channel, userstate, message, self) {
  if (self || message.startsWith('!', 0) === false || message.length < 2)
    return;
  if (filter.isProfane(message) && userstate.mod === false && !userstate.badges.broadcaster)
    cli.deletemessage(channel, userstate.id)
  if (userstate.mod === true || userstate.badges.broadcaster)
    checkModeration(channel, userstate, message, self)
  checkGames(channel, userstate, message, self)
  checkInfos(channel, userstate, message, self)
}