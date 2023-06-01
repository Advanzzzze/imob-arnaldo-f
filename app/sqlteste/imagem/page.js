'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

function Page() {
    const [images, setImages] = useState([])

    async function getHouse() {
        const response = await axios.get('/api/houses')

        setImages(response.data.response)
    }

    useEffect(() => {
        getHouse()
    }, [])

    return (
        <div>
            {images.map((house) => {
                return (
                    <div
                        key={house.id}
                        className="p-2 border border-ascent-color-300"
                    >
                        {house.data.images.map((image, index) => {
                            return (
                                <img
                                    key={index}
                                    src={image}
                                    alt={house.name}
                                ></img>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Page
