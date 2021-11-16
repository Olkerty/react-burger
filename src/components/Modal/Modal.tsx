import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

import styles from './Modal.module.css';

const Modal = (props: any) => {

	return (
		<div className={styles.Modal}>
			<div className={styles.ModalOverlay} onClick={props.closeModal}></div>
			<div className={styles.ModalInner}>
				{props.children}
				<div className={styles.closeButton}>
					<CloseIcon onClick={props.closeModal} type={'primary'} />
				</div>
			</div>
		</div>
	);
}

export default Modal;