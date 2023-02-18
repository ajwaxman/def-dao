import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { violet, blackA } from '@radix-ui/colors';
import styled, { keyframes } from 'styled-components';

function RadixTooltip({text, children}) {
    return (
        <Tooltip.Provider delayDuration={100}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  {children}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                <TooltipContent sideOffset={5}>
                    {text}
                    <TooltipArrow />
                </TooltipContent>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}

const slideUpAndFade = keyframes`
    from {
        opacity: 0;
        transform: translateY(0px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const slideRightAndFade = keyframes`
    from {
        opacity: 0;
        transform: translateX(0px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

const slideDownAndFade = keyframes`
    from {
        opacity: 0;
        transform: translateY(0px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const slideLeftAndFade = keyframes`
    from {
        opacity: 0;
        transform: translateX(0px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

/* reset */
const Button = styled.button`
    all: unset;
` 

const TooltipContent = styled(Tooltip.Content)`
    border-radius: 4px;
    padding: 10px 15px;
    font-size: 15px;
    line-height: 1;
    color: ${violet};
    background-color: white;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    user-select: none;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    &[data-state='delayed-open'][data-side='top'] {
        animation-name: ${slideDownAndFade};
    }
    &[data-state='delayed-open'][data-side='right'] {
        animation-name: ${slideLeftAndFade};
    }
    &[data-state='delayed-open'][data-side='bottom'] {
        animation-name: ${slideUpAndFade};
    }
    &[data-state='delayed-open'][data-side='left'] {
        animation-name: ${slideRightAndFade};
    }
`

const TooltipArrow = styled(Tooltip.Arrow)`
    fill: white;
`

const IconButton = styled(Button)`
    font-family: inherit;
    border-radius: 100%;
    height: 35px;
    width: 35px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${violet.violet11};
    background-color: white;
    box-shadow: 0 2px 10px ${blackA.blackA7};
    &:hover {
        background-color: ${violet.violet3};
    }
    &:focus {
        box-shadow: 0 0 0 2px black;
    }
`

export default RadixTooltip;