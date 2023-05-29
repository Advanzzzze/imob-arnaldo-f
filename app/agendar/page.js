'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ImageCarousel from '../components/agendar/ImageCarousel'
import AgendarForm from '../components/agendar/AgendarForm'
import HouseInfo from '../components/agendar/HouseInfo'
import { useState } from 'react'

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
    const [activeInfo, setActiveInfo] = useState('images')

    return (
        <div className="flex flex-col gap-16">
            <div>
                <ImageCarousel
                    className={`h-80 overflow-y-hidden overflow-x-hidden ${
                        activeInfo != 'images' && 'hidden'
                    }`}
                >
                    {images.map((data, index) => {
                        return (
                            <motion.div key={index} className="flex-none">
                                <Image
                                    src={data.image}
                                    height={500}
                                    width={500}
                                    alt="teste"
                                    className="object-cover pointer-events-none"
                                />
                            </motion.div>
                        )
                    })}
                </ImageCarousel>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.743158839186!2d-48.17975870920287!3d-21.79019926067796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f3de1c490885%3A0x93f58bfd5ec8efe2!2sAv.%20Jos%C3%A9%20Bonif%C3%A1cio%2C%20819%20-%20Centro%2C%20Araraquara%20-%20SP%2C%2014801-150!5e0!3m2!1spt-BR!2sbr!4v1684857382849!5m2!1spt-BR!2sbr"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={`w-full h-80 ${activeInfo != 'map' && 'hidden'}`}
                ></iframe>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1685370431696!6m8!1m7!1s2ZjNrKvq-M0bsnnMX9ZhIQ!2m2!1d-21.79017996379078!2d-48.17968847677245!3f179.13072989517855!4f4.0126903522473185!5f0.7820865974627469"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={`w-full h-80 ${
                        activeInfo != 'street' && 'hidden'
                    }`}
                ></iframe>
            </div>

            <div className="flex max-md:flex-col max-md:gap-4 justify-center items-center sm:px-12 md:px-32">
                <HouseInfo
                    activeInfo={activeInfo}
                    setActiveInfo={setActiveInfo}
                />
                <AgendarForm />
            </div>
        </div>
    )
}

export default Page
