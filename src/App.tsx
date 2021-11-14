import React, { useEffect, useState } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import './App.css';
import popupIngredientsStyles from './popupIngredientsStyles/popupIngredientsStyles.module.css';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import axios from 'axios';
import PopupIngredients from './components/PopupIngredients/PopupIngredients';
import { burger } from './types/types';
import PopupOrder from './components/PopupOrder/PopupOrder';

const ingridUrl = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [popupBurger, setPopupBurger] = useState<burger>(ingredients[0]);
  const [isPopupIngredients, setIsPopupIngredients] = useState(false);
  const [isPopupOrder, setIsPopupOrder] = useState(false);
  async function getIngredients() {
    const response = await axios.get(ingridUrl);
    console.log(response.data);
    return response.data.data;
  }
  useEffect(() => {
    let temp;
    const fetch = async () => {
      temp = await getIngredients();
      setIngredients(temp);
    }
    fetch()
  }, [])

  function displayPopupIngredients(burger: burger) {
    setIsPopupIngredients(true);
    setPopupBurger(burger);
  }

  function hidePopupIngredients() {
    setIsPopupIngredients(false);
  }

  function hidePopupOrder() {
    setIsPopupOrder(false);
  }

  function displayOrderIngredients() {
    setIsPopupOrder(true);
  }

  //<PopupIngredients />
  return (
    <div className="App">
      {
        isPopupIngredients &&
        <PopupIngredients burger={popupBurger} hidePopupIngredients={hidePopupIngredients} />
      }
      {
        isPopupOrder &&
        <PopupOrder hidePopupOrder={hidePopupOrder}>

        </PopupOrder>

      }
      <AppHeader />
      <section className='burger-construction-section'>
        <BurgerIngredients ingredients={ingredients} displayPopupIngredients={displayPopupIngredients} />
        <BurgerConstructor ingredients={ingredients} displayOrderIngredients={displayOrderIngredients} />
      </section>
    </div>
  );
}

export default App;
