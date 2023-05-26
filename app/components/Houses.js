import HouseCard from './houses/HouseCard'

function Houses() {
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
        <div className="flex flex-col justify-center items-center py-16 gap-12 relative">
            <div className="h-[120%] w-[200%] -z-10 bg-primary-color-200/40 absolute rotate-6"></div>
            <h2 className="text-2xl font-bold">IMÓVEIS EXCLUSIVOS</h2>
            <div className="flex overflow-x-auto sm:grid sm:grid-cols-3 gap-4">
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
    )
}

export default Houses
