/**
 * My custom hooks library
 * @module CustomHooks
 */

import { useState } from 'react';

/**
 * Custom hook que devuelve un arreglo el valor almacenado y una función para agregar un nuevo valor basado en los parámetros key e initialValue.
 * @param {string} key - clave del localStorage
 * @param {string} initialValue - valor inicial del localStorage
 * @returns {[]} - Arreglo que contiene el valor almacenado y una función para agregar un nuevo valor
 */
export const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (err) {
			return initialValue;
		}
	});
	const setValue = value => {
		try {
			setStoredValue(value);
			localStorage.setItem(key, JSON.stringify(value));
		} catch (err) {
			console.error(err);
		}
	};
	return [storedValue, setValue];
};
