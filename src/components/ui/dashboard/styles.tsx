import styled from 'styled-components';
import Select from 'react-select';

import { lightgrey1 } from '../../../GlobalStyles';
import { Button } from '../../Button';
import { Header } from '../../Header';

import { StyledHeaderRightProps } from './types';

export const customStyles = {
    control: (base: any, state: { isFocused: any }) => ({
        ...base,
        background: '#000000',
        borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
        borderColor: '#d8d8d8',
        boxShadow: null,
        height: '20px',
        '&:hover': {
            borderColor: '#c5c5c5'
        },
        cursor: 'pointer'
    }),
    menu: (base: any) => ({
        ...base,
        background: '#000000',
        borderRadius: 7,
        hyphens: 'auto',
        marginTop: 0,
        textAlign: 'left',
        wordWrap: 'break-word',
        height: '20px'
    }),
    menuList: (base: any) => ({
        ...base,
        padding: 0,
        borderRadius: 3,
        '&:hover': {
            background: '#000000'
        }
    }),
    option: (base: any, state: { isFocused: boolean; isSelected: boolean }) => ({
        ...base,
        background: state.isSelected ? '#000000' : '#8d8d8d',
        padding: 10,
        cursor: state.isSelected ? 'default' : 'pointer',
        '&:hover': {
            background: '#d4d4d4'
        }
    }),
    singleValue: (base: any) => ({
        ...base,
        color: '#ffffff'
    })
};

export const StyledContainer = styled.div`
    user-select: none;
`;

export const StyledText = styled.span`
    color: ${lightgrey1};
    font-size: 16px;
    align-self: center;
`;

export const StyledButton = styled(Button)`
    align-self: center;
    margin: 10px;
`;

export const StyledHeader = styled(Header)`
    justify-content: space-between;

    > * {
        :last-child {
            justify-content: flex-end;
        }
    }
`;

const setOverflow = ({ isMobile }: { isMobile?: boolean }) => (isMobile ? 'auto' : 'inherit');

export const StyledHeaderRight = styled.div<StyledHeaderRightProps>`
    display: flex;
    align-self: center;
    align-items: center;
    width: 100%;
    column-gap: 10px;
    overflow: ${setOverflow};
`;

export const StyledContentLeft = styled.div`
    align-self: center;
    min-width: 100px;
`;

export const StyledBody = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background: #101010;
    overflow: overlay;
`;

export const StyledFooter = styled.div`
    background: #101010;
    display: flex;
    justify-content: space-evenly;
    height: 60px;
    align-items: center;
    position: sticky;
    bottom: 0;
    width: 100%;

    > * {
        color: white;
        padding: 20px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
        :hover {
            background: #3f3f3fac;
        }
    }
`;

export const StyledButtonFooter = styled(Button)``;

export const StyledContent = styled.div`
    height: inherit;
    width: 100%;
    background: #474747;
`;

export const StyledSubBody = styled.div`
    box-sizing: border-box;
    height: 100%;
    position: relative;

    @media (max-width: 550px) {
        display: block;
        overflow-x: auto;
    }
`;

export const StyledLoading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 32px;
    height: 100vh;
    width: 100%;
    align-items: center;
    font-weight: 600;
`;

export const StyledSelect = styled(Select)``;

export const StyledHorizontalScroll = styled.div`
    display: flex;
    align-items: center;
    column-gap: 20px;
    overflow-x: overlay;
    width: 100%;

    ::-webkit-scrollbar {
        display: none;
    }

    ${StyledSelect} {
        min-width: 150px;
        position: initial;
    }
`;
