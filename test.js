var assert = require('chai').assert

const Game = require('./week6_new')
let game = new Game()
game.createDeck()
assert.typeOf(game.cards,'array')