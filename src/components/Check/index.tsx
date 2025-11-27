import './style.css';

interface ICheckProps {
  check: boolean;
  onCheckChange: (selected: boolean) => void;
  disabled: boolean;
}

const Check = ({ check, disabled, onCheckChange }: ICheckProps) => {

  const handleClick = () => {
    onCheckChange(!check);
  };

  return (
    <button
      className= {disabled ? "check check--disabled" : "check"}
      onClick={handleClick}
      disabled={disabled}
    >
      {check ? '✓' : ''}
    </button>
  )
};

export default Check;
