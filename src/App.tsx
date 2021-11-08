import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import './App.css';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <section className='burger-construction-section'>
        <BurgerIngredients />
        <BurgerConstructor />
      </section>
    </div>
  );
}

export default App;
