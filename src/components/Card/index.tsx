import React from 'react';
import styled from 'styled-components';
import Color from 'color';
import validateColor from 'validate-color';
import { COLOR_PRIMARY } from '../../GlobalStyles';

interface CardProps {
    backgroundColor?: string;
    className?: string;
}

interface StyledHeaderProps {
    backgroundColor?: string;
}

const setColor = ({ backgroundColor }: { backgroundColor?: string }) => {
    return backgroundColor ? backgroundColor : COLOR_PRIMARY;
};

const StyledCard = styled.div<StyledHeaderProps>`
    display: flex;
    background: ${setColor};
`;

export const Card: React.FC<CardProps> = ({ backgroundColor, className, children }) => {
    const parsedColor = validateColor(backgroundColor as string);
    const bgHex = (parsedColor && Color(backgroundColor).hex()) || '';

    return (
        <StyledCard backgroundColor={bgHex} className={className}>
            {children}
        </StyledCard>
    );
};
