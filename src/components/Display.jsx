const Display = ({ expression, display }) => {
  return (
    <>
      <div className="expression" data-testid="expression">
        {expression || "0"}
      </div>
      <div className="display" data-testid="display">
        {display}
      </div>
    </>
  );
};

export default Display;
