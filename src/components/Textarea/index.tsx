import React from 'react';
import styled from 'styled-components';

interface TextareaProps {
    placeholder?: string;
    value: string | '';
    resizable?: boolean;
    onChange?: (value: string) => void;
    disabled?: boolean;
    error?: string;
}

interface StyledTextareaProps {
    resizable?: boolean;
}

const setResize = ({ resizable }: StyledTextareaProps) => (resizable ? 'resize' : 'none');

const StyledTextarea = styled.textarea<StyledTextareaProps>`
    resize: ${setResize};
`;

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
