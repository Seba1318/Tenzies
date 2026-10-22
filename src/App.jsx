import {useState} from 'react'
import Die from './components/Die.jsx'
import {nanoid} from 'nanoid'

export default function App(){
  function generateRandomDice(init){
    /*const newDice = [];

    for(let i = 0; i < 10; i++){
      const randomNumber = Math.floor(Math.random() * 6 + 1);

      newDice.push(randomNumber);
    }

    return newDice;*/

    return new Array(10)
      .fill(0)
        .map(() => {return {id: nanoid(), value: (Math.floor(Math.random() * 6 + 1)), isHeld: false}});
  }

  const [dice, setDice] = useState(generateRandomDice());

  function rollDice(){
    setDice(prevDice => {
      return prevDice.map((die) => {
        return die.isHeld ? die : {...die, value: Math.floor(Math.random() * 6 + 1)};
      })
    });
  }

  function holdDie(id){
    return(setDice((prevDice) =>{
      return prevDice.map((die) => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die;
      });
    }));
  }

  const diceElements = dice.map((die, index) => {
    return <Die key = {die.id} id={die.id} value={die.value} isHeld={die.isHeld} holdDie={holdDie}/>;
  })

  return(
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

      <div className="dice-container">
        {diceElements}
      </div>

      <button className="roll-dice-btn" onClick={rollDice}>Roll</button>
    </main>
  );
}