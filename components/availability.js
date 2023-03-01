import React from "react";
import styled from "styled-components";

const Availability = ({availability, color }) => {
    return(
        <AvailabilityWrapper>
            <ColorIndicator color={color}/>
            <AvailabilityDetail>
                {availability}
            </AvailabilityDetail>
        </AvailabilityWrapper>
    )
}

export default Availability;

const ColorIndicator = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background: ${props => props.color};
    margin-right: 8px;
`

const AvailabilityWrapper = styled.div`
    display: flex;
    align-items: center;
`

const AvailabilityDetail = styled.div`
`
