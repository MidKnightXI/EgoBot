import { flipCoin, rollDice, russianRoulette } from './builtinGames.js'
import Filter from 'bad-words'

const filter = new Filter()

export default function onMessageHandler(channel, userstate, message, self) {
  if (self)
    return;
  if (filter.isProfane(message)) { //delete messages that contains profanity

  }
}