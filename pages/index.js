import Navigation from '../components/navigation'
import NavigationAnimation from '../components/navigation-animation'
import MetaTags from '../components/metatags'

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
                </div>
            </div>
        </div>
    )
}


export default HomePage