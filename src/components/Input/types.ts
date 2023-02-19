export interface InputProps {
    type?: string;
    label?: string;
    disabled?: boolean;
    className?: string;
    placeholder?: string;
    onChange?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export interface StyledContainerProps {
    disabled?: boolean;
}

export interface StyledInputProps {
    disabled?: boolean;
}

export interface StyledLabelProps {
    disabled?: boolean;
}
