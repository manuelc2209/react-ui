export const ForumContextString = `
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
                isLoggedIn,
                threads,
                setIsLoggedIn,
                setThreads
            }),
            [isLoggedIn, threads, setThreads, setIsLoggedIn]
        );
    
        return <ForumContext.Provider value={value}>{children}</ForumContext.Provider>;
    };    
`;

export const ForumThreadsString = `
import { nanoid } from 'nanoid';
import React, { useContext } from 'react';

import { Thread } from '../../components';
import { ForumContext } from '../../context/forumContext';

import { StyledContainer, StyledSideSection, StyledThreadContainer } from './styles';

export const ThreadsView = () => {
    const { threads } = useContext(ForumContext);

    return (
        <StyledContainer>
            <StyledThreadContainer>
                {threads?.map((thread) => (
                    <Thread
                        key={nanoid()}
                        avatar={thread.avatar}
                        user={thread.user}
                        sideSection={thread.sideSection}
                        title={thread.title}
                        subtitle={thread.subtitle}
                    />
                ))}
            </StyledThreadContainer>
            <StyledSideSection>
                <div>Sample Side Section</div>
            </StyledSideSection>
        </StyledContainer>
    );
};
`;

export const AvailableCodeSamples = [ForumContextString, ForumThreadsString];
