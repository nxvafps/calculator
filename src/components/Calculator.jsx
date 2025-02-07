import { useState } from "react";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";

const Calculator = () => {
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
      <Display expression={expression} display={display} />
      <ButtonGrid
        onNumberClick={handleNumberClick}
        onOperationClick={handleOperationClick}
        onEquals={handleEquals}
        onClear={handleClear}
        onDecimal={handleDecimal}
      />
    </div>
  );
};

export default Calculator;
