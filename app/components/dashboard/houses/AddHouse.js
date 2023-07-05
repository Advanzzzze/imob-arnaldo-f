import uploadImage from '@/app/utils/uploadImage'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

function AddHouse({ setOpenModal }) {
    const [isTerrain, setIsTerrain] = useState(false)
    const [images, setImages] = useState([])

    function checkTerrain(value) {
        if (value == 'terrain') setIsTerrain(true)
        else setIsTerrain(false)
    }

    return (
        <div className="flex justify-center items-center absolute inset-0">
            <div
                className="absolute inset-0 bg-black/30"
                onClick={() => setOpenModal(false)}
            ></div>
            <div className="flex flex-col gap-6 bg-white z-50 w-[1200px] h-[600px] rounded-lg p-4 overflow-y-auto relative">
                <button
                    className="absolute top-4 right-4 p-2 font-bold"
                    onClick={() => setOpenModal(false)}
                >
                    X
                </button>
                <h2 className="font-semibold">Preencha os dados do imóvel</h2>
                <form className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col">
                        <label>Nome do Imóvel</label>
                        <input placeholder="Chácara" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label>Cidade</label>
                        <input placeholder="Araraquara - SP" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label>Bairro</label>
                        <input placeholder="Maria Luiza V" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label>Endereço do Imóvel</label>
                        <input
                            placeholder="Rua Arnaldo Ferreira, 123"
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Descrição</label>
                        <input
                            placeholder="02 DORMITÓRIOS, SALA, COZINHA, 01 BANHEIRO SOCIAL, EDÍCULA E 01 BANHEIRO NOS FUNDOS, E GARAGEM PARA 01 CARRO. "
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Tipo</label>
                        <select
                            onChange={(data) => checkTerrain(data.target.value)}
                            name="tipo"
                        >
                            <option value="house">Casa</option>
                            <option value="apartment">Apartamento</option>
                            <option value="terrain">Terreno</option>
                        </select>
                    </div>
                    {!isTerrain && (
                        <>
                            <div className="flex flex-col">
                                <label>Estágio</label>
                                <select name="estagio">
                                    <option value="valor1">Planta</option>
                                    <option value="valor2">Construção</option>
                                    <option value="valor3">Pronto</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label>Quartos</label>
                                <input type="text" />
                            </div>
                            <div className="flex flex-col">
                                <label>Suítes</label>
                                <input type="text" />
                            </div>
                            <div className="flex flex-col">
                                <label>Banheiros</label>
                                <input type="text" />
                            </div>
                            <div className="flex flex-col">
                                <label>Carros</label>
                                <input type="text" />
                            </div>
                        </>
                    )}
                    <div className="flex flex-col">
                        <label>{'Área (m²)'}</label>
                        <input placeholder="28 a 33m²" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label>Imagens do Imóvel</label>
                        <input
                            onChange={(data) =>
                                uploadImage('', data.target.files[0], (body) =>
                                    setImages((images) => [
                                        ...images,
                                        body.image,
                                    ])
                                )
                            }
                            type="file"
                        />
                    </div>
                </form>
                <div className="flex gap-4">
                    {images.map((image, index) => (
                        <div
                            className="relative h-40 aspect-square"
                            key={index}
                        >
                            <Image
                                className="object-contain"
                                fill
                                src={image}
                                alt="image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AddHouse
