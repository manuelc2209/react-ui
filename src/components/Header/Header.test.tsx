import { render } from '@testing-library/react';

import { Header } from '.';

it('renders snapshot correctly', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
});
