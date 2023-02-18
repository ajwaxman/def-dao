import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

function RadixTooltip() {
    return (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                <button className="IconButton">
                    Hello
                </button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                <Tooltip.Content className="TooltipContent" sideOffset={5}>
                    Add to library
                    <Tooltip.Arrow className="TooltipArrow" />
                </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}

export default RadixTooltip;