import React from 'react';

import { StyledTextarea } from './styles';
import { TextareaProps } from './types';

export const Textarea: React.FC<TextareaProps> = ({ placeholder, value, error, ...props }) => {
    return <StyledTextarea placeholder={placeholder} value={value} aria-label="Textarea" {...props} />;
};
