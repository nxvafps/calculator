const Button = ({ onClick, className, value, children }) => {
  return (
    <button className={className} onClick={() => onClick(value)}>
      {children}
    </button>
  );
};

export default Button;
