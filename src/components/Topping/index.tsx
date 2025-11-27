import Check from '../Check';
import type { ITopping } from '../../models/Topping';
import './style.css';
import { usePrefs } from '../../context/prefs-context';

interface IToppingProps {
  topping: ITopping;
  onCheckChange: (selected: boolean) => void;
}

const Topping = ({ topping, onCheckChange }: IToppingProps) => {
  const { veganOnly } = usePrefs();


  return (
    <div className="topping">
      <Check onCheckChange={onCheckChange}
        disabled={veganOnly && !topping.vegan}
        check={topping.selected} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
