import styled from 'styled-components';

import { Button } from '../../../../Button';

export const StyledHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 64px;
    gap: 16px;
    background: #e3e3e3;
    align-items: center;
    padding: 16px;
    border: 1px solid #bdbdbd;
`;

export const StyledButton = styled(Button)`
    color: #000000;
`;

export const StyledCTAEnd = styled.div`
    display: flex;
    gap: 16px;
`;
