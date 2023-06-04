'use client';

import { useEffect, useState } from 'react';
import { theme as defaultTheme, darkTheme } from '../../../stitches.config';

export enum ColorMode {
	LIGHT = 'light',
	DARK = 'dark',
}

export interface ColorModeProps {
	colorMode: ColorMode | null;
	changeColorMode: (newMode: ColorMode) => void;
}

/* 
  Any available themes. The value of each key 
  returns the className from stitches' createTheme()
*/
export const availableThemes = {
	light: defaultTheme.className, // stitches' default theme
	dark: darkTheme.className,
};

export const useColorMode = (): ColorModeProps => {
	const [colorMode, setColorMode] = useState<ColorMode | null>(null);

	// Set color mode in localStorage, as well as in the html tag
	const applyColorMode = (newMode: ColorMode) => {
		setColorMode((prevMode) => {
			if (prevMode) {
				document.documentElement.classList.remove(availableThemes[prevMode]);
			}
			document.documentElement.classList.add(availableThemes[newMode]);

			return newMode;
		});
	};

	useEffect(() => {
		// If no localStorage exists, use the user's OS setting
		const colorMode = getSavedColorModePreference() || getMediaTheme();

		if (colorMode) {
			document.documentElement.classList.add(availableThemes[colorMode]);

			setColorMode(colorMode);
		}

		// Listen out for if a user changes operating system mode,
		// but don't save the change in local storage.
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (e) => {
				applyColorMode(e.matches ? ColorMode.DARK : ColorMode.LIGHT);
			});

		return () => {
			window
				.matchMedia('(prefers-color-scheme: dark)')
				.removeEventListener('change', (e) => {
					applyColorMode(e.matches ? ColorMode.DARK : ColorMode.LIGHT);
				});
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const changeColorMode = (newMode: ColorMode) => {
		applyColorMode(newMode);
		saveColorMode(newMode);
	};

	return { colorMode, changeColorMode };
};

function saveColorMode(newMode: ColorMode) {
	try {
		window.localStorage.setItem('color-mode', newMode);
	} catch (e) {
		console.warn(e);
	}
}

function getSavedColorModePreference(): ColorMode | null {
	try {
		const savedMode = window.localStorage.getItem('color-mode');

		switch (savedMode) {
			case ColorMode.LIGHT:
				return ColorMode.LIGHT;
			case ColorMode.DARK:
				return ColorMode.DARK;
			default:
				return null;
		}
	} catch (e) {
		// When Chrome in incognito, localStorage cannot be accessed
		console.warn(e);
		return null;
	}
}

function getMediaTheme(): ColorMode {
	// If they haven't been explicitly set, let's check the media query
	const mql = matchMedia('(prefers-color-scheme: dark)');
	return mql.matches ? ColorMode.DARK : ColorMode.LIGHT;
}
