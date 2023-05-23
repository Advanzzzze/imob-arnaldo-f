import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Section from './components/Section'
import About from './components/About'

export default function Home() {
    return (
        <main>
            <div>
                <Navbar />
                <Hero />
                <Section />
                <About />
            </div>
        </main>
    )
}
