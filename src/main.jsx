import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@/styles/normalize.scss';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { SearcherProvider } from '@/context/SearcherContext';
ReactDOM.createRoot(document.getElementById('root')).render(
	<HashRouter>
		<ThemeProvider>
			<SearcherProvider>
				<App />
			</SearcherProvider>
		</ThemeProvider>
	</HashRouter>
);
