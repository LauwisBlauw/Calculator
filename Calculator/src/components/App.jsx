import React, { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [result, setResult] = useState(0);
  const [operand1, setOperand1] = useState(null);
  const [operand2, setOperand2] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    setDisplay((prevDisplay) => {
      const updatedDisplay =
        prevDisplay === "0" ? String(number) : prevDisplay + number;
      if (operator === null) {
        setOperand1(parseFloat(updatedDisplay));
      } else {
        setOperand2(parseFloat(updatedDisplay));
      }
      return updatedDisplay;
    });
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setDisplay("0");
  };

  const handleEqual = () => {
    let newResult;
    switch (operator) {
      case "+":
        newResult = (operand1 || 0) + (operand2 || 0);
        break;
      case "-":
        newResult = (operand1 || 0) - (operand2 || 0);
        break;
      case "*":
        newResult = (operand1 || 0) * (operand2 || 0);
        break;
      case "/":
        newResult =
          operand2 === 0
            ? "Cannot divide by zero"
            : (operand1 || 0) / (operand2 || 0);
        break;
      default:
        newResult = 0;
    }
    setResult(newResult);
    setDisplay(String(newResult));
    setOperand1(newResult);
    setOperand2(null);
    setOperator(null);
  };

  const handleClear = () => {
    setDisplay("0");
    setResult(0);
    setOperand1(null);
    setOperand2(null);
    setOperator(null);
  };

  return (
    <div>
      <div>{display}</div>
      <div>
        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={() => handleOperatorClick("*")}>*</button>
      </div>
      <div>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleNumberClick(0)}>0</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleOperatorClick("/")}>/</button>
      </div>
    </div>
  );
}

export default Calculator;
