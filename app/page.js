import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HouseCard from './components/HouseCard'
import Navbar from './components/Navbar'
import Section from './components/Section'

export default function Home() {
    const houses = [
        {
            image: '/images/imovel-de-luxo.jpg',
            isHouse: true,
            location: 'Florea Bosque Da Saúde',
            address: 'Rua Marcos Fernandes, 156',
            city: 'Saúde, São Paulo',
            description:
                'More em um projeto de torres independentes criadas a partir de um Design Biofílico que chegou para cria...',
            size: '20m',
            status: 'Pronto',
        },
        {
            image: '/images/imovel-de-luxo.jpg',
            isHouse: true,
            location: 'Florea Bosque Da Saúde',
            address: 'Rua Marcos Fernandes, 156',
            city: 'Saúde, São Paulo',
            description:
                'More em um projeto de torres independentes criadas a partir de um Design Biofílico que chegou para cria...',
            size: '20m',
            status: 'Pronto',
        },
        {
            image: '/images/imovel-de-luxo.jpg',
            isHouse: true,
            location: 'Florea Bosque Da Saúde',
            address: 'Rua Marcos Fernandes, 156',
            city: 'Saúde, São Paulo',
            description:
                'More em um projeto de torres independentes criadas a partir de um Design Biofílico que chegou para cria...',
            size: '20m',
            status: 'Pronto',
        },
        {
            image: '/images/imovel-de-luxo.jpg',
            isHouse: true,
            location: 'Florea Bosque Da Saúde',
            address: 'Rua Marcos Fernandes, 156',
            city: 'Saúde, São Paulo',
            description:
                'More em um projeto de torres independentes criadas a partir de um Design Biofílico que chegou para cria...',
            size: '20m',
            status: 'Pronto',
        },
        {
            image: '/images/imovel-de-luxo.jpg',
            isHouse: true,
            location: 'Florea Bosque Da Saúde',
            address: 'Rua Marcos Fernandes, 156',
            city: 'Saúde, São Paulo',
            description:
                'More em um projeto de torres independentes criadas a partir de um Design Biofílico que chegou para cria...',
            size: '20m',
            status: 'Pronto',
        },
        {
            image: '/images/imovel-de-luxo.jpg',
            isHouse: true,
            location: 'Florea Bosque Da Saúde',
            address: 'Rua Marcos Fernandes, 156',
            city: 'Saúde, São Paulo',
            description:
                'More em um projeto de torres independentes criadas a partir de um Design Biofílico que chegou para cria...',
            size: '20m',
            status: 'Pronto',
        },
    ]

    return (
        <main>
            <div className="min-h-screen">
                <Hero />
                <Section />
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-3 gap-4">
                        {houses.map((data, index) => {
                            return (
                                <HouseCard
                                    key={index}
                                    image={data.image}
                                    isHouse={data.isHouse}
                                    location={data.location}
                                    address={data.address}
                                    city={data.city}
                                    description={data.description}
                                    size={data.size}
                                    status={data.status}
                                />
                            )
                        })}
                    </div>
                </div>
                <About />
            </div>
        </main>
    )
}
