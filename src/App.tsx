import React, { useState } from 'react';
import styled from 'styled-components';
import './index.css';

import { Button } from './components/Button';
import { Header } from './components/Header';
import { Login } from './components/ui/login';
import { Register } from './components/ui/register';
import { COLOR_PRIMARY_1, COLOR_PRIMARY_2 } from './GlobalStyles';
import { Portefolio } from './components/ui/portefolio';
import { Skills } from './components/ui/skills';

const StyledContainer = styled.div`
    height: inherit;
    display: flex;
    flex-direction: column;
`;

const StyledRegister = styled(Register)``;
const StyledLogin = styled(Login)``;

const StyledContent = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    padding: 15px;
    background: ${COLOR_PRIMARY_1};

    ${StyledRegister},
    ${StyledLogin} {
        width: 70%;
        margin: auto;
    }

    @media (max-width: 450px) {
        flex-direction: column;
    }
`;

const StyledColumn = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;

    @media (max-width: 450px) {
        width: 100%;
    }
`;

const StyledHeader = styled(Header)`
    border-bottom: 1px solid ${COLOR_PRIMARY_2};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    > * {
        margin: 15px;
    }
`;

const mockedData = {
    img:
        'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg',
    headline: 'Who am I?',
    label: "I'm a Front-End Developer for ",
    link: 'https://www.cleverti.com/',
    linkLabel: 'Cleverti'
};

const socialLinks = {
    data: [
        {
            link: 'https://github.com/manuelc2209/react-login',
            linkLabel: 'GitHub'
        },
        {
            link: 'https://www.linkedin.com/in/manuel-correia2209/',
            linkLabel: 'LinkedIn'
        }
    ],
    label: 'Social links - Feel free to visit them:'
};

const skillsData = [
    { skillLevel: 50, label: 'Css', logo: '' },
    { skillLevel: 70, label: 'React', logo: '' },
    { skillLevel: 70, label: 'Vue', logo: '' },
    { skillLevel: 70, label: 'Angular', logo: '' },
    { skillLevel: 70, label: 'React', logo: '' },
    { skillLevel: 70, label: 'React', logo: '' },
    { skillLevel: 70, label: 'React', logo: '' },
    { skillLevel: 70, label: 'React', logo: '' },
    { skillLevel: 70, label: 'React', logo: '' },
    { skillLevel: 70, label: 'React', logo: '' }
];

export const App: React.FC = () => {
    const [disabled, setDisabled] = useState(false);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const handleOnClick = () => {
        setDisabled(true);
        // Fake timeout to simmulate a request handler while api is not ready
        setTimeout(() => setDisabled(false), 2500);
    };

    const handleLogin = () => {
        setRegister(false);
        setLogin(!login);
    };

    const handleRegister = () => {
        setRegister(!register);
        setLogin(false);
    };

    return (
        <StyledContainer>
            <StyledHeader>
                {login ? (
                    <Button label="Log out" onClick={() => handleLogin && handleLogin()} />
                ) : (
                    <>
                        <Button label="Log in" onClick={() => handleLogin && handleLogin()} />
                        <Button label="Sign up" onClick={() => handleRegister && handleRegister()} />
                    </>
                )}
            </StyledHeader>
            {register || login ? (
                <StyledContent>
                    {register && (
                        <StyledRegister
                            nameLabel="Username:"
                            nicknamePlaceholder="Please insert a valid Nickname here:"
                            passwordLabel="Password:"
                            passwordPlaceholder="Please insert a valid password here:"
                            validatePassword={true}
                            doubleValidation={true}
                            onClick={handleOnClick}
                            disabled={disabled}
                        ></StyledRegister>
                    )}
                    {login && (
                        <StyledLogin
                            nameLabel="Username:"
                            nicknamePlaceholder="Please type in your Nickname here:"
                            passwordLabel="Password:"
                            passwordPlaceholder="Please type in your password here:"
                            onClick={handleOnClick}
                            disabled={disabled}
                        ></StyledLogin>
                    )}
                </StyledContent>
            ) : (
                <StyledContent>
                    <StyledColumn>
                        <Portefolio
                            label={mockedData.label}
                            img={mockedData.img}
                            headline={mockedData.headline}
                            link={mockedData.link}
                            linkLabel={mockedData.linkLabel}
                            socialLinks={socialLinks}
                        />
                    </StyledColumn>
                    <StyledColumn>
                        <Skills />
                    </StyledColumn>
                </StyledContent>
            )}
        </StyledContainer>
    );
};
