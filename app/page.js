import About from './components/home/About'
import Feedback from './components/home/Feedback'
import Hero from './components/home/Hero'
import Houses from './components/home/Houses'
import Section from './components/home/Section'

export default function Home() {
    return (
        <main>
            <div className="min-h-screen">
                <Hero />
                <Section />
                <Houses />
                <About />
                <Feedback />
            </div>
        </main>
    )
}
