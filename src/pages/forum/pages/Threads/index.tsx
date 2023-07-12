import React, { useContext, useEffect } from 'react';

import { ForumContext } from '../../context/forumContext';
import { ThreadsView } from '../../layout';
import { mockedThreads } from '../../shared/mockData';

export const Threads = () => {
    const { setThreads } = useContext(ForumContext);

    useEffect(() => {
        const sortedItems = mockedThreads.sort(
            (item, newItem) => newItem.sideSection.postTimeTracker - item.sideSection.postTimeTracker
        );

        setThreads(sortedItems);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mockedThreads]);

    return <ThreadsView />;
};
