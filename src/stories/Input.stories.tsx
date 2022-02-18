import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../components';

export default {
    title: 'component/Input',
    component: Input,
    argTypes: {}
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
    return <Input {...args} />;
};

export const TextInput = Template.bind({});
TextInput.args = {
    type: 'text',
    label: 'Text',
    placeholder: 'Text:'
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
    type: 'password',
    label: 'Password',
    placeholder: 'Password:'
};

export const Disabled = Template.bind({});
Disabled.args = {
    type: 'text',
    label: 'Text',
    placeholder: 'Text:',
    disabled: true
};

export const Range = Template.bind({});
Range.args = {
    type: 'range',
    label: 'Range',
    placeholder: 'Range:',
    disabled: false
};
