function HomePage() {
    return(
        <div className="wrapper">
            <img src="/def-logo.svg" alt="Def Logo" />
            <ul className="desktop-nav">
                <li><a href="#">Manifesto</a></li>
                <li><a href="#">People</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
            <div className="container">
                <div className="content">
                    <h1>Definitely Crypto</h1>
                    <p>Tinkering on the edge of the internet.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage