/**
 * My custom hooks library
 * @module CustomHooks
 */

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Función que altera la URL con el parámetro path.
 * @param {string} path - nombre de la dirección
 */
export const useRedirect = path => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate(path);
	}, []);
};
