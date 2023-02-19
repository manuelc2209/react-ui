import React, { useMemo, useState } from 'react';

import { ForumContextProps, ForumContextWrapperProps, IThread } from './contextType';

export const ForumContext = React.createContext<ForumContextProps>({
    threads: undefined,
    isLoggedIn: false,
    setThreads: () => {},
    setIsLoggedIn: () => {}
});

export const ForumContextWrapper: React.FC<ForumContextWrapperProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [threads, setThreads] = useState<IThread[] | undefined>(undefined);

    const value = useMemo(
        () => ({
            children,
            isLoggedIn,
            threads,
            setIsLoggedIn,
            setThreads
        }),
        [children, isLoggedIn, threads, setThreads, setIsLoggedIn]
    );

    return <ForumContext.Provider value={value}>{children}</ForumContext.Provider>;
};
