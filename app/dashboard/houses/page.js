'use client'

import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import AddHouse from '@/app/components/dashboard/houses/AddHouse'
import axios from 'axios'
import { houses } from '@/app/utils/consts'

function Page() {
    const [openModal, setOpenModal] = useState(false)
    // const [houses, setHouses] = useState([])

    // useEffect(() => {
    //     axios.get('/api/houses').then((res) => {
    //         setHouses(res.data.response)
    //         console.log(res.data.response)
    //     })
    // }, [])

    return (
        <div className="flex justify-center flex-col items-center h-[70vh] gap-5 text-black">
            {openModal && <AddHouse setOpenModal={setOpenModal} />}
            <div className="flex justify-center items-center">
                <h1 className="font-bold text-4xl text-white">Casas</h1>
            </div>
            <div className="bg-white w-[800px] p-4 rounded-lg overflow-y-auto">
                <h2
                    className="text-black mb-4
                "
                >
                    Filtros
                </h2>
                <form className="flex gap-8 mb-5">
                    <div className="flex flex-col w-24">
                        <label>Id</label>
                        <input type="number" name="id" placeholder="ID"></input>
                    </div>

                    <div className="flex flex-col w-52">
                        <label>Casa</label>
                        <input
                            type="text"
                            name="casa"
                            placeholder="Digite a casa"
                        ></input>
                    </div>

                    <div className="flex flex-col w-52">
                        <label>Cidade</label>
                        <input
                            type="text"
                            name="cidade"
                            placeholder="Digite a cidade"
                        ></input>
                    </div>
                </form>
                <div className="flex gap-4">
                    <Button variant={'a'} onClick={''}>
                        Pesquisar
                    </Button>
                    <Button
                        className={'bg-primary-color-300 rounded-lg'}
                        variant={'a-text'}
                        onClick={''}
                    >
                        Limpar
                    </Button>
                </div>
                <div>
                    {houses.map((house) => (
                        <div key={house.id}>
                            <p>{house.name}</p>
                            <p>{house.data.address}</p>
                            <p>{house.data.city}</p>
                            <div className="h-24 flex">
                                {house.data.images.map((image, index) => (
                                    <img
                                        key={`${house.name}-${index}`}
                                        src={image}
                                        alt={house.name}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Button
                className={'absolute bottom-0 right-0 m-4 text-4xl font-bold'}
                onClick={() => setOpenModal(true)}
            >
                +
            </Button>
        </div>
    )
}

export default Page
