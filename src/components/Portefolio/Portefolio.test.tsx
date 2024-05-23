import { render } from '@testing-library/react';

import { Portefolio } from '.';

it('renders without crashing', () => {
    const { container } = render(<Portefolio />);

    expect(container).toMatchSnapshot();
});
