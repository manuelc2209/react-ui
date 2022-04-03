import React from 'react';

import { Button } from './components';

export const App: React.FC = () => {
    return (
        <div>
            <span>Hi from App.tsx</span>
            <Button label="Button" buttonType="default" />
        </div>
    );
};
