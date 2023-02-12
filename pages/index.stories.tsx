import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Home from './index';
import { MOCK_HOME } from './__stubs__/Home';

export default {
	title: 'Pages/Home',
	component: Home,
	args: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = { pageProps: MOCK_HOME };
