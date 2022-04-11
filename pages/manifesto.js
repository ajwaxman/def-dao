import Navigation from '../pages/navigation'

function Manifesto() {
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
            <div className="container container-closed visible manifesto">
                <div className="content manifesto">
                    <h1>Makers Gonna Make.</h1>

                    <p>Web3 is creating the opportunity of a lifetime.</p>

                    <p>Yes, there is a lot of speculative flipping and ponzinomics.</p>
                    
                    <p>But beneath the surface are incredible new technologies that can help us make the world a better place.</p>
                    
                    <div className="divider">✹ &nbsp; &nbsp; ✹ &nbsp; &nbsp; ✹</div>

                    <p>A world where you are rewarded for the value you create.</p>

                    <p>A world where you use products because you love them, not because it's hard for you to switch.</p>

                    <p>A world where you come to work inspired and energized.</p>

                    <p>A world where we come together to solve the biggest challenges of our lifetime.</p>

                    <div className="divider">✹ &nbsp; &nbsp; ✹ &nbsp; &nbsp; ✹</div>                    
                    
                    <p>We believe intrinsically motivated builders will have an outsized role in harnessing web3 technologies.</p>

                    <p>We also believe that these builders will do their best work when they're having fun and working alongside folks that inspire them and that they can learn from.</p>
                        
                    <p>So that's why we're here. To help each other build great products that make a difference.</p>

                    <p>And have a whole lot of fun while doing so.</p>
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

export default Manifesto