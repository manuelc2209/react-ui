import styled from 'styled-components';

import { StyledTextareaProps } from './types';

export const setResize = ({ resizable }: StyledTextareaProps) => (resizable ? 'resize' : 'none');

export const StyledTextarea = styled.textarea<StyledTextareaProps>`
    resize: ${setResize};
`;
