export interface ThreadProps {
    avatar: string;
    title: string;
    subtitle: string;
    sideSection: {
        replies: number;
        views: number;
        postTimeTracker: Date;
    };
}
