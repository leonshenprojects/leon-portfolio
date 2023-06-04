'use client';

import { createContext } from 'react';
import { ColorModeProps, useColorMode } from './useColorMode';

export const ColorModeContext = createContext<ColorModeProps | null>(null);

type ColorModeProviderProps = {
	children: React.ReactNode;
};

const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
	const { colorMode, changeColorMode } = useColorMode();
	return (
		<ColorModeContext.Provider
			value={{
				colorMode,
				changeColorMode,
			}}
		>
			{children}
		</ColorModeContext.Provider>
	);
};

export default ColorModeProvider;
