import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components';

export default {
    title: 'component/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
    buttonType: 'default'
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
    buttonType: 'border'
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    label: 'Button'
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button'
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    label: 'Button'
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button'
};

export const MouseCallbacks = Template.bind({});
MouseCallbacks.args = {
    size: 'large',
    label: 'Button'
};
