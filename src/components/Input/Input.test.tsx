import { render } from '@testing-library/react';
import React from 'react';

import { Input } from '.';

it('renders without crashing', () => {
    const { container } = render(<Input />);

    expect(container).toMatchSnapshot();
});
