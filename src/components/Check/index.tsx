import './style.css';

interface ICheckProps {
  check: boolean;
  onCheckChange: (selected: boolean) => void;
}

const Check = ({ check, onCheckChange }: ICheckProps) => {

  const handleClick = () => {
    onCheckChange(!check);
  };

  return (
    <button
      className="check"
      onClick={handleClick}
    >
      {check ? '✓' : ''}
    </button>
  )
};

export default Check;
