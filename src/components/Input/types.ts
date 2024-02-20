export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    label?: string;
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
