import React, { useState, useEffect, useContext } from 'react';
import logo from '@/public/logo.svg';
import Button from '@/components/Button/Button';
import './header.scss';
import MenuIcon from './components/MenuIcon';
import MenuSide from './components/MenuSide';
import { NavLink, useHref } from 'react-router-dom';
import { GIF, CLIP } from '@/router/path';
import { ThemeContext } from '@/context/ThemeContext';
import '@/styles/theme.scss';

const Header = () => {
	const [close, setClose] = useState(false);
	const handleVisible = () => {
		close ? setClose(false) : setClose(true);
	};
	// Cierra el el side menu cuando cambie la url
	const ref = useHref();
	useEffect(() => {
		setClose(false);
	}, [ref]);

	const { theme } = useContext(ThemeContext);
	const btn = ref === CLIP ? 'Clip' : 'Gif';

	return (
		<header className='header'>
			<nav className={`header__nav nav theme--nav-${theme}`}>
				<NavLink to={GIF} className='container-logo'>
					<img
						src={logo}
						alt='logo'
						className={`container-logo__img theme-svg--${theme}`}
					/>
				</NavLink>
				<div className='header__content'>
					<Button to={CLIP} name={`Random ${btn}`} />
					<MenuIcon
						handleVisible={handleVisible}
						visible={`${close ? 'icon-close' : ''}`}
					/>
				</div>
				<MenuSide visible={`${close ? '' : 'cerrar'}`} />
			</nav>
		</header>
	);
};

export default Header;
