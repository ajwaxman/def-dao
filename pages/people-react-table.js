import { useMemo } from 'react'
import styled from 'styled-components'
import { getAllPeople } from '../utils/notion'
import { memberSort } from '../utils/utils'
import exampleData from '../utils/data/example-data'
import Navigation from '../components/navigation'
import NavigationAnimation from '../components/navigation-animation'
import RadixTooltip from '../components/tooltip'
import Member from '../components/member'
import MetaTags from '../components/metatags'
import Table from '../components/table'


export default function PeopleReactTable({ people, columnData, exampleData }) {

    const columns = useMemo(
        () => [
            {
                Header: "",
                id: 'index',
                accessor: '1',
                indexed: true,
                disableSortBy: true,
                Cell: (props) => {
                    return <RowNumber>{props.value}</RowNumber>;
                }
            },
            {
                Header: "Member",
                accessor: "member",
                sortType: memberSort,
                Cell: (props) => {
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
                                <RadixTooltip text={skill}>
                                    <span key={skill} style={{background: color, padding: "4px"}}>
                                        <span alt={skill}>{emoji}</span>
                                    </span>
                                </RadixTooltip>
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

export async function getStaticProps() {
    const data = await getAllPeople()

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