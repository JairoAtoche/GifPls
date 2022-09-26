import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@/styles/normalize.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { SearchProvider } from '@/context/SearchContext';
ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ThemeProvider>
			<SearchProvider>
				<App />
			</SearchProvider>
		</ThemeProvider>
	</BrowserRouter>
);
