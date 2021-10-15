const Button = ({ children, handleClick, btn, json }) => (
  <button className={btn} onClick={handleClick} ref={json}>
    {children}
  </button>
);

export default Button;
