import Navigation from '../components/navigation'
import NavigationAnimation from '../components/navigation-animation'
import { people_table } from "../utils/airtable"
import MetaTags from '../components/metatags'
import { getAllPeople } from '../utils/notion'


export default function PeopleReactTable({ people }) {
    console.log(people[0].properties.Avatar.url);

    return (
        <div className="wrapper people">
            <MetaTags />
            <Navigation />
            <NavigationAnimation />
            <div className="container container-closed block visible manifesto">
                <div className="content manifesto">
                    <h1>Who we are</h1>
                </div>
                <div>
                    <ul className="people table">
                            {people.map((person, key) => (
                                <a key={key} href={""}>
                                    <li>
                                        {/* { console.log(person.properties.Avatar.url)} */}
                                        { person.properties.Avatar.url ? console.log() : console.log(person.properties['Discord Username'].title[0].plain_text)}
                                        { person.properties.Avatar.url && (
                                            <img 
                                                src={person.properties.Avatar.url} 
                                                onError={({ currentTarget }) => {
                                                    currentTarget.onerror = null; // prevents looping
                                                    currentTarget.src="def-logo.png";
                                                }}
                                            />
                                        )}
                                        { !person.properties.Avatar.url && (
                                            <div>{console.log('what')} What</div>
                                        )}
                                        <span>{person.properties['Discord Username'].title[0].plain_text}</span>
                                    </li>
                                </a>                            
                            ))};
                        </ul>
                    </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                    body { padding: 0px }
                `}} />
        </div>

    )
}

export async function getStaticProps() {
    const data = await getAllPeople()

    return {
        props: {
            people: data,
        },
        revalidate: 60
    };
}