const { Client } = require("@notionhq/client")
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

    return results.map(({properties, icon}) => {
        const userName = properties['Discord Username'].title[0]?.plain_text || ""
        const avatarUrl = icon?.external.url || "";
        const location = properties.Location.multi_select[0]?.name || "";
        const skills = properties.Skills.multi_select.map(skill => {
            if (userName === "shahruz") {
                console.log(skill);
            }
            return skillDetails[skill.name] || "";
        } );
        const availability = properties.Availability.multi_select.map(openType => {
            return openType.name;
        });
        const dateJoined = properties.Joined.date?.start || "";
        let socials = [];
        // properties.Wallet
        const twitter = properties.Twitter.rich_text[0]?.plain_text || "";
        const opensea = properties.OpenSea.rich_text[0]?.plain_text || "";
        const github = properties.GitHub.rich_text[0]?.plain_text || "";
        const website = properties.Website.rich_text[0]?.plain_text || "";

        twitter && socials.push(["twitter", twitter]);
        opensea && socials.push(["opensea", opensea]);
        github && socials.push(["github", github]);
        website && socials.push(["website", website]);
        
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