import Navigation from '../components/navigation'
import NavigationAnimation from '../components/navigation-animation'
import { people_table, projects_table } from "../utils/airtable"


export default function People({ projects }) {

    return (
        <div className="wrapper project">
            <Navigation />
            <NavigationAnimation />
            <div className="container container-closed block visible manifesto">
                <div className="content manifesto">
                    <h1>Stuff we're working on.</h1>
                    {/* Our members are building a wide variety of projects: protocols, tooling, OSS, art, on chain NFTs, games, and more. */}
                </div>
                <div className="card-container">
                    {projects.map((project, key) => (
                        <a href={project["Link"]}>
                            <div className="project card">
                                <img className="logo" src={project["Logo"][0]["url"]} alt={project["Name"]}></img>
                                <h1>{project["Name"]}</h1>
                                <p>{project["Description"]}</p>
                                <div className="screenshot-container">
                                    <img className="screenshot" src={project["Screenshot"][0]["url"]} alt={project["Name"]}></img>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                    body { padding: 0px }
                `}} />
        </div>

    )
}

export async function getStaticProps(context) {
    try {
        const projects = await projects_table.select({}).firstPage();

        var project_list = [];
        for (const p of projects) {
            var project = p.fields
            project_list.push(project)
        }

        project_list.sort((a, b) => a["Name"].localeCompare(b["Name"]))

        return {
            props: {
                projects: project_list,
            },
        };
    } catch (error) {
        console.log(error);
        return {
            props: {
                err: "Something went wrong 😕",
            },
        };
    }
}