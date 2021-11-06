import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '../components/Header';

export default {
    title: 'component/Header',
    component: Header,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
    return <Header {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
    backgroundColor: '#f'
};

export const Disabled = Template.bind({});
Disabled.args = {
    backgroundColor: '#5e90b4'
};

export const Small = Template.bind({});
Small.args = {
    backgroundColor: '#160b0b'
};
