import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from '..';

it('renders snapshot correctly', () => {
    const tree = render(<Button />);
    expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
    const tree = render(<Button />);
    expect(tree).toMatchSnapshot();
});

it('renders component with two types', () => {
    const buttonTypes = ['default', 'border'] as const;

    buttonTypes.map((type) => {
        const el = render(<Button buttonType={type} />);
        expect(el).toMatchSnapshot();
    });
});

it('renders component with all sizes', () => {
    const div = document.createElement('div');

    const buttonSizes = ['small', 'medium', 'large'] as const;

    buttonSizes.map((size) => {
        const el = render(<Button size={size} />);
        expect(el).toMatchSnapshot();
    });
});

it('renders component with callbacks', () => {
    const mockedClick = jest.fn();
    const mockedMouseDown = jest.fn();
    const mockedMouseUp = jest.fn();

    render(<Button onClick={mockedClick} onMouseDown={mockedMouseDown} onMouseUp={mockedMouseUp} />);

    fireEvent.click(screen.getByTestId('button'));
    fireEvent.mouseDown(screen.getByTestId('button'));
    fireEvent.mouseUp(screen.getByTestId('button'));

    expect(mockedClick).toHaveBeenCalledTimes(1);
    expect(mockedMouseDown).toHaveBeenCalledTimes(1);
    expect(mockedMouseUp).toHaveBeenCalledTimes(1);
});
