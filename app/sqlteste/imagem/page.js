'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

function Page() {
    const [images, setImages] = useState([])

    async function getHouse() {
        const response = await axios.get('/api/image')

        console.log(response.data.response)

        setImages(response.data.response)
    }

    useEffect(() => {
        getHouse()
    }, [])

    return (
        <div>
            {images.map((data, index) => {
                return <img key={index} src={data.data.image} alt={data.name} />
            })}
        </div>
    )
}

export default Page
