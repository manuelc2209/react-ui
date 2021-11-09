import React from 'react';
import styled from 'styled-components';
import { COLOR_PRIMARY_2 } from '../../../GlobalStyles';

type skillData = {
    skillLevel: number;
    label: string;
    logo: string;
};

interface SkillsProps {
    skills?: skillData[];
}

interface StyledSkillContainerProps {
    percentage?: number;
}

const setPercentage = ({ percentage }: { percentage?: number }) =>
    `linear-gradient(to right, #3d3d3d ${percentage}%, #000000 ${percentage}%)`;

const StyledSkillContainer = styled.div<StyledSkillContainerProps>`
    background: ${setPercentage};
`;

const StyledLabel = styled.span`
    color: white;
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    color: white;

    ${StyledLabel} {
        text-align: center;
        margin-bottom: 10px;
    }

    ${StyledSkillContainer} {
        border-radius: 15px;
        padding: 5px;
        border: 1px solid ${COLOR_PRIMARY_2};
        margin: 20px;
    }
`;

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
    const filteredSkills = skills && skills.sort((item, acc) => acc.skillLevel - item.skillLevel);

    return (
        <StyledWrapper>
            <StyledLabel>My skills:</StyledLabel>
            {filteredSkills &&
                filteredSkills.map((skill) => (
                    <StyledSkillContainer
                        percentage={skill.skillLevel}
                        key={skill.label}
                        title={`${skill.skillLevel}`}
                    >
                        <StyledLabel key={skill.skillLevel} />
                        <StyledLabel key={skill.label}>{skill.label}</StyledLabel>
                    </StyledSkillContainer>
                ))}
        </StyledWrapper>
    );
};
