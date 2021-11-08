import React, { FC } from 'react';
import { Counter, Tab, CurrencyIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerIngredientItem.module.css';

interface IngredientItemInterface {
	image: string;
	name: string;
	price: number;
}

const IngredientItem: FC<IngredientItemInterface> = ({ image, name, price }) => {
	return (
		<div className={styles.ingredientItem}>
			<img src={image} alt={name} />
			<div className={styles.ingredientItemPriceContainer} >
				<p className={"text text_type_digits-default " + styles.ingredientItemPrice}>
					{price}
				</p>
				<CurrencyIcon type='primary' />
			</div>
			<p className={styles.ingredientItemName}>
				{name}
			</p>
		</div>
	);
}


export default IngredientItem;
