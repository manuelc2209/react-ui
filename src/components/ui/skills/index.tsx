import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.span`
    color: white;
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    color: white;

    ${StyledLabel} {
        text-align: center;
    }
`;

export const Skills: React.FC = ({}) => {
    return (
        <StyledWrapper>
            <StyledLabel>Skills</StyledLabel>
        </StyledWrapper>
    );
};
