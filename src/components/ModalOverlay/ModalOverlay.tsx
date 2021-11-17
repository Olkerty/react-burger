import React, { FC } from "react";
import styles from './ModalOverlay.module.css';

interface ModalOverlayProps {
	closeModal: () => void;
}

const ModalOverlay: FC<ModalOverlayProps> = ({ closeModal }) => {

	return (
		<div className={styles.ModalOverlay} onClick={closeModal}>
		</div>
	)
}

export default ModalOverlay;