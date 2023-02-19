import React, { useContext, useEffect } from 'react';

import { ForumContext, ForumContextWrapper } from '../../context/forumContext';
import { ThreadsView } from '../../layout';
import { mockedThreads } from '../../shared/mockData';

export const Threads = () => {
    const { setThreads } = useContext(ForumContext);

    useEffect(() => {
        setThreads(mockedThreads);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <ThreadsView />;
};
