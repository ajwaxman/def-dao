import Navigation from '../components/navigation'
import NavigationAnimation from '../components/navigation-animation'

function Projects() {
    return (
        <div className="wrapper projects">
            <Navigation />
            <NavigationAnimation />
            <div className="container container-closed container-closed block visible manifesto">
                <div className="content manifesto">
                    <h1>Stuff we're working on.</h1>
                    Our members are building a wide variety of projects: protocols, tooling, OSS, art, on chain NFTs, games, and more.
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                    body { padding: 0px }
                `}} />
        </div>
        
    )
}

export default Projects