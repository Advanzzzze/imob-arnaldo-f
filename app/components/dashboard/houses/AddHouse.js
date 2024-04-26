import React, { useState } from 'react'
import Button from '../../Button'
import axios from 'axios'
import uploadImage from '@/app/utils/uploadImage'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { getAllHouses } from '@/api' // Importando a função getAllHouses

const AddHouse = ({ setOpenModal }) => {
    const { register, handleSubmit, setValue, watch } = useForm()
    const [isTerrain, setIsTerrain] = useState(false)

    const onSubmit = async (data) => {
        try {
            await axios.post('/save-houses', {
                data,
            })
            const houses = await getAllHouses()
            console.log('Casas:', houses)
            console.log('Dados do formulário:', data)
        } catch (error) {
            console.error('Erro ao enviar os dados:', error.message)
        }
    }

    const handleImageUpload = async (e) => {
        const file = e.target.files[0]
        try {
            const response = await uploadImage('', file)
            setValue('images', [...watch('images'), response.image])
        } catch (error) {
            console.error('Erro ao enviar a imagem:', error)
        }
    }

    const checkTerrain = (value) => {
        setIsTerrain(value === 'terrain')
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
                <form
                    enctype="multipart/form-data"
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-3 gap-4"
                >
                    <div className="flex flex-col">
                        <label>Nome do Imóvel</label>
                        <input
                            placeholder="Chácara"
                            type="text"
                            {...register('name')}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Cidade</label>
                        <input
                            placeholder="Araraquara - SP"
                            type="text"
                            {...register('city')}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Bairro</label>
                        <input
                            placeholder="Maria Luiza V"
                            type="text"
                            {...register('neighborhood')}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Endereço do Imóvel</label>
                        <input
                            placeholder="Rua Arnaldo Ferreira, 123"
                            type="text"
                            {...register('address')}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Descrição</label>
                        <input
                            placeholder="02 DORMITÓRIOS, SALA, COZINHA, 01 BANHEIRO SOCIAL, EDÍCULA E 01 BANHEIRO NOS FUNDOS, E GARAGEM PARA 01 CARRO. "
                            type="text"
                            {...register('description')}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Tipo</label>
                        <select
                            {...register('type')}
                            onChange={(e) => {
                                checkTerrain(e.target.value)
                                setValue('type', e.target.value)
                            }}
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
                                <select
                                    {...register('stage')}
                                    onChange={(e) =>
                                        setValue('stage', e.target.value)
                                    }
                                >
                                    <option value="valor1">Planta</option>
                                    <option value="valor2">Construção</option>
                                    <option value="valor3">Pronto</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label>Quartos</label>
                                <input type="text" {...register('bedroom')} />
                            </div>
                            <div className="flex flex-col">
                                <label>Suítes</label>
                                <input type="text" {...register('suites')} />
                            </div>
                            <div className="flex flex-col">
                                <label>Banheiros</label>
                                <input type="text" {...register('bathroom')} />
                            </div>
                            <div className="flex flex-col">
                                <label>Carros</label>
                                <input type="text" {...register('cars')} />
                            </div>
                        </>
                    )}
                    <div className="flex flex-col">
                        <label>{'Área (m²)'}</label>
                        <input
                            placeholder="28 a 33m²"
                            type="text"
                            {...register('area')}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Imagens do Imóvel</label>
                        <input
                            type="file"
                            multiple="multiple"
                            accept="image/*"
                            onChange={handleImageUpload}
                            {...register('image')}
                        />
                    </div>
                    <Button type="submit" onClick={handleSubmit(onSubmit)}>
                        Adicionar
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default AddHouse
