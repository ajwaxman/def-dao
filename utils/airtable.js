// Taken from this tutorial https://www.section.io/engineering-education/integrate-airtable-with-nextjs/

const Airtable = require("airtable");

// Authenticate
Airtable.configure({
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
});

// Initialize a base
const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

// Reference a table
const people_table = base("people");
const projects_table = base("projects");


export { people_table, projects_table };