import {useState} from 'react'
import Die from './components/Die.jsx'

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
        .map((_, index) => {return {id: index, value: (Math.floor(Math.random() * 6 + 1)), isHeld: false}});
  }

  const [dice, setDice] = useState(generateRandomDice());

  function rollDice(){
    setDice((prevDice) => {
      return generateRandomDice();
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
    return <Die key = {index} id={die.id} value={die.value} isHeld={die.isHeld} holdDie={holdDie}/>;
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