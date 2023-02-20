import React, { useState } from "react";

export const AvailabilitySelector = ({setFilter}) => {

    const [availabilityFilter, setAvailabilityFilter] = useState('');
    
    return(
        <select
           value={availabilityFilter}
            onChange={e => {
                setAvailabilityFilter(e.target.value);
                setFilter('availability', e.target.value || undefined);
            }}
        >
            <option value="">All Availability</option>
            <option value="part time">Part Time</option>
            <option value="full time">Full Time</option>
            <option value="solidity audits">Solidity Audits</option>
        </select>
    )
}

export const SkillSelector = ({setFilter}) => {

    const [skillFilter, setSkillFilter] = useState('');
    
    return (
        <select
            value={skillFilter}
            onChange={e => {
                setSkillFilter(e.target.value);
                setFilter('skills', e.target.value || undefined);
            }}
        >
            <option value="">All Skills</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="solidity">Solidity</option>
        </select>  
    )
}

export const LocationSelector = ({setFilter}) => {

    const [locationFilter, setLocationFilter] = useState('');

    return (
        <select
            value={locationFilter}
            onChange={e => {
                setLocationFilter(e.target.value);
                setFilter('location', e.target.value || undefined);

            }}
        >
            <option value="">All Locations</option>
            <option value="new york">New York</option>
            <option value="cleveland">Cleveland</option>
            <option value="los angeles">Los Angeles</option>
        </select>  
    )
}