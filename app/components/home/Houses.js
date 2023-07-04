import { BsArrowRightShort } from 'react-icons/bs'
import HouseCard from './houses/HouseCard'
import Button from '../Button'
import { houses } from '@/app/utils/consts'

function Houses() {
    return (
        <div className="flex flex-col justify-center items-center py-16 relative">
            <div className="h-[120%] w-[200%] -z-10 bg-primary-color-200/40 absolute rotate-6"></div>
            <h2 className="text-2xl font-bold">IMÓVEIS EXCLUSIVOS</h2>
            <div className="flex overflow-y-visible overflow-x-auto snap-x snap-mandatory py-12 px-4 max-sm:w-screen sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {houses.slice(0, 6).map((house) => {
                    return (
                        <HouseCard
                            key={house.id}
                            id={house.id}
                            isHouse={house.data.isHouse}
                            city={house.data.city}
                            address={house.data.address}
                            location={house.data.location}
                            description={house.data.description}
                            size={house.data.info.size}
                            status={house.data.info.status}
                            image={house.data.images[0]}
                        />
                    )
                })}
            </div>
            <Button variant={'a-text'} onClick={'/agendar'}>
                <div className="flex justify-center items-center gap-2">
                    <p>Ver mais</p>
                    <BsArrowRightShort size={20} />
                </div>
            </Button>
        </div>
    )
}

export default Houses
