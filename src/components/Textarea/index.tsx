import React, { FC } from 'react';

import { StyledTextarea } from './styles';
import { TextareaProps } from './types';

export const Textarea = ({ placeholder, value, error, ...props }: TextareaProps): JSX.Element => {
    return <StyledTextarea placeholder={placeholder} value={value} aria-label="Textarea" {...props} />;
};
