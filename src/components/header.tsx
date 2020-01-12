import * as React from 'react';
import styled from 'styled-components';
import GitHubButton from 'react-github-btn'


type HeaderDivProps = {
    color?: string;
}

const HeaderDiv = styled.div`
    font-family: PT serif;
    font-size: 24pt;
    color: ${(props :HeaderDivProps) => props.color ? props.color : 'black'};
    width: 80%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
`;

export type HeaderProps = {
    text?: string;
    color?: string;
}

const Header :React.FC<HeaderProps> = ({text, color} :HeaderProps) => (
    <HeaderDiv color={color}>
        {text ? text : 'Ryan Guild Consulting'}
        <GitHubButton 
            href="https://github.com/RyanGuild/personal-blog.git"
            title="View on GitHub"
            data-size="large"
        >
        View on GitHub
        </GitHubButton>
    </HeaderDiv>
);

export default Header;