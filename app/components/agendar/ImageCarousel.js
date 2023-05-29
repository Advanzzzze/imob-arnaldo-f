'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function ImageCarousel({ children, className }) {
    const carousel = useRef()

    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <motion.div
            className={`cursor-grab ${className}`}
            whileTap={{ cursor: 'grabbing' }}
            ref={carousel}
        >
            <motion.div
                className="inner flex gap-4 w-fit"
                drag="x"
                dragConstraints={{ right: 40, left: 40 - width }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}

export default ImageCarousel
