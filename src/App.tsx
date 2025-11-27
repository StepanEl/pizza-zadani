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
  const [veganOnly, setVeganOnly] = useState(false)

  return (
    <>


      <PrefsContext.Provider value={{ veganOnly }}>
        <div className="container">
          <header>
            <div className="pizza" />
            <h1>Build your own pizza</h1>
          </header>
          <div className='right'>
            <button
              className={veganOnly ? "active" : ""}
              onClick={() => setVeganOnly(!veganOnly)}
            >
              Vegan only
            </button>
          </div>

          <main>
            <ToppingsSelect toppings={toppings} />
          </main>
        </div>
      </PrefsContext.Provider>
    </>
  );
};

export default App;