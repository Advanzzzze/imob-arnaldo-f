'use client'

import UseWindowSize from '@/app/hooks/UseWindowSize'
import { useRef, useState } from 'react'
import { GiMagnifyingGlass } from 'react-icons/gi'
import Button from '../Button'

function SearchBar() {
    const [isBuy, setIsBuy] = useState(true)
    const [isInputEmpty, setIsInputEmpty] = useState(true)

    const searchInput = useRef()

    const size = UseWindowSize()

    function handleInput(value) {
        const input = value

        if (input == '') setIsInputEmpty(true)
        else setIsInputEmpty(false)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col bg-secondary-color-300/30 border border-secondary-color-200 rounded-lg">
                <div className="flex justify-center gap-4 border-b">
                    <button
                        onClick={() => {
                            setIsBuy(true)
                        }}
                        className={`p-4 border-white ${
                            isBuy ? 'border-b-2' : 'border-b-0 hover:border-b'
                        }`}
                    >
                        Comprar
                    </button>
                    <button
                        onClick={() => {
                            setIsBuy(false)
                        }}
                        className={`p-4 border-white ${
                            !isBuy ? 'border-b-2' : 'border-b-0 hover:border-b'
                        }`}
                    >
                        Alugar
                    </button>
                </div>
                <div className="flex flex-col gap-2 p-6">
                    <div className="flex gap-4">
                        <div className="relative flex items-center bg-white rounded-lg overflow-hidden">
                            <input
                                ref={searchInput}
                                className="p-2 relative right-0 placeholder:translate-x-8 
                                placeholder:transition focus:placeholder:translate-x-0 focus:outline-none peer w-[35vw] text-black transition"
                                onChange={() => {
                                    handleInput(searchInput.current.value)
                                }}
                                placeholder={
                                    size.width > 600
                                        ? 'Busque pela região ou empreendimento'
                                        : 'Buscar'
                                }
                            />
                            <GiMagnifyingGlass
                                className={`absolute left-2 ${
                                    isInputEmpty
                                        ? 'peer-focus:-translate-x-[150%]'
                                        : '-translate-x-[150%]'
                                } text-black transition`}
                                size={20}
                            />
                        </div>
                        <Button variant={'outline'}>Buscar</Button>
                        <Button variant={'text-invert'}>Filtros</Button>
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
