import { render, screen } from '@testing-library/react';

import { Textarea } from '.';

it('renders without crashing', () => {
    const { container } = render(<Textarea value="Test" onChange={vi.fn()} />);

    expect(container).toMatchSnapshot();
});

it('renders and finds the attribute value', () => {
    render(<Textarea value="Test" onChange={vi.fn()} />);

    expect(screen.getByText('Test')).toBeTruthy();
});
