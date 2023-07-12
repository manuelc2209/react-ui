export interface IThread {
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
        postTimeTracker: number;
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
