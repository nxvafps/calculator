import Button from "./Button";

const ButtonGrid = ({
  onNumberClick,
  onOperationClick,
  onEquals,
  onClear,
  onDecimal,
}) => {
  return (
    <div className="buttons">
      <Button className="clear span-two" onClick={onClear} value="AC">
        AC
      </Button>
      <Button className="operator" onClick={onOperationClick} value="÷">
        ÷
      </Button>
      <Button className="operator" onClick={onOperationClick} value="×">
        ×
      </Button>

      <Button className="number" onClick={onNumberClick} value={7}>
        7
      </Button>
      <Button className="number" onClick={onNumberClick} value={8}>
        8
      </Button>
      <Button className="number" onClick={onNumberClick} value={9}>
        9
      </Button>
      <Button className="operator" onClick={onOperationClick} value="-">
        -
      </Button>

      <Button className="number" onClick={onNumberClick} value={4}>
        4
      </Button>
      <Button className="number" onClick={onNumberClick} value={5}>
        5
      </Button>
      <Button className="number" onClick={onNumberClick} value={6}>
        6
      </Button>
      <Button className="operator" onClick={onOperationClick} value="+">
        +
      </Button>

      <Button className="number" onClick={onNumberClick} value={1}>
        1
      </Button>
      <Button className="number" onClick={onNumberClick} value={2}>
        2
      </Button>
      <Button className="number" onClick={onNumberClick} value={3}>
        3
      </Button>
      <Button className="equals" onClick={onEquals} value="=">
        =
      </Button>

      <Button className="number span-two" onClick={onNumberClick} value={0}>
        0
      </Button>
      <Button className="number" onClick={onDecimal} value=".">
        .
      </Button>
    </div>
  );
};

export default ButtonGrid;
