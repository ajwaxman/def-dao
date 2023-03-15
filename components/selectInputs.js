import React, { useState, useId } from "react";
import Select from 'react-select';

const selectStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white', minWidth:"170px", fontSize: '14px', color: 'black'}),
    placeholder: (styles) => ({...styles, color: 'black'}),
    dropdownIndicator: (styles) => ({...styles }),
    indicatorSeparator: (styles) => ({...styles, display: 'none'}),
    option: (styles) => ({...styles, fontSize: '14px'})
};

export const AvailabilitySelector = ({setFilter}) => {
    
    const [availabilityFilter, setAvailabilityFilter] = useState('');

    const options = [
        { value: "", label: "All Availability"},
        { value: "part time", label: "Part Time"},
        { value: "full time", label: "Full Time"},
        { value: "contract", label: "Contract Audits"},
    ]

    return(
        <Select 
            placeholder={"All Availability"}
            onChange={e => {
                setAvailabilityFilter(),
                setFilter('availability', e.value || undefined); 
            }}
            isSearchable={false}
            className="select"
            options={options}
            styles={selectStyles}
            instanceId={useId()}
        />
    )
}

export const SkillSelector = ({setFilter}) => {
    
    const [skillFilter, setSkillFilter] = useState('');

    const options = [
        { value: "", label: "All Skills"},
        { value: "frontend", label: "Frontend"},
        { value: "backend", label: "Backend"},
        { value: "solidity", label: "Solidity"},
        { value: "rust", label: "Rust"},
        { value: "cairo", label: "Cairo"},
        { value: "game", label: "Game Dev"},
        { value: "copywriting", label: "Copywriting"},
        { value: "product design", label: "Product Design"},
        { value: "brand design", label: "Brand Design"},
        { value: "photography", label: "Photography"},
        { value: "angel investing", label: "Angel Investing"},
        { value: "institutional investing", label: "Institutional Investing"},
        { value: "strategy & ops", label: "Strategy & Ops"},
        { value: "partnerships", label: "Partnerships"},
    ]

    return(
        <Select 
            placeholder={"All Skills"}
            onChange={e => {
                setSkillFilter(),
                setFilter('skills', e.value || undefined); 
            }}
            isSearchable={false}
            className="select"
            options={options}
            styles={selectStyles}
            instanceId={useId()}
        />
    )
}

export const LocationSelector = ({setFilter}) => {
    
    const [locationFilter, setLocationFilter] = useState('');

    const options = [
        { value: "", label: "All Locations"},
        { value: "new york", label: "New York"},
        { value: "los angeles", label: "Los Angeles"},
        { value: "san francisco", label: "San Francisco"},
        { value: "colorado", label: "Colorado"},
        { value: "pacific northwest", label: "Pacific Northwest"},
        { value: "miami", label: "Miami"},
        { value: "austin", label: "Austin"},
        { value: "london", label: "London"},
        { value: "USA", label: "USA"},
        { value: "canada", label: "Canada"},
        { value: "oceania", label: "Oceania"},
        { value: "asia", label: "Asia"},
        { value: "africa", label: "Africa"},
        { value: "latam", label: "Latam"},
    ]

    return(
        <Select 
            placeholder={"All Locations"}
            onChange={e => {
                setLocationFilter(),
                setFilter('location', e.value || undefined); 
            }}
            isSearchable={false}
            className="select"
            options={options}
            styles={selectStyles}
            instanceId={useId()}
        />
    )
}