import React, { FC } from "react";
import { burger } from "../../types/types";
import PopupOverlay from "../PopupOverlay/PopupOverLay";
import styles from './PopupOrder.module.css';

interface PopupOrderProps {
	hidePopupOrder: () => void,
}

const imagePath = "../../images/closeIcon.svg";

const PopupOrder: FC<PopupOrderProps> = ({ hidePopupOrder }) => {
	return (
		<PopupOverlay onClick={hidePopupOrder}>
			<div className={styles.PopupOrderInner}>
				<p className={"text text_type_digits-large " + styles.PopupOrderIdNumber}>034536</p>
				<p className="text text_type_main-medium">идентефикатор заказа</p>
				<div className={styles.PopupOrderAccepted}>

				</div>
				<p className={styles.PopupOrderOrderText}>Ваш заказ начали готовить</p>
				<p className={"text text_type_main-small text_color_inactive " + styles.PopupOrderAwaitReady}>Дождитесь готовности на орбитальной станции</p>
			</div>
		</PopupOverlay>
	);
}

export default PopupOrder;