'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { MdOutlineApartment } from 'react-icons/md'
import { TbRulerMeasure } from 'react-icons/tb'
import { IoIosConstruct } from 'react-icons/io'

function HouseCard({
    id,
    image,
    isHouse,
    location,
    address,
    city,
    description,
    size,
    status,
    isLikedP,
}) {
    const [isLiked, setIsLiked] = useState(isLikedP)

    function handleLike() {
        setIsLiked(!isLiked)
        const items = localStorage.getItem('liked-houses')
        if (items) {
            const oldArray = items.split(',')
            if (oldArray.includes(id)) {
                localStorage.setItem(
                    'liked-houses',
                    oldArray.filter((data) => data != id)
                )
            } else localStorage.setItem('liked-houses', [...oldArray, id])
        } else localStorage.setItem('liked-houses', [id])
    }

    useEffect(() => {
        const items = localStorage.getItem('liked-houses')
        if (items) {
            const oldArray = items.split(',')
            if (oldArray.includes(id)) {
                setIsLiked(true)
            } else setIsLiked(false)
        }
    }, [])

    return (
        <div className="flex flex-col items-center h-[500px] w-80 flex-none snap-center bg-neutral-500 rounded-lg overflow-hidden hover:-translate-y-2 transition">
            <Image
                src={image}
                width={256}
                height={143}
                alt="Imagem Imóvel"
                className="h-1/2 w-full"
            />
            <div className="relative h-1/2 w-full bg-white text-neutral-900 flex flex-col justify-between items-center gap-2 text-center p-4">
                <div className="relative w-full">
                    <h3 className="text-black font-bold">
                        {isHouse ? 'Casa' : 'Apartamento'}
                    </h3>
                    <div className="absolute right-0 top-0 text-ascent-color-300">
                        {isHouse ? (
                            <BsHouseDoor size={20} />
                        ) : (
                            <MdOutlineApartment size={20} />
                        )}
                    </div>
                </div>
                <div>
                    <h4 className="text-black font-bold">{location}</h4>
                    <h4>{address}</h4>
                    <h4>{city}</h4>
                </div>
                <p className="text-left text-sm">{description}</p>
                <div className="flex justify-between w-full items-end gap-2 text-sm">
                    <div className="flex justify-center items-center gap-2">
                        <TbRulerMeasure
                            className="text-ascent-color-300"
                            size={20}
                        />
                        <p>{size}</p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <IoIosConstruct
                            className="text-ascent-color-300"
                            size={20}
                        />
                        <p>{status}</p>
                    </div>
                    <button
                        onClick={() => {
                            handleLike()
                        }}
                        className="text-ascent-color-300"
                    >
                        {isLiked ? (
                            <AiFillHeart size={20} />
                        ) : (
                            <AiOutlineHeart size={20} />
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HouseCard
