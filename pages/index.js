import Navigation from '../components/navigation'
import NavigationAnimation from '../components/navigation-animation'

function HomePage() {
    return (
        <div className="wrapper">
            <Navigation />
            <NavigationAnimation />
            <div className="container container-closed container-closed flex visible">
                <div className="content">
                    <h1>Definitely Crypto</h1>
                    <p>Tinkering on the edge of the internet.</p>
                </div>
            </div>
        </div>
    )
}


export default HomePage