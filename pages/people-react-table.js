import { useMemo } from 'react'
import Navigation from '../components/navigation'
import NavigationAnimation from '../components/navigation-animation'
import MetaTags from '../components/metatags'
import { getAllPeople } from '../utils/notion'
import Table from '../components/table'
import styled from 'styled-components'


export default function PeopleReactTable({ people, columnData, exampleData }) {
    // console.log(people[0].properties.Avatar.url);

    const columns = useMemo(
        () => [
            {
                Header: "Member",
                accessor: "member",
                Cell: (props) => {
                    console.log(props.value)
                    const username = props.value[0];
                    const avatar_url = props.value[1];
                    return(
                        <Member username={username} avatar_url={avatar_url}/>
                    )
                }
            },
            {
                Header: "Location",
                accessor: "location"
            },
            {
                Header: "Skills",
                accessor: "skills",
                Cell: (props) => {
                    const skills = props.value;
                    return(
                        skills.map(skillData => {
                            const [skill, emoji, color] = skillData;
                            return (
                                <span key={skill} style={{background: color, padding: "4px"}}>
                                    <span alt={skill}>{emoji}</span>
                                </span>
                            )
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
        ],
        []
    );

    return (
        <Wrapper className="wrapper people-table">
            <MetaTags />
            <Navigation />
            <NavigationAnimation />
            <Container className="container-closed block visible">
                <div className="content">
                    <Header>Who we are</Header>
                </div>
                <TableContainer>
                    <Table columns={columns} data={exampleData}/>
                </TableContainer>
            </Container>
            <style dangerouslySetInnerHTML={{
                __html: `
                    body { padding: 0px }
                `}} />
        </Wrapper>

    )
}

function Member({username, avatar_url}) {
    return(
        <MemberWrapper>
            <Avatar src={avatar_url}></Avatar>
            <span>{username}</span>
        </MemberWrapper>
    )
}

export async function getStaticProps() {
    const data = await getAllPeople()


    const exampleData = [
        {
            "member": [
                "jamiedubs",
                "https://cdn.discordapp.com/avatars/399553900539150338/6604d8415054cf8fbacc18e8665cdb04.webp"
            ],
            "avatar": "https://cdn.discordapp.com/avatars/399553900539150338/6604d8415054cf8fbacc18e8665cdb04.webp",
            "username": "jamiedubs",
            "location": "New York",
            "skills": [
                ["frontend", "💻", "#F7F8F8"],
                ["backend", "🛠️", "#EFF0F0"],
                ["solidity", "⛓️", "#E7E9E9"],
            ],
            "availability": ["part time"],
            "twitter": "jamiew"
        },
        {
            "member": [
                "yoshi",
                "https://cdn.discordapp.com/avatars/395737520005971969/3a09b2a68f30ca0ec30d8fac09ab6f03.webp"
            ],
            "avatar": "https://cdn.discordapp.com/avatars/395737520005971969/3a09b2a68f30ca0ec30d8fac09ab6f03.webp",
            "username": "yoshi",
            "location": "Cleveland",
            "skills": [
                ["frontend", "💻", "#F7F8F8"],
            ],
            "availability": [],
            "twitter": "0xyoshixyz"
        },
        {
            "member": [
                "saadiq",
                "https://cdn.discordapp.com/avatars/597994658081013770/0aca8325822d0df575d908b23633aa8f.webp"
            ],
            "avatar":"https://cdn.discordapp.com/avatars/597994658081013770/0aca8325822d0df575d908b23633aa8f.webp",
            "username": "saadiq",
            "location": "Los Angeles",
            "skills": [
                ["frontend", "💻", "#F7F8F8"],
            ],
            "availability": [],
            "twitter": "saadiq"
        }

    ]

    return {
        props: {
            people: data,
            exampleData: exampleData
        },
        revalidate: 60
    };
}

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
`

const TableContainer = styled.div`
    overflow-x: auto;
`

const Header = styled.h1`
    text-align: center;
    font-size: 3rem;
`

const Wrapper = styled.div`
    display: block;
`

const Avatar = styled.img`
    width: 36px;
    border-radius: 100px;
    margin-left: 24px;
    display: flex;
`

const MemberWrapper = styled.div`
  min-width: 200px;
  display: flex;
  align-items: center;
  font-weight: 700;
  td img {
    width: 36px;
    border-radius: 100px;
    margin-left: 24px;
  }
  span {
    margin-left: 16px;
  }
`