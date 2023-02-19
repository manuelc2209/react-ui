export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'default' | 'border';

export interface ButtonProps {
    size?: ButtonSize;
    buttonType?: ButtonType;
    label?: string;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
    onMouseUp?: () => void;
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
