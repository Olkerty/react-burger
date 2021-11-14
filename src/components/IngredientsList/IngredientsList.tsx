import React, { FC } from 'react';
import { Counter, Tab, CurrencyIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './IngredientList.module.css';
import BurgerIngredientItem from '../BurgerIngredientItem/BurgerIngredientItem';
import { burgerData } from '../../data/data';
import { burger } from '../../types/types';

interface IngredientListInterface {
	ingredients: burger[];
	listName: string;
	id?: string;
	displayPopupIngredients: (arg0: burger) => void;
}


const IngredientList: FC<IngredientListInterface> = ({ ingredients, listName, id, displayPopupIngredients }) => {
	return (
		<div id={id}>
			<h3 className={'text text_type_main-medium ' + styles.IngredientListItem}>
				{listName}
			</h3>
			<div className={styles.itemContainer}>
				{
					ingredients.map((item) => {
						return (
							<BurgerIngredientItem
								name={item.name}
								image={item.image}
								price={item.price}
								onClick={() => displayPopupIngredients(item)}
							>
							</BurgerIngredientItem>
						);
					})
				}
			</div>


		</div>
	);
}

export default IngredientList;
