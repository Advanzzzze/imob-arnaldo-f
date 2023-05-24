import Image from 'next/image'
import SearchBar from './hero/SearchBar'

function Hero() {
    return (
        <div className="flex flex-col justify-center items-center gap-8 pb-16">
            <div className="relative overflow-hidden w-full h-[500px]">
                <Image
                    src={'/images/hero-house.jpg'}
                    className="object-cover"
                    alt="House placeholder"
                    fill
                />
            </div>
            <p className="text-4xl">
                Oque <span className="font-semibold">você</span> está buscando?
            </p>
            <SearchBar />
        </div>
    )
}

export default Hero
