export interface ThreadProps {
    avatar: string;
    title: string;
    subtitle: string;
    user: {
        id: string;
        firstName: string;
        lastName: string;
    };
    sideSection: {
        replies: number;
        views: number;
        postTimeTracker: Date;
    };
}
