import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { RegisterUI } from '../..';

const buttonProps = {
    label: 'Go back',
    disabled: true,
    onClick: () => jest.fn()
};

const formProps = {
    name: 'Test',
    disabled: false,
    validatePassword: true,
    doubleValidation: true,
    passwordLabel: 'PwLabel',
    nicknamePlaceholder: 'Nickname Placeholder',
    passwordPlaceholder: 'Pw Placeholder',
    onClick: () => jest.fn()
};

it('renders snapshot correctly', () => {
    const tree = renderer
        .create(<RegisterUI buttonProperties={buttonProps} formProperties={formProps} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RegisterUI buttonProperties={buttonProps} formProperties={formProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
