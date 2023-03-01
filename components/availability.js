import React from "react";
import styled from "styled-components";

const Availability = ({availability, color, shadow }) => {
    return(
        <AvailabilityWrapper>
            <ColorIndicator color={color} shadow={shadow}/>
            <AvailabilityDetail>
                {availability}
            </AvailabilityDetail>
        </AvailabilityWrapper>
    )
}

export default Availability;

const ColorIndicator = styled.div`
    width: 7px;
    height: 7px;
    border-radius: 7px;
    background: ${props => props.color};
    margin-right: 8px;
    /* box-shadow: 0px 0px 3px 1px ${props => props.shadow}; */
`

const AvailabilityWrapper = styled.div`
    display: flex;
    align-items: center;
`

const AvailabilityDetail = styled.div`
`
