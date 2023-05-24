import About from './components/About'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HouseCard from './components/houses/HouseCard'
import Houses from './components/Houses'
import Navbar from './components/Navbar'
import Section from './components/Section'

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
