import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Section from './components/Section'

export default function Home() {
    return (
        <main>
            <div>
                <Navbar />
                <Hero />
                <Section />
            </div>
        </main>
    )
}
