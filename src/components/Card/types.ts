export interface CardProps {
    title?: string;
    subtitle?: string;
    image?: string;
    isActionCard?: boolean;
    href?: {
        github: string;
        website: string;
    };
    className?: string;
}

export interface StyledBodyWrapperProps {
    hasImage?: string;
}

export interface StyledSubtitleProps {
    isActionCard?: boolean;
}
