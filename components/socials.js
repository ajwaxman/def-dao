import React from "react";
import styled from "styled-components";
import { GitHubIcon, GlobeIcon, OpenSeaIcon, TwitterIcon } from "./icons";

const Socials = ({socials}) => {
    const socialIcons = {
        "twitter": <TwitterIcon />,
        "opensea": <OpenSeaIcon />,
        "github": <GitHubIcon />,
        "website": <GlobeIcon />
    }
    return (
        <IconWrapper>
            {socials.map(social => {
                return (
                    <SocialLink link={social[1]}>
                       {socialIcons[social[0]]}
                    </SocialLink>
                )
            })}
        </IconWrapper>
    )
}

const SocialLink = ({link, children}) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}

const iconSize = '18px';
const iconSpacing = '16px';

const IconWrapper = styled.div`
    display: inline-flex;
    margin-right: ${iconSpacing};
    margin-top: 5px;
    svg {
        height: ${iconSize};
        width: ${iconSize};
        margin-left: ${iconSpacing};
        path {
            fill: #3F3F46;
        }
        path.white {
            fill: white;
        }
    }
    
`

export default Socials;