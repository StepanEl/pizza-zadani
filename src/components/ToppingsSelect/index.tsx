import { useState } from "react";
import type { ITopping } from "../../models/Topping";
import Topping from "../Topping";
import './style.css';


interface IToppingsSelectProps {
  toppings: ITopping[]
}

const ToppingsSelect = ({ toppings }: IToppingsSelectProps) => {
  const [items, setItems] = useState<ITopping[]>(toppings)

  const handleCheckTopping = (index: number, selected: boolean) => {
    const newToppings = [...items];
    newToppings[index].selected = selected;
    setItems(newToppings);
  }


  const selectedToppings = items.filter(t => t.selected);
  const selectedCount = selectedToppings.length;
  const totalPrice = selectedToppings.reduce((sum, t) => sum + t.price, 0);

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {selectedCount}, total price: {totalPrice} Euro</p>

      <div className="toppings">
        {items.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            onCheckChange={(selected) => {
              handleCheckTopping(index, selected)
            }} />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
