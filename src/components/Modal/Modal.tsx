import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from './Modal.module.css';

let modalContainer: any = document.getElementById('modals');

const Modal = (props: any) => {
	console.log(modalContainer);
	return createPortal((
		<div className={styles.Modal}>
			<ModalOverlay closeModal={props.closeModal}></ModalOverlay>
			<div className={styles.ModalInner}>
				{props.children}
				<div className={styles.closeButton}>
					<CloseIcon onClick={props.closeModal} type={'primary'} />
				</div>
			</div>
		</div>
	), modalContainer
	);
}

export default Modal;