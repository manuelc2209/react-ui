import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { fireEvent } from '@testing-library/react';

import { Button } from '..';

it('renders snapshot correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders component with two types', () => {
    const div = document.createElement('div');

    const buttonTypes = ['default', 'border'] as const;

    buttonTypes.map((type) => {
        ReactDOM.render(<Button buttonType={type} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

it('renders component with all sizes', () => {
    const div = document.createElement('div');

    const buttonSizes = ['small', 'medium', 'large'] as const;

    buttonSizes.map((size) => {
        ReactDOM.render(<Button size={size} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

it('renders component with callbacks', () => {
    const div = document.createElement('div');
    const mockedClick = jest.fn();
    const mockedMouseDown = jest.fn();
    const mockedMouseUp = jest.fn();

    ReactDOM.render(
        <Button onClick={mockedClick} onMouseDown={mockedMouseDown} onMouseUp={mockedMouseUp} />,
        div
    );

    const button = div.querySelector('button');

    fireEvent.click(button as Element);
    fireEvent.mouseDown(button as Element);
    fireEvent.mouseUp(button as Element);

    expect(mockedClick).toHaveBeenCalledTimes(1);
    expect(mockedMouseDown).toHaveBeenCalledTimes(1);
    expect(mockedMouseUp).toHaveBeenCalledTimes(1);

    ReactDOM.unmountComponentAtNode(div);
});
