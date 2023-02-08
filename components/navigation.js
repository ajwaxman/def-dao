import React from 'react';

const Navigation = () => {
    return (
        <div className="navigation">
            <a href="/">
                <img className="def-logo" src="/def-logo.svg" alt="Def Logo" />
            </a>
            <ul className="desktop-nav">
                {/* <li><a href="/manifesto">Manifesto</a></li> */}
                <li><a href="/people">People</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="https://twitter.com/defdao">Twitter</a></li>
            </ul>
            <div className="container container-opened visibly-hidden">
                <div className="content">
                    <ul className="mobile-nav-links">
                        <li><a href="/">Home</a></li>
                        {/* <li><a href="/manifesto">Manifesto</a></li> */}
                        <li><a href="/people">People</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="https://twitter.com/defdao">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation