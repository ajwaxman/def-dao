import Navigation from '../components/navigation'
import NavigationAnimation from '../components/navigation-animation'
import MetaTags from '../components/metatags'

function About() {
    return (
        <div className="wrapper manifesto">
            <MetaTags />
            <Navigation />
            <NavigationAnimation />
            <div className="container container-closed visible manifesto">
                <div className="content manifesto about">
                    <h1>About us</h1>

                    <p>We're a community of curious, optimistic, and motivated builders excited by the posibilities of new technologies.</p>

                    <div className="divider">✹ &nbsp; &nbsp; ✹ &nbsp; &nbsp; ✹</div>

                    <p>We're now over 400 strong, connecting and learning on a regular basis via Discord, IRL events, and our beloved biweekly demos.</p>

                    <div className="divider">✹ &nbsp; &nbsp; ✹ &nbsp; &nbsp; ✹</div>

                    <p>If you'd like an invite and don't know an existing member, feel free to reach out via <a href="https://twitter.com/defdao">Twitter</a>.</p>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                    body { padding: 0px }
                `}} />
        </div>
    )
}

export default About