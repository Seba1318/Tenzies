import {useState} from 'react'
import Die from './components/Die.jsx'

export default function App(){
  function generateRandomDice(){
    /*const newDice = [];

    for(let i = 0; i < 10; i++){
      const randomNumber = Math.floor(Math.random() * 6 + 1);

      newDice.push(randomNumber);
    }

    return newDice;*/

    return new Array(10)
      .fill(0)
        .map(() => Math.floor(Math.random() * 6 + 1));
  }

  const [dice, setDice] = useState(generateRandomDice());

  function rollDice(){
    setDice(generateRandomDice());
  }

  const diceElements = dice.map((value, index) => {
    return <Die key = {index} value={value}/>;
  })

  return(
    <main>
      <div className="dice-container">
        {diceElements}
      </div>

      <button className="roll-dice-btn" onClick={rollDice}>Roll</button>
    </main>
  );
}