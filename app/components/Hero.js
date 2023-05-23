import Image from 'next/image'

function Hero() {
    return (
        <div className="flex flex-col justify-center items-center gap-8">
            <div className="relative overflow-hidden w-full h-[500px]">
                <Image
                    src={'/images/hero-house.jpg'}
                    className="object-cover"
                    alt="House placeholder"
                    fill
                />
            </div>
            <p className="text-2xl">
                Oque <span className="font-semibold">você</span> está buscando?
            </p>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col bg-secondary-color-300/50 border border-secondary-color-200 rounded-lg">
                    <div className="flex justify-center gap-4 border-b">
                        <button className="p-4 border-b-2 border-white">
                            Comprar
                        </button>
                        <button className="p-4 border-b-2 border-white">
                            Alugar
                        </button>
                    </div>
                    <div className="flex flex-col gap-2 p-6">
                        <div className="flex gap-4">
                            <input
                                className="p-2 rounded-lg w-[500px] text-black"
                                placeholder="Busque pela região ou empreendimento"
                            />
                            <button className="px-4 rounded-lg border border-ascent-color-300 bg-ascent-color-300/20 active:bg-ascent-color-300/40">
                                Buscar
                            </button>
                            <button className="px-2">Filtros</button>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex justify-center items-center gap-2">
                                <input
                                    id="plantaCheckbox"
                                    type="checkbox"
                                    className="rounded-md checked:bg-ascent-color-300 focus:ring-0 focus:ring-offset-0 text-ascent-color-300"
                                />
                                <label htmlFor="plantaCheckbox">
                                    Comprar na Planta
                                </label>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <input
                                    id="prontoCheckbox"
                                    type="checkbox"
                                    className="rounded-md checked:bg-ascent-color-300 focus:ring-0 focus:ring-offset-0 text-ascent-color-300"
                                />
                                <label htmlFor="prontoCheckbox">
                                    Comprar Pronto
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
