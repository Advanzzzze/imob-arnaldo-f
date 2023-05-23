import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function Home() {
    return (
        <main>
            <div className="min-h-screen">
                <Navbar />
                <Hero />
                <Footer />
            </div>
        </main>
    )
}
