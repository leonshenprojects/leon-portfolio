import { Flex } from '../Base/Flex.styled';
import { Label, SwitchRoot, SwitchThumb } from './Switch.styled';
import { useState, useId, useEffect } from 'react';
import { SwitchProps as RadixSwitchProps } from '@radix-ui/react-switch';

export interface SwitchProps extends RadixSwitchProps {
	label?: {
		checked: string;
		unchecked: string;
	};
	ariaLabel: string;
}

export const Switch = ({
	label,
	checked,
	ariaLabel,
	onCheckedChange,
	...rest
}: SwitchProps) => {
	const [isChecked, setIsChecked] = useState(checked);

	const handleCheckedChange = (val: boolean) => {
		setIsChecked(val);
		onCheckedChange && onCheckedChange(val);
	};

	useEffect(() => {
		checked && setIsChecked(checked);
	}, [checked]);

	const id = useId();

	return (
		<form>
			<Flex alignItems="center">
				{label && (
					<Label htmlFor={id}>
						{isChecked ? label.checked : label.unchecked}
					</Label>
				)}

				<SwitchRoot
					id={id}
					checked={isChecked}
					onCheckedChange={handleCheckedChange}
					aria-label={ariaLabel}
					{...rest}
				>
					<SwitchThumb />
				</SwitchRoot>
			</Flex>
		</form>
	);
};
