import React, { FC } from "react";
import styles from './PopupOverlay.module.css';

interface PopupOverlayProps {
	onClick: () => void;
}

const PopupOverlay: FC<PopupOverlayProps> = (props) => {


	return (
		<div className={styles.PopupOverlay}>
			<button onClick={props.onClick} className={styles.ingredientsPopupInnerCloseButton}></button>
			{props.children}
		</div>
	);
}

export default PopupOverlay;