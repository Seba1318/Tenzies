import {useState} from 'react'
import Die from './components/Die.jsx'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

export default function App(){
  const [dice, setDice] = useState(() => generateRandomDice());
  const gameWon = 
  dice.every(die => die.isHeld) && 
  dice.every(die => die.value === dice[0].value);

  function generateRandomDice(){
    return new Array(10)
      .fill(0)
        .map(() => {return {id: nanoid(), value: (Math.floor(Math.random() * 6 + 1)), isHeld: false}});
  }

  function rollDice(){
    setDice(prevDice => {
      return prevDice.map((die) => {
        return die.isHeld ? die : {...die, value: Math.floor(Math.random() * 6 + 1)};
      })
    });
  }

  function holdDie(id){
    setDice((prevDice) => {
      return prevDice.map((die) => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die;
      });
    });
  }

  function resetGame(){
    setDice(() => generateRandomDice());
  }

  const diceElements = dice.map((die, index) => {
    return <Die key = {die.id} id={die.id} value={die.value} isHeld={die.isHeld} holdDie={holdDie}/>;
  })

  return(
    <main>
      {gameWon && <Confetti />}

      <h1 className="title">Tenzies</h1>

      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

      <div className="dice-container">
        {diceElements}
      </div>

      <button className="roll-dice-btn" onClick={gameWon ? resetGame : rollDice}>{gameWon ? "New Game" : "Roll"}</button>
    </main>
  );
}