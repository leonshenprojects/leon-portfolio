import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from './Switch';
import { MOCK_SWITCH_WITH_LABEL } from './__stubs__/Switch';

export default {
	title: 'Components/Switch',
	component: Switch,
	args: {
		ariaLabel: 'Switch on something',
	},
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = { ...MOCK_SWITCH_WITH_LABEL };
