import { useMemo } from 'react'
import Navigation from '../components/navigation'
import NavigationAnimation from '../components/navigation-animation'
import MetaTags from '../components/metatags'
import { getAllPeople } from '../utils/notion'
import Table from '../components/table'



export default function PeopleReactTable({ people, columnData, exampleData }) {
    console.log(people[0].properties.Avatar.url);

    const columns = useMemo(
        () => [
            {
                Header: "Member",
                accessor: "username"
            },
            {
                Header: "Location",
                accessor: "location"
            },
            {
                Header: "Skills",
                accessor: "skills",
            },
            {
                Header: "Availability",
                accessor: "availability"
            },
            {
                Header: "Twitter",
                accessor: "twitter"
            }
        ],
        []
    );

    return (
        <div className="wrapper people table">
            <MetaTags />
            <Navigation />
            <NavigationAnimation />
            <div className="container container-closed block visible manifesto">
                <div className="content manifesto">
                    <h1>Who we are</h1>
                </div>
                <Table columns={columns} data={exampleData}/>
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


    const exampleData = [
        {
            "username": "jamiedubs",
            "location": "New York",
            // "skills": [
            //     ["frontend", "💻", "#F7F8F8"],
            //     ["backend", "🛠️", "#EFF0F0"],
            //     ["solidity", "⛓️", "#E7E9E9"],
            // ],
            "skills": "test",
            "availability": "part time",
            "twitter": "jamiew"
        },
        {
            "username": "yoshi",
            "location": "New York",
            // "skills": [
            //     // ["frontend", "💻", "#F7F8F8"],
            // ],
            "skills": "test",
            "availability": "test",
            "twitter": "0xyoshixyz"
        },

    ]

    let columnData = [
        {
            Header: "Member",
            accessor: "username"
        },
        {
            Header: "Location",
            accessor: "location"
        },
        {
            Header: "Skills",
            accessor: "skills",
            Cell: (props) => {
                console.log(props.value);
                const skills = props.value;
                return(
                    skills.map(skillData => {
                        const [skill, emoji, color] = skillData;
                        return <span alt={skill}>{emoji}</span>
                    })
                )
            }
        },
        {
            Header: "Availability",
            accessor: "availability"
        },
        {
            Header: "Twitter",
            accessor: "twitter"
        }
    ];

    columnData = JSON.parse(JSON.stringify(columnData));
    console.log(columnData)

    return {
        props: {
            people: data,
            columnData: columnData,
            exampleData: exampleData
        },
        revalidate: 60
    };
}