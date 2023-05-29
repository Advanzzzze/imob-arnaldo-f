'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CgRuler } from 'react-icons/cg'
import { FaBed, FaCarSide, FaMapMarker, FaImage } from 'react-icons/fa'
import { MdOutlineShower } from 'react-icons/md'
import { TfiMapAlt } from 'react-icons/tfi'

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
        <div>
            <motion.div
                className="carrosel cursor-grab"
                whileTap={{ cursor: 'grabbing' }}
                ref={carrosel}
            >
                <motion.div
                    className="inner flex gap-4 w-fit"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
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
            <div className="flex">
                <div className="py-8 pl-40">
                    <div className="flex gap-7">
                        <div className="flex gap-2">
                            <a
                                className="flex bg-ascent-color-300/70 p-2 rounded-lg gap-2"
                                href="/"
                            >
                                <FaImage size={25} />
                                <p>Fotos</p>
                            </a>
                        </div>
                        <div className="flex gap-2">
                            <a
                                className="flex bg-white/70 p-2 rounded-lg gap-2"
                                href="/"
                            >
                                <TfiMapAlt size={25} />
                                <p>Mapa</p>
                            </a>
                        </div>
                        <div className="flex gap-2">
                            <a
                                className="flex bg-white/70 p-2 rounded-lg gap-2"
                                href="/"
                            >
                                <FaMapMarker size={25} />
                                <p>Rua</p>
                            </a>
                        </div>
                    </div>
                    <h3 className="font-bold text-2xl pt-4">
                        Chácara em construção
                    </h3>
                    <h3 className="font-bold text-2xl">Araraquara - SP</h3>
                    <p>Rua Arnaldo Ferreira, 123 - Araraquara SP</p>
                    <div className="flex gap-16 py-8">
                        <div className="flex flex-col">
                            <div className="flex gap-2">
                                <CgRuler
                                    className="text-ascent-color-300"
                                    size={25}
                                />
                                <p>Área</p>
                            </div>
                            <p>15 a 70m²</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex gap-2">
                                <FaBed size={25} />
                                <p>Dormitórios</p>
                            </div>
                            <p>2 a 3</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex gap-2">
                                <MdOutlineShower
                                    className="text-ascent-color-300"
                                    size={25}
                                />
                                <p>Banheiros</p>
                            </div>
                            <p>1 a 2</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex gap-2">
                                <FaCarSide size={25} />
                                <p>Banheiros</p>
                            </div>
                            <p>1 a 2</p>
                        </div>
                    </div>
                    <h3 className="font-bold text-2xl">Sobre o Imóvel</h3>
                    <p className="w-1/3 pt-4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="py-8 pr-96">
                    <div className="border border-ascent-color-300 w-96 h-80 rounded-lg">
                        <div className="pb-28">
                            <h3 className="font-bold text-2xl pt-4 text-ascent-color-300">
                                Estou Interessado
                            </h3>
                            <p className="pt-4">Preencha os campos abaixo</p>
                            <div>
                                <form className="flex justify-center pb-4 pt-6">
                                    <label className="block">
                                        <span className="block text-sm font-medium">
                                            Seu nome:
                                        </span>
                                        <input className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                                    </label>
                                </form>
                                <form className="pb-4 flex justify-center">
                                    <label className="block">
                                        <span className="block text-sm font-medium">
                                            E-mail:
                                        </span>
                                        <input className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                                    </label>
                                </form>
                                <form className="pb-4 flex justify-center">
                                    <label className="block">
                                        <span className="block text-sm font-medium">
                                            Celular:
                                        </span>
                                        <input className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                                    </label>
                                </form>
                            </div>
                            <a
                                href="/"
                                className="flex justify-center text-ascent-color-300 font-bold"
                            >
                                Enviar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
