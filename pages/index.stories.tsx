import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Home from './index';

export default {
	title: 'Pages/Home',
	component: Home,
	args: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home />;

export const Default = Template.bind({});
Default.args = {};
