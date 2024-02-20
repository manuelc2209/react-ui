export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder?: string;
    error?: string;
}

export interface StyledTextareaProps {
    resizable?: boolean;
}
