import styled from 'styled-components';

import { Button } from '../../../../components';

export const StyledHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 60px;
    gap: 16px;
    background: #151515;
    align-items: center;
    padding: 16px;
`;

export const StyledButton = styled(Button)``;

export const StyledCTAEnd = styled.div`
    display: flex;
    gap: 16px;
`;
