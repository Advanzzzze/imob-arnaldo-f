'use client'

import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import AddHouse from '@/app/components/dashboard/houses/AddHouse'
import axios from 'axios'
import Filter from '@/app/components/dashboard/houses/Filter'
import DashBoardHouses from '@/app/components/dashboard/houses/DashBoardHouses'

function Page() {
    const [openModal, setOpenModal] = useState(false)
    const [houses, setHouses] = useState([])

    useEffect(() => {
        axios.get('/api/houses').then((res) => {
            setHouses(res.data.response)
            console.log(res.data.response)
        })
    }, [])

    return (
        <div className="flex justify-center flex-col items-center h-[70vh] gap-5 text-black pt-16">
            {openModal && <AddHouse setOpenModal={setOpenModal} />}
            <div className="flex justify-center items-center">
                <h1 className="font-bold text-4xl text-white">Casas</h1>
            </div>
            <div className="bg-white p-4 rounded-lg overflow-y-auto sm:w-[900px]">
                <Filter />
                <div className="mt-8">
                    {houses.map((house) => (
                        <DashBoardHouses house={house} key={house.id} />
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
