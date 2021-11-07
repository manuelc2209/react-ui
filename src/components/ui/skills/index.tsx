import React from 'react';
import styled from 'styled-components';

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
        margin: 20px;
    }
`;

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
    const filteredSkills = skills && skills.sort((item, acc) => item.skillLevel - acc.skillLevel);

    return (
        <StyledWrapper>
            <StyledLabel>My skills:</StyledLabel>
            {filteredSkills &&
                filteredSkills.map((skill) => (
                    <StyledSkillContainer percentage={skill.skillLevel} key={skill.label}>
                        <StyledLabel key={skill.skillLevel} />
                        <StyledLabel key={skill.label}>{skill.label}</StyledLabel>
                    </StyledSkillContainer>
                ))}
        </StyledWrapper>
    );
};
