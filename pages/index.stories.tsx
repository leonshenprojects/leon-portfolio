import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Home from './index';
import { MOCK_HOME } from './__stubs__/Home';
import { Box } from '../src/components/base/Box.styled';

export default {
	title: 'Pages/Home',
	component: Home,
	args: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => (
	<Box>
		<Home {...args} />
	</Box>
);

export const Default = Template.bind({});
Default.args = { pageProps: MOCK_HOME };
