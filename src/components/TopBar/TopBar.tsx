import { ColorModeContext } from '../../context/colorMode/colorModeContext';
import { ColorMode } from '../../context/colorMode/useColorMode';
import { Flex } from '../base/Flex.styled';
import { Switch } from '../Switch/Switch';
import { Container } from './TopBar.styled';

export const TopBar = () => {
	return (
		<Container alignItems="end" alignContent="center" justifyContent="end">
			<ColorModeContext.Consumer>
				{(context) => {
					const toggleTheme = (checked: boolean) => {
						if (!context) return;

						if (checked) {
							context.changeColorMode(ColorMode.DARK);
						} else {
							context.changeColorMode(ColorMode.LIGHT);
						}
					};

					return (
						<>
							{context?.colorMode && (
								<Switch
									label={{ checked: 'Dark mode', unchecked: 'Light mode' }}
									ariaLabel="Switch on dark mode"
									checked={context?.colorMode === ColorMode.DARK}
									onCheckedChange={toggleTheme}
								/>
							)}
						</>
					);
				}}
			</ColorModeContext.Consumer>
		</Container>
	);
};
