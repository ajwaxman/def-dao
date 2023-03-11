const { Client } = require("@notionhq/client")
import availabilityDetails from "./data/availabilities";
import skillDetails from "./data/skills";

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export const getAllPeople = async () => {
    let results = []

    let data = await notion.databases.query({
        database_id: process.env.DATABASE_ID,
        sorts: [
            {
                property: "Joined",
                direction: "ascending"
            }
        ]
    })

    results = [...data.results]

    while (data.has_more) {
        data = await notion.databases.query({
            database_id: process.env.DATABASE_ID,
            sorts: [
                {
                    property: "Joined",
                    direction: "ascending"
                }
            ],
            start_cursor: data.next_cursor
        }) 

        results = [...results, ...data.results]
    }

    return results.map(({properties}) => {
        const userName = properties['Discord Username'].title[0]?.plain_text || ""
        const avatarUrl = properties.Avatar.url || "";
        const location = properties.Location.multi_select[0]?.name || "";
        const skills = properties.Skills.multi_select.map(skill => {
            return skillDetails[skill.name] || "";
        } );
        const availability = properties.Availability.multi_select.map(availability => {
            return availabilityDetails[availability.name];
        })
        const dateJoined = properties.Joined.date?.start || "";
        let socials = [];
        
        const twitterAvatar = properties.Twitter.rich_text[0]?.plain_text;
        const openseaAvatar = properties.OpenSea.rich_text[0]?.plain_text;
        const githubAvatar = properties.GitHub.rich_text[0]?.plain_text;

        const twitterLink = twitterAvatar && `https://twitter.com/${twitterAvatar}` || "";
        const openseaLink = openseaAvatar && `https://opensea.io/${openseaAvatar}` || "";
        const githubLink = githubAvatar && `https://github.com/${githubAvatar}` || "";
        const websiteLink = properties.Website.rich_text[0]?.plain_text || "";

        twitterLink && socials.push(["twitter", twitterLink]);
        openseaLink && socials.push(["opensea", openseaLink]);
        githubLink && socials.push(["github", githubLink]);
        websiteLink && socials.push(["website", websiteLink]);
        
        return {
            member: [userName, avatarUrl],
            location: location,
            skills: skills,
            availability: availability,
            dateJoined: dateJoined,
            socials: socials
            // properties: properties
        };
    });
}

const exampleMember = {
    member: [
        'jamiedubs',
        'https://cdn.discordapp.com/avatars/399553900539150338/6604d8415054cf8fbacc18e8665cdb04.webp'
    ],
    avatar: 'https://cdn.discordapp.com/avatars/399553900539150338/6604d8415054cf8fbacc18e8665cdb04.webp',
    username: 'jamiedubs',
    location: 'New York',
    skills: [
        [ 'Frontend', '💻', '#F7F8F8' ],
        [ 'Backend', '🛠️', '#EFF0F0' ],
        [ 'Solidity', '⛓️', '#E7E9E9' ]
    ],
    availability: [ 'Part Time' ],
    twitter: 'jamiew',
    dateJoined: '2021-08-07',
    socials: [
        [ 'twitter', 'jamiew' ],
        [ 'opensea', 'https://opensea.io/jamiedubs' ],
        [ 'github', 'jamiew' ],
        [ 'website', 'http://jamiedubs.com/' ]
    ]
};