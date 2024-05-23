import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from '../components';

export default {
    title: 'component/Textarea',
    component: Textarea
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Please write some text here',
    value: '',
    onChange: (value) => console.log(value),
    disabled: false,
    error: ''
};
