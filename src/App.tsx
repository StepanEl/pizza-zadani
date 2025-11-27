import { useState } from 'react';
import ToppingsSelect from './components/ToppingsSelect';
import { PrefsContext } from './context/prefs-context';
import type { ITopping } from './models/Topping';
import './style.css';

const toppings: ITopping[] = [
  {
    name: 'Pepperoni',
    price: 1,
    vegan: false,
    selected: false,
  },
  {
    name: 'Mushroom',
    price: 0.35,
    vegan: true,
    selected: false,
  },
  {
    name: 'Extra cheese',
    price: 0.5,
    vegan: false,
    selected: false,
  },
  {
    name: 'Sausage',
    price: 0.8,
    vegan: false,
    selected: false,
  },
  {
    name: 'Onion',
    price: 0.25,
    vegan: true,
    selected: false,
  },
  {
    name: 'Black olives',
    price: 0.65,
    vegan: true,
    selected: false,
  },
  {
    name: 'Green pepper',
    price: 0.55,
    vegan: true,
    selected: false,
  },
  {
    name: 'Fresh garlic',
    price: 0.1,
    vegan: true,
    selected: false,
  },
  {
    name: 'Tomato',
    price: 0.5,
    vegan: true,
    selected: false,
  },
  {
    name: 'Fresh basil',
    price: 0.15,
    vegan: true,
    selected: false,
  },
  {
    name: 'Pineapple',
    price: 0.7,
    vegan: true,
    selected: false,
  },
  {
    name: 'Prosciutto',
    price: 1.2,
    vegan: false,
    selected: false,
  },
];

const App = () => {
  const [answer, setAnswer] = useState("");
  const [veganOnly, setVeganOnly] = useState(false)

  const handleSelectChange= (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setAnswer(value);
    setVeganOnly(value === "ano");
  }

  return (
    <>
      <select value={answer} onChange={handleSelectChange}>
        <option value="">Vyber</option>
        <option value="ano">Ano</option>
        <option value="ne">Ne</option>
      </select>

      <PrefsContext.Provider value={{ veganOnly}}>
        <div className="container">
          <header>
            <div className="pizza" />
            <h1>Build your own pizza</h1>
          </header>
          <main>
            <ToppingsSelect toppings={toppings} />
          </main>
        </div>
      </PrefsContext.Provider>
    </>
  );
};

export default App;