import Check from '../Check';
import type { ITopping } from '../../models/Topping';
import './style.css';

interface IToppingProps {
  topping: ITopping;
  onCheckChange: (selected: boolean) => void;
}

const Topping = ({ topping, onCheckChange }: IToppingProps) => {



  return (
    <div className="topping">
      <Check onCheckChange={onCheckChange} check={topping.selected} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
