import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import data from './data/index.json';
import { ProjectsUI, ForumOutlet, Threads } from './pages';
import { ForumContextWrapper } from './pages/forum/context/forumContext';
import { Home } from './pages/home';

export const App: React.FC = () => {
    const { profile } = data;

    return (
        <Routes>
            <Route path="/" element={<Home profile={profile} />} />
            <Route path="/projects" element={<ProjectsUI />} />
            <Route path="/forum" element={<ForumOutlet />}>
                <Route
                    path="/forum"
                    element={
                        <ForumContextWrapper>
                            <Threads />
                        </ForumContextWrapper>
                    }
                />
                <Route path="/forum/login" element={<div>login wip</div>} />
                <Route path="/forum/register" element={<div>register wip</div>} />
            </Route>
        </Routes>
    );
};
