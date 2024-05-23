import { render } from '@testing-library/react';

import { Card } from '.';

vi.mock('react-router-dom', () => ({
    useNavigate: () => vi.fn()
}));

it('renders snapshot correctly', () => {
    const { container } = render(<Card />);

    expect(container).toMatchSnapshot();
});
