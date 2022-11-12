import Navigation from '../components/navigation'
import NavigationAnimation from '../components/navigation-animation'
import MetaTags from '../components/metatags'
import Image from 'next/image'
import { people_table, projects_table } from "../utils/airtable"


export default function People({ projects }) {

    function getLargeImage(project) {
        if (project['GIF']) {
            return `/images/${project["id"]}-large.gif`
        } else {
            return `/images/${project["id"]}-large.jpg`
        }
    }

    return (
        <div className="wrapper project">
            <MetaTags />
            <Navigation />
            <NavigationAnimation />
            <div className="container container-closed block visible manifesto">
                <div className="content projects manifesto">
                    <h1>Projects from DEF members</h1>
                    <p className='description'>We're a collective of independent creators focused on building and learning from each other. Mostly via Discord, IRL events, and biweekly demos.</p>
                </div>
                <div className="card-container">
                    {projects.map((project, key) => (
                        <a key={project['id']} href={project["Link"]}>
                            <div className="project card">
                                <img className="logo" src={`/images/${project["id"]}.jpg`}></img>
                                <h1>{project["Name"]}</h1>
                                <p>{project["Description"]}</p>
                                <div className="screenshot-container">
                                    <img className="screenshot" src={getLargeImage(project)} alt={project["Name"]}></img>
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