export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'default' | 'border';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    buttonType?: ButtonType;
    label?: string;
    onClick?: () => void;
    onMouseDown?: () => void;
}

export interface StyledButtonProps {
    size?: ButtonSize;
    disabled?: boolean;
    buttonSize?: number;
    buttonType?: ButtonType;
}

export interface StyledLabelProps {
    disabled?: boolean;
}
