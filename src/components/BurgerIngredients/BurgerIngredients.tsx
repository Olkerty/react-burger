import React, { FC, useState } from 'react';
import { Counter, Tab, CurrencyIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerIngredients.module.css';
import BurgerIngredientItem from '../BurgerIngredientItem/BurgerIngredientItem';
import { burgerData } from '../../data/data';
import { burger } from '../../types/types';
import IngredientList from '../IngredientsList/IngredientsList';

interface BurgerIngredientsProps {
	ingredients: burger[],
	displayPopupIngredients: (arg0: burger) => void;
}


const BurgerIngredients: FC<BurgerIngredientsProps> = ({ ingredients, displayPopupIngredients }) => {
	const [current, setCurrent] = React.useState('one');
	const [isIngredientPopupOpened, setIsIngredientPopupOpened] = useState(true);
	const bunArray: burger[] = [];
	const mainArray: burger[] = [];
	const sauceArray: burger[] = [];
	ingredients.forEach((item) => {
		switch (item.type) {
			case 'bun':
				bunArray.push(item);
				break;
			case 'main':
				mainArray.push(item);
				break;
			case 'sauce':
				sauceArray.push(item);
				break;
		}
	})
	function onClickTabButton(id: string, current: string) {
		let element = document.getElementById(id);
		if (element !== null) {
			element.scrollIntoView(true);
		}

		console.log(element);
		setCurrent(current);
	}



	return (
		<div className={styles.BurgerIngredients}>
			<h2 className={"text text_type_main-large " + styles.BurgerIngredients__header}>
				Соберите бургер
			</h2>
			<div className={styles.BurgerTabPanel}>
				<Tab value="one"
					active={current === 'one'}
					onClick={() => {
						onClickTabButton('bun', 'one');
					}}>
					Булки
				</Tab>
				<Tab
					value="two"
					active={current === 'two'}
					onClick={() => {
						onClickTabButton('sauce', 'two');
					}}>
					Соусы
				</Tab>
				<Tab
					value="three"
					active={current === 'three'}
					onClick={() => {
						onClickTabButton('main', 'three');
					}}>
					Начинки
				</Tab>
			</div>
			<div className={styles.BurgerIngredientsListContainer}>
				<IngredientList id={'bun'} ingredients={bunArray} listName={'Булки'} displayPopupIngredients={displayPopupIngredients} />
				<IngredientList id={'sauce'} ingredients={sauceArray} listName={'Соусы'} displayPopupIngredients={displayPopupIngredients} />
				<IngredientList id={'main'} ingredients={mainArray} listName={'Начинка'} displayPopupIngredients={displayPopupIngredients} />
			</div>

		</div>
	);
}

export default BurgerIngredients;
