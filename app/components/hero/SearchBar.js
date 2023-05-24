import { GiMagnifyingGlass } from 'react-icons/gi'

function SearchBar() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col bg-secondary-color-300/30 border border-secondary-color-200 rounded-lg">
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
                        <div className="relative flex items-center bg-white rounded-lg overflow-hidden">
                            <input
                                className="p-2 relative right-0 placeholder:translate-x-8 
                                placeholder:transition focus:placeholder:translate-x-0 peer w-[40vw] text-black transition"
                                placeholder="Busque pela região ou empreendimento"
                            />
                            <GiMagnifyingGlass
                                className="absolute left-2 peer-focus:-translate-x-[150%] text-black transition"
                                size={20}
                            />
                        </div>
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
    )
}

export default SearchBar
