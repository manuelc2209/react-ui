export interface TextareaProps {
    placeholder?: string;
    value: string | '';
    resizable?: boolean;
    onChange?: (value: string) => void;
    disabled?: boolean;
    error?: string;
}

export interface StyledTextareaProps {
    resizable?: boolean;
}
