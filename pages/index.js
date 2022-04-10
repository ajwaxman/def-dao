import Navigation from '../pages/navigation'

function HomePage() {
    return (
        <div className="wrapper">
            <a href="/">
                <img className="logo" src="/def-logo.svg" alt="Def Logo" />
            </a>
            <ul className="desktop-nav">
                <li><a href="/manifesto">Manifesto</a></li>
                <li><a href="#">People</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
            <Navigation />
            <div className="container container-closed visible">
                <div className="content">
                    <h1>Definitely Crypto</h1>
                    <p>Tinkering on the edge of the internet.</p>
                </div>
            </div>
            <div className="container container-opened visibly-hidden">
                <div className="content">
                    <ul className="mobile-nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/manifesto">Manifesto</a></li>
                        <li><a href="#">People</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default HomePage