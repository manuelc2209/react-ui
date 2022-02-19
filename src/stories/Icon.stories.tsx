import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Icon, IconList } from '../components';

export default {
    title: 'component/Icon',
    component: Icon,
    argTypes: {
        icon: {
            options: IconList,
            control: { type: 'select' }
        },
        size: {
            type: 'number',
            defaultValue: 30
        },
        className: {
            table: {
                disable: true
            }
        }
    }
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => {
    return <Icon {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
    icon: 'video'
};
