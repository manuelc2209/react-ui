import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import { Card } from '../components/Card';

export default {
    title: 'component/Card',
    component: Card
} as ComponentMeta<typeof Card>;

const StyledWrapper = styled.div`
    width: 400px;
`;

const Template: ComponentStory<typeof Card> = (args) => (
    <StyledWrapper>
        <Card {...args} />
    </StyledWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
    title: 'Test',
    subtitle: 'Subtitle',
    image: 'https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324.3-ladc.gif'
};

export const Secondary = Template.bind({});
Secondary.args = {
    title: 'Test',
    image: 'https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324.3-ladc.gif'
};

export const ImageOnly = Template.bind({});
ImageOnly.args = {
    image: 'https://i.ytimg.com/vi/HVrmuR6xGc0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB5rSDtHMHh_J12HeAXt9RfoCFkSg'
};

export const TextOnly = Template.bind({});
TextOnly.args = {
    title: 'Test',
    subtitle: 'Subtitle'
};
