class Card{
    constructor(suit, rank, value) {
   this.suit = suit
   this.rank = rank
   this.value = value
    }
    getValue() {
        return this.value;
    }
  
  }
  
  
  class Player{
    constructor(name) {
      this.playerName = name
      this.playerHands= []
    }
    //methods for dealing out cards
    deal(hand){
      this.playerHands = hand
    }
    getName(){
      return this.playerName
    }
    getPlayerHands(){
        return this.playerHands
    }
  }
  
  
  class Game{
    constructor(){
      this.cards = []
      this.players= []
      this.score = [0,0]
    }
  
    createDeck() {
      let suits = ['spades', 'hearts', 'diamonds','clubs']
      let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king',]
      let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
      for (let i= 0; i < suits.length; i++){
        for (let k= 0; k < ranks.length; k++) {
          this.cards.push(new Card(suits[i], ranks [k], values[k]))
        }
      }
      
    }
      //method to shuffle cards  
    shuffleCards() { 
      for (let i = this.cards.length - 1; i > 0; i--){
        let j = Math.floor(Math.random()* (i +1))
        let k = this.cards[i]
        this.cards[i] = this.cards[j]
        this.cards[j] = k
      }
    }
  //method for setting up the game
    startDeal(Josh, Allan) {
        
        this.players.push(new Player(Josh));
        this.players.push(new Player(Allan)); 
    
        this.players[0].deal(this.cards.slice(0, 26));
        this.players[1].deal(this.cards.slice(26, 52));
  
      } //method for starting the game
      gameStart() {
  
        console.log('Welcome to war... 2 players come in but only 1 can come out on top.')
        for (let turn = 0; turn < 26; turn++) {

          const player1value = this.players[0].getPlayerHands()[turn].getValue()
          const player2value = this.players[1].getPlayerHands()[turn].getValue()
          if (player1value > player2value) { 
            
            this.score[0] = this.score[0] + 1;
          } else if (player2value > player1value) {
            this.score[1] = this.score[1] + 1;
          }
        }
        
        
          
        console.log(this.score)
        if (this.score[0] === this.score[1]) {
          console.log("It's a tie!")
        } else {
          let winnerInd;
          if (this.score[0] > this.score[1]) {
            winnerInd = 0;
          } else {
            winnerInd = 1;
          } 
          const winnerName = this.players[winnerInd].getName();
          debugger;
          console.log(`${winnerName} won!`);
          
        }
    }
  
  }
  
  
  // Implementing the game
  let game = new Game();
  game.createDeck();
  game.shuffleCards();
  game.startDeal("Josh", "Allan");
  game.gameStart();

  module.exports = Game