import React from 'react';

import { StyledTextarea } from './styles';
import { TextareaProps } from './types';

export const Textarea: React.FC<TextareaProps> = ({
    placeholder,
    value,
    resizable,
    onChange,
    disabled,
    error
}) => {
    return (
        <StyledTextarea
            placeholder={placeholder}
            value={value}
            resizable={resizable}
            aria-label="Textarea"
            disabled={disabled}
            onChange={(ev) => onChange && onChange(ev.target.value)}
        />
    );
};
