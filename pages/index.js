import Navigation from '../pages/navigation'

function HomePage() {
    return(
        <div className="wrapper">
            <img className="logo" src="/def-logo.svg" alt="Def Logo" />
            <ul className="desktop-nav">
                <li><a href="#">Manifesto</a></li>
                <li><a href="#">People</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
            <Navigation />
            <div className="container container-closed">
                <div className="content">
                    <h1>Definitely Crypto</h1>
                    <p>Tinkering on the edge of the internet.</p>
                </div>
            </div>
            <div className="container container-opened">
                <div className="content">
                    <ul className="mobile-nav-links">
                        <li><a href="#">Manifesto</a></li>
                        <li><a href="#">People</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomePage