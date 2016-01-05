// http://www.codewars.com/kata/grasshopper-terminal-game-turn-function/javascript
// Create a function named doTurn/do_turn that calls the functions in the proper order

// es5/es6

// normal
function doTurn () {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}

// using generators
function* callTurnGen () {
  yield rollDice();
  yield move();
  yield combat();
  yield getCoins();
  yield buyHealth();
  yield printStatus();
}
const callTurn = callTurnGen();
const doTurn = () => {
  while (!callTurn.next().done);
}

// arrays
function doTurn() {
  var actions = [rollDice, move, combat, getCoins, buyHealth, printStatus];
  actions.forEach(f => f());
}

// a shorter one
const doTurn = () => [rollDice, move, combat, getCoins, buyHealth, printStatus].forEach(f => f());
