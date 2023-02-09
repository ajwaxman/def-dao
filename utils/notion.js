const { Client } = require("@notionhq/client")

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export const getAllPeople = async () => {
    const people = await notion.databases.query({
        database_id: process.env.DATABASE_ID,
        sorts: [
            {
                property: "Joined",
                direction: "ascending"
            }
        ]
    })

    const allPeople = people.results;

    return allPeople.map((person) => {
        return person;
    });
}