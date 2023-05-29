'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
    {
        image: '/images/casa-1.jpg',
    },
    {
        image: '/images/casa-1.jpg',
    },
    {
        image: '/images/casa-1.jpg',
    },
    {
        image: '/images/casa-1.jpg',
    },
    {
        image: '/images/casa-1.jpg',
    },
    {
        image: '/images/casa-1.jpg',
    },
    {
        image: '/images/casa-1.jpg',
    },
    {
        image: '/images/casa-1.jpg',
    },
]

function Page() {
    const carrosel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
    }, [])

    return (
        <motion.div
            className="carrosel cursor-grab"
            whileTap={{ cursor: 'grabbing' }}
            ref={carrosel}
        >
            <motion.div
                className="inner flex gap-4 w-fit"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
            >
                {images.map((data, index) => {
                    return (
                        <motion.div key={index} className="flex-none">
                            <Image
                                src={data.image}
                                width={500}
                                height={500}
                                alt="teste"
                                className="object-cover pointer-events-none"
                            />
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}

export default Page
