import React from "react";

export const AvailabilityInput = ({availability, setAvailabilityFilter}) => {
    return(
        <select
            id="availability-filter"
            value={availability}
            onChange={event => {
                setAvailabilityFilter(event.target.value);
                console.log(event.target.value);
            }}
        >
            <option value="all">All Availability</option>
            <option value="partTime">Part Time</option>
            <option value="fullTime">Full Time</option>
            <option value="solidity">Solidity Audits</option>
        </select>
    )
}

export const SkillInput = () => {
    return (
        <select>
            <option value="all">All Skills</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="solidity">Solidity</option>
        </select>  
    )
}