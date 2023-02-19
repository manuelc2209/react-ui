export interface IThread {
    avatar: string;
    title: string;
    subtitle: string;
    sideSection: {
        replies: number;
        views: number;
        postTimeTracker: Date;
    };
}

export interface ForumContextWrapperProps {
    children: React.ReactNode;
}

export interface ForumContextProps {
    threads?: IThread[];
    isLoggedIn: boolean;
    setThreads: (threads: IThread[]) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}
