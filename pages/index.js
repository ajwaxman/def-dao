import Navigation from '../components/navigation'
import NavigationAnimation from '../components/navigation-animation'
import MetaTags from '../components/metatags'
import { Twitter } from 'react-feather';


function HomePage() {
    return (
        <div className="wrapper index">
            <MetaTags />
            <Navigation />
            <NavigationAnimation />
            <div className="container container-closed container-closed flex visible">
                <div className="content">
                    <h1>Definitely Demo'ing</h1>
                    <p>Tinkering on the edge of the internet.</p>
                    <a href="https://twitter.com/defdao" style={twitter}>
                        <span style={{'margin': '0 auto'}}>
                            <Twitter size={24} strokeWidth={1} fill={'#ffffff'} style={{'margin-right': '10px', 'float':'left' }} />
                            Follow us on Twitter
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

const twitter = {
    margin: '0 auto',
    display: 'flex',
    'cursor': 'pointer',
    background: '#1DA1F2',
    border: 'none',
    padding: '14px 20px',
    'border-radius': '4px',
    color: 'white',
    'font-family': 'Inter',
    'font-weight': '600',
    'margin-top': '28px',
    'width': '85%',
    'text-align': 'center',
    'max-width': '240px',
    // Adding media query..
    '@media (max-width: 500px)': {
        
    },
}

export default HomePage