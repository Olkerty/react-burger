import React, { useEffect, useState } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import styles from './App.module.css';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import axios from 'axios';
import PopupIngredients from '../PopupIngredients/PopupIngredients';
import { burger } from '../../types/types';
import PopupOrder from '../PopupOrder/PopupOrder';
import Modal from '../Modal/Modal';

const ingridUrl = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalInner, setModalInner] = useState();
  async function getIngredients() {
    const response = await axios.get(ingridUrl);
    //console.log(response.data);
    return response.data.data;
  }
  useEffect(() => {
    let temp;
    const fetch = async () => {
      temp = await getIngredients();
      setIngredients(temp);
    }
    fetch();
    function closeModalByEsc(event: any) {
      if (event.key === 'Escape') {
        closeModal()
      }
    }
    document.addEventListener('keydown', closeModalByEsc)

    return function clean() {
      document.removeEventListener('keydown', closeModalByEsc)
    };
  }, [])

  function closeModal() {
    setIsModalOpened(false);
  }

  function openModal(children: any) {
    fillModal(children);
    setIsModalOpened(true);
  }

  function fillModal(children: any) {
    setModalInner(children);
  }

  //<PopupIngredients />
  return (
    <div className={styles.App}>
      {
        isModalOpened &&
        <Modal closeModal={closeModal}> {modalInner} </Modal>
      }
      <AppHeader />
      <section className={styles.burgerConstructionSection}>
        <BurgerIngredients ingredients={ingredients} openModal={openModal} />
        <BurgerConstructor ingredients={ingredients} openModal={openModal} />
      </section>
    </div>
  );
}

export default App;
