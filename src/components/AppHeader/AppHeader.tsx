import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';


function AppHeader() {
	const burgerStyles = [styles.AppHeader__itemtext, styles.AppHeader__itemtext_burger].join(' ');
	return (
		<header className={styles.AppHeader}>
			<div className={styles.AppHeader__item}>
				<BurgerIcon type={'primary'} />
				<p className={burgerStyles}>
					Конструктор
				</p>
			</div>
			<div className={styles.AppHeader__item}>
				<ListIcon type={'secondary'} />
				<p className={styles.AppHeader__itemtext}>
					Лента заказов
				</p>

			</div>
			<div className={styles.AppHeader__logo}>
				<Logo />
			</div>
			<div className={styles.AppHeader__item}>
				<ProfileIcon type={'secondary'} />
				<p className={styles.AppHeader__itemtext}>
					Личный кабинет
				</p>
			</div>
		</header>
	);
}

export default AppHeader;
