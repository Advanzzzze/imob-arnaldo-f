import Image from 'next/image'

function PeopleCard({ name, image }) {
    return (
        <div className="bg-white w-72 flex flex-col items-center rounded-lg py-8">
            <Image src={image} width={228} height={228} alt="teste" />
            <h4 className="text-primary-color-300 font-bold text-xl p-2">
                {name}
            </h4>
            <p className="text-secondary-color-200">Corretor de vendas</p>
        </div>
    )
}

export default PeopleCard
