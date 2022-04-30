import Navigation from '../components/navigation'
import NavigationAnimation from '../components/navigation-animation'

function People() {
    return (
        <div className="wrapper people">
            <Navigation />
            <NavigationAnimation />
            <div className="container container-closed block visible manifesto">
                <div className="content manifesto">
                    <h1>Who we are</h1>
                    TBD
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                    body { padding: 0px }
                `}} />
        </div>

    )
}

export default People