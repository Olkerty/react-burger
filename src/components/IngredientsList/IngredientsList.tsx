import React, { FC } from 'react';
import { Counter, Tab, CurrencyIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './IngredientList.module.css';
import BurgerIngredientItem from '../BurgerIngredientItem/BurgerIngredientItem';
import { burgerData } from '../../data/data';
import { burger } from '../../types/types';
import PopupIngredients from '../PopupIngredients/PopupIngredients';

interface IngredientListInterface {
	ingredients: burger[];
	listName: string;
	id?: string;
	openModal: (arg0: any) => void;
}


const IngredientList: FC<IngredientListInterface> = ({ ingredients, listName, id, openModal }) => {
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
								key={item._id}
								name={item.name}
								image={item.image}
								price={item.price}
								onClick={() => {
									openModal(<PopupIngredients burger={item} />)
								}}
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
