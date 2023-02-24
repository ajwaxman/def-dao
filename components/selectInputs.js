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
            <option value="contract">Contract Audits</option>
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
            <option value="rust">Rust</option>
            <option value="cairo">Cairo</option>
            <option value="analytics">Analytics</option>
            <option value="games">Game Dev</option>
            <option value="copywriting">Copywriting</option>
            <option value="product design">Product Design</option>
            <option value="brand design">Brand Design</option>
            <option value="photography">Photography</option>
            <option value="angel investing">Angel Investing</option>
            <option value="institutional investing">Institutional Investing</option>
            <option value="strategy & ops">Strategy & Ops</option>
            <option value="partnerships">Partnerships</option>
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
            <option value="los angeles">Los Angeles</option>
            <option value="san francisco">San Francisco</option>
            <option value="colorado">Colorado</option>
            <option value="pacific northwest">Pacific Northwest</option>
            <option value="miami">Miami</option>
            <option value="austin">Austin</option>
            <option value="london">London</option>
            <option value="USA">USA</option>
            <option value="canada">Canada</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
            <option value="asia">Asia</option>
            <option value="africa">Africa</option>
            <option value="latam">Latam</option>
        </select>  
    )
}