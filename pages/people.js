import Navigation from '../components/navigation'
import NavigationAnimation from '../components/navigation-animation'
import { people_table } from "../utils/airtable"


export default function People({ people }) {

    return (
        <div className="wrapper people">
            <Navigation />
            <NavigationAnimation />
            <div className="container container-closed block visible manifesto">
                <div className="content manifesto">
                    <h1>Who we are</h1>
                </div>
                <div>
                    <ul className="people">
                        {people.map((twitter, key) => (
                            <li key={key}><a href={"https://twitter.com/"+twitter}>{twitter}</a></li>
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

export async function getServerSideProps(context) {
    try {
        const items = await people_table.select({}).firstPage();

        var people = items.filter(x => !!x.fields.twitter); // Filter out names that don't have a twitter

        var twitter_list = [];
        for (const p of people) {
            var twitter = p.fields.twitter

            // Remove leading "@" for twitter handles
            if (twitter.indexOf("@") > -1) {
                twitter_list.push(p.fields.twitter.slice(1));
            } else {
                twitter_list.push(p.fields.twitter);
            }
        }

        // Sort array alphabetically, from https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
        twitter_list.sort((a, b) => a.localeCompare(b))

        return {
            props: {
                people: twitter_list,
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