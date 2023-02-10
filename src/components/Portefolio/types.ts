export interface PubLinksData {
    link?: string;
    linkLabel?: string;
}

export interface PubLinks {
    label?: string;
    data?: PubLinksData[];
}

export interface CardType {
    title?: string;
    subtitle?: string;
    image?: string;
    href?: {
        github: string;
        website: string;
    };
}

export interface PortefolioProps {
    img?: string;
    headline?: string;
    label?: string;
    link?: string;
    linkLabel?: string;
    cards?: CardType[];
}
