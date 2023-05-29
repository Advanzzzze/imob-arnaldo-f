'use client'

import Image from 'next/image'
import SearchBar from './hero/SearchBar'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Hero({ isVisible }) {
    return (
        <div className="flex flex-col justify-center items-center gap-8 pb-16">
            <div className="relative overflow-hidden w-full h-[500px]">
                <Image
                    src={'/images/hero-house.jpg'}
                    className="object-cover"
                    alt="House placeholder"
                    fill
                />
            </div>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <p className="text-4xl text-center mb-8">
                        Oque <span className="font-semibold">você</span> está
                        buscando?
                    </p>
                    <SearchBar />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Hero
