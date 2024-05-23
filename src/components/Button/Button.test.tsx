import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from '.';

it('renders snapshot correctly', () => {
    const { container } = render(<Button />);

    expect(container).toMatchSnapshot();
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
    const mockedClick = vi.fn();

    render(<Button onClick={mockedClick} />);

    fireEvent.click(screen.getByTestId('button'));

    expect(mockedClick).toHaveBeenCalledTimes(1);
});
