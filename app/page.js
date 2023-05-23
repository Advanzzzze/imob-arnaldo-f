import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Section from './components/Section'

export default function Home() {
    return (
        <main>
            <div className="min-h-screen">
                <Hero />
                <Section />
                <About />
            </div>
        </main>
    )
}
