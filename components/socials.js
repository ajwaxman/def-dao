import React from "react";
import styled from "styled-components";
import { GitHubIcon, GlobeIcon, OpenSeaIcon, TwitterIcon } from "./icons";
import { QUERIES } from "../utils/constants";

const Socials = ({socials}) => {
    const socialIcons = {
        "twitter": <TwitterIcon />,
        "opensea": <OpenSeaIcon />,
        "github": <GitHubIcon />,
        "website": <GlobeIcon />
    }
    return (
        <IconWrapper>
            {socials.map((social) => {
                return (
                    <SocialLink key={social[0]} link={social[1]}>
                        {socialIcons[social[0]]}
                    </SocialLink>
                )
            })}
        </IconWrapper>
    )
}

const SocialLink = ({link, children}) => {
    return (
        <Link href={link} target="_blank" rel="noopener noreferrer">
            {children}
        </Link>
    )
}

const iconSize = '20px';
const iconSpacing = '16px';

const Link = styled.a`
    margin: 2px;
`

const IconWrapper = styled.div`
    display: inline-flex;
    margin-right: ${iconSpacing};
    margin-top: 5px;
    svg {
        height: ${iconSize};
        width: ${iconSize};
        /* margin: 0 calc(${iconSpacing}/2 - 2px); */
        margin: 0 3px;
        @media ${QUERIES.phoneAndBelow} {
            margin: 0 2px;
        }
        path {
            fill: #3F3F46;
        }
        path.white {
            fill: white;
        }
    }
    
`

export default Socials;