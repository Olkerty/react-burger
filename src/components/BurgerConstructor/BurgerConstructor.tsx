import React, { FC } from 'react';
import { DragIcon, ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import { burgerData } from '../../data/data.js';
import MyCurrencyIcon from '../MyCurrencyIcon/MyCurrencyIcon';
import { burger } from '../../types/types';

interface BurgerConstructorProps {
	ingredients: burger[],
	displayOrderIngredients: () => void;
}

const BurgerConstructor: FC<BurgerConstructorProps> = ({ ingredients, displayOrderIngredients }) => {
	const burgerData = ingredients;
	console.log(ingredients);
	return (
		burgerData.length == 0 ? null : true &&
			<div className={styles.BurgerConstructor}>
				<div className={styles.edgeConstructorElementContainer}>
					<ConstructorElement
						thumbnail={burgerData[0].image_mobile}
						type='top'
						isLocked={true}
						text={burgerData[0].name}
						price={burgerData[0].price}
					/>
				</div>
				<div className={styles.BurgerConstructorMainContainer}>
					{
						burgerData.map((item, index) => {
							if (index !== 0 && index !== burgerData.length - 1) {
								return (
									<div className={styles.ConstructorElementContainer}>
										<DragIcon type='primary' />
										<ConstructorElement
											thumbnail={item.image_mobile}
											text={item.name}
											price={item.price}
										/>
									</div>
								);
							}
						})
					}
				</div>
				<div className={styles.edgeConstructorElementContainer}>
					<ConstructorElement
						thumbnail={burgerData[burgerData.length - 1].image_mobile}
						type='bottom'
						isLocked={true}
						text={burgerData[burgerData.length - 1].name}
						price={burgerData[burgerData.length - 1].price}
					/>
				</div>

				<div className={styles.PriceContainer}>

					<p className="text text_type_digits-medium">{burgerData.reduce((prevValue, curValue, index) =>
						(index !== 0 || index !== burgerData.length - 1) ? prevValue + curValue.price
							: prevValue + 0
						, 0)}</p>
					<MyCurrencyIcon />
					<Button type='primary' size='medium' onClick={displayOrderIngredients}>
						Оформить заказ
					</Button>
				</div>
			</div>
	);
}


export default BurgerConstructor;
