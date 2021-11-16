import React, { FC, useState } from "react";
import { burger } from "../../types/types";
import styles from './PopupIngredients.module.css';

interface PopupIngredientsProps {
	burger: burger,
}

const PopupIngredients: FC<PopupIngredientsProps> = ({ burger }) => {
	//console.log(burger.image_large);
	return (

		<div className={styles.ingredientsPopupInner}>
			<div className={styles.ingredientsPopupInnerHeaderContainer}>
				<h3 className="text text_type_main-large">Детали ингридиента</h3>
			</div>
			<img src={burger.image_large} alt="Изображение ингридиента" className={styles.ingredientsPopupInnerImage} />
			<h4 className="text text_type_main-medium">{burger.name}</h4>
			<ul className={styles.ingredientsPopupInnerParametersList}>
				<li className={styles.ingredientsPopupInnerParametersListItem}>
					<p className="text text_type_main-default text_color_inactive">Калории, ккал</p>
					<p className="text text_type_digits-default text_color_inactive">{burger.calories}</p>
				</li>
				<li className={styles.ingredientsPopupInnerParametersListItem}>
					<p className="text text_type_main-default text_color_inactive">Белки, г</p>
					<p className="text text_type_digits-default text_color_inactive">{burger.proteins}</p>
				</li>
				<li className={styles.ingredientsPopupInnerParametersListItem}>
					<p className="text text_type_main-default text_color_inactive">Жиры, г</p>
					<p className="text text_type_digits-default text_color_inactive">{burger.fat}</p>
				</li>
				<li className={styles.ingredientsPopupInnerParametersListItem}>
					<p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
					<p className="text text_type_digits-default text_color_inactive">{burger.carbohydrates}</p>
				</li>
			</ul>
		</div>
	);

}

export default PopupIngredients;