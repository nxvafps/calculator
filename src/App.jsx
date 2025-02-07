import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);
  const [newNumberStarted, setNewNumberStarted] = useState(false);

  const handleNumberClick = (number) => {
    const newDisplay =
      display === "0" || newNumberStarted
        ? number.toString()
        : display + number;
    console.log("Setting display to:", newDisplay);
    setDisplay(newDisplay);

    if (newNumberStarted) {
      setExpression(expression + " " + number);
    } else {
      setExpression(firstNumber === null ? newDisplay : expression + number);
    }
    setNewNumberStarted(false);
  };

  const handleOperationClick = (op) => {
    setFirstNumber(parseFloat(display));
    setOperation(op);
    setNewNumberStarted(true);
    setExpression(expression + " " + op);
  };

  const handleEquals = () => {
    const secondNumber = parseFloat(display);
    if (firstNumber === null || operation === null) return;

    let result;
    switch (operation) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "×":
        result = firstNumber * secondNumber;
        break;
      case "÷":
        result = firstNumber / secondNumber;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setExpression(result.toString());
    setFirstNumber(null);
    setOperation(null);
    setNewNumberStarted(true);
  };

  const handleClear = () => {
    setDisplay("0");
    setExpression("");
    setFirstNumber(null);
    setOperation(null);
    setNewNumberStarted(false);
  };

  const handleDecimal = () => {
    if (!display.includes(".")) {
      const newDisplay = display + ".";
      setDisplay(newDisplay);
      setExpression(expression + ".");
    }
  };

  return (
    <div className="calculator">
      <div className="expression" data-testid="expression">
        {expression || "0"}
      </div>
      <div className="display" data-testid="display">
        {display}
      </div>
      <div className="buttons">
        <button className="clear span-two" onClick={handleClear}>
          AC
        </button>
        <button className="operator" onClick={() => handleOperationClick("÷")}>
          ÷
        </button>
        <button className="operator" onClick={() => handleOperationClick("×")}>
          ×
        </button>

        <button className="number" onClick={() => handleNumberClick(7)}>
          7
        </button>
        <button className="number" onClick={() => handleNumberClick(8)}>
          8
        </button>
        <button className="number" onClick={() => handleNumberClick(9)}>
          9
        </button>
        <button className="operator" onClick={() => handleOperationClick("-")}>
          -
        </button>

        <button className="number" onClick={() => handleNumberClick(4)}>
          4
        </button>
        <button className="number" onClick={() => handleNumberClick(5)}>
          5
        </button>
        <button className="number" onClick={() => handleNumberClick(6)}>
          6
        </button>
        <button className="operator" onClick={() => handleOperationClick("+")}>
          +
        </button>

        <button className="number" onClick={() => handleNumberClick(1)}>
          1
        </button>
        <button className="number" onClick={() => handleNumberClick(2)}>
          2
        </button>
        <button className="number" onClick={() => handleNumberClick(3)}>
          3
        </button>
        <button className="equals" onClick={handleEquals}>
          =
        </button>

        <button
          className="number span-two"
          onClick={() => handleNumberClick(0)}
        >
          0
        </button>
        <button className="number" onClick={handleDecimal}>
          .
        </button>
      </div>
    </div>
  );
}

export default App;
