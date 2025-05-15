import React, { useState } from "react";
import "./App.css";

const DiceRoller = () => {
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
  };

  const diceEmojis = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  return (
    <div className="dice-roller">
      <h1>Dice Roller</h1>
      <div className="dice-emoji">{diceEmojis[diceValue]}</div>
      <p className="dice-value">You rolled: {diceValue}</p>
      <button className="roll-button" onClick={rollDice}>
        Roll Dice
      </button>
    </div>
  );
}; 

 export default DiceRoller;