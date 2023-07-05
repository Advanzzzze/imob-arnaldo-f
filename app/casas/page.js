'use client'

import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import HouseCard from '../components/home/houses/HouseCard'
import { houses } from '../utils/consts'

export default function Page() {
    // const [houses, setHouses] = useState([])
    // const [loading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     axios.get('/api/houses').then((response) => {
    //         setHouses(response.data.response)
    //         console.log(response.data.response)
    //         setIsLoading(false)
    //     })
    // }, [])

    return (
        <div className="flex justify-center items-center pt-4">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {houses.map((house) => (
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
                        image={house.data.images.find(
                            (image) => image.length > 10
                        )}
                    />
                ))}
            </div>
        </div>
    )
}
