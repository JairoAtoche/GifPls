import React, { useContext } from 'react';
import { GIF, CLIP, FAVORITOS } from '@/router/path';
import { Routes, Route } from 'react-router-dom';
import Gifs from '@/pages/Gifs';
import Clips from '@/pages/Clips';
import Favoritos from '@/pages/Favoritos';
import Error404 from '@/pages/404/Error404';
import Header from '@/layouts/Header';

import '@/styles/theme.scss';
import { ThemeContext } from '@/context/ThemeContext';

const App = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<div className='App'>
			<Header />
			<main className={`gif theme-page--${theme}`}>
				<Routes>
					<Route path={GIF} element={<Gifs />} />
					<Route path={CLIP} element={<Clips />} />
					<Route path={FAVORITOS} element={<Favoritos />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
