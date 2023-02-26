import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './Avatar';
import {
	MOCK_AVATAR,
	MOCK_AVATAR_WITH_INVALID_NAME,
	MOCK_AVATAR_WITH_INVALID_URL,
} from './__stubs__/Avatar';
import { Box } from '../base/Box.styled';
import { Grid } from '../base/Grid.styled';

export default {
	title: 'Components/Avatar',
	component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
	<Grid css={{ placeContent: 'center' }}>
		<Box css={{ maxWidth: '10rem' }}>
			<Avatar {...args} />
		</Box>
	</Grid>
);

export const Default = Template.bind({});
Default.args = { ...MOCK_AVATAR };

export const WithInvalidUrl = Template.bind({});
WithInvalidUrl.args = { ...MOCK_AVATAR_WITH_INVALID_URL };

export const WithInvalidName = Template.bind({});
WithInvalidName.args = { ...MOCK_AVATAR_WITH_INVALID_NAME };
