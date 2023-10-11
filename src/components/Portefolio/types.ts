export interface CardType {
    title?: string;
    subtitle?: string;
    image?: string;
    href?: {
        github: string;
        website: string;
    };
}

export interface StackType {
    name: string;
    logoUrl: string;
}

export interface PortefolioProps {
    img?: string;
    headline?: string;
    label?: string;
    currentStack?: StackType[];
    otherStack?: StackType[];
    cards?: CardType[];
}
