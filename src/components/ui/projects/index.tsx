import React from 'react';
import styled from 'styled-components';

import { Button, Card, Header } from '../..';
import { COLOR_PRIMARY_2 } from '../../../GlobalStyles';

interface ProjectsUIProps {
    buttonProperties: ButtonProps;
}

interface ButtonProps {
    label?: string;
    onClick?: () => void;
}

const StyledContainer = styled.div`
    height: inherit;
    display: flex;
    flex-direction: column;
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: row;
    background-image: url('https://64.media.tumblr.com/2df67fe7bdbba84c88cdbbdf84fd2743/tumblr_nqgvxz92HC1s85u2fo1_500.gif');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    overflow: auto;

    @media (max-width: 750px) {
        flex-direction: column;
        flex: 1;
    }

    @media (min-width: 900px) {
        top: 60px;
    }
`;

const StyledOverlay = styled.div`
    display: flex;
    flex: 1;
    background-color: #1e476c6e;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    place-items: center;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
    column-gap: 20px;
    padding: 20px;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const StyledCard = styled(Card)`
    width: 250px;
    background: #2b2b2b;
    color: white;
`;

const StyledHeader = styled(Header)`
    border-bottom: 1px solid ${COLOR_PRIMARY_2};

    > * {
        margin: 10px;
    }
`;

const projects = [
    {
        title: 'Nextjs',
        image: '/images/nextjs.jpg',
        path: '',
        github: '',
        newTab: true,
        subtitle: 'Sandbox for me to try out new features'
    },
    {
        title: 'Component Library',
        image: '/images/react.jpg',
        path: '',
        github: '',
        newTab: true,
        subtitle: 'A collection of stateless components built using React & Typescript.'
    },
    {
        title: 'Crypto Dashboard',
        image: '/images/dashboard.jpg',
        path: '/dashboard',
        github: '',
        newTab: false,
        subtitle: 'A dashboard for crypto currencies'
    },
    {
        title: 'Github Search',
        image: '/images/github-search.jpg',
        path: 'https://github-search.manuelcorreia.org/',
        github: '',
        newTab: true,
        subtitle: "A simple search for Github's repositories"
    }
];

export const ProjectsUI: React.FC<ProjectsUIProps> = ({ buttonProperties }) => {
    return (
        <StyledContainer>
            <StyledHeader>
                <Button
                    {...buttonProperties}
                    label="Go Back"
                    onClick={() => buttonProperties.onClick && buttonProperties.onClick()}
                />
            </StyledHeader>
            <StyledContent>
                <StyledOverlay>
                    {projects.map((entry) => (
                        <StyledCard
                            title={entry.title}
                            subtitle={entry.subtitle}
                            key={entry.title}
                            image={entry.image}
                            href={{
                                github: entry.github,
                                website: entry.path
                            }}
                            isActionCard
                        />
                    ))}
                </StyledOverlay>
            </StyledContent>
        </StyledContainer>
    );
};
