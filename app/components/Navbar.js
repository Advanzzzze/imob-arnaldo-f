'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
    AiOutlineWhatsApp,
    AiOutlineInstagram,
    AiFillHome,
} from 'react-icons/ai'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsFillBookmarkFill, BsFillPeopleFill } from 'react-icons/bs'

function Navbar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    function handleClick() {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div className="flex justify-center items-center w-screen bg-primary-color-300 z-10 sm:border-t-8 sm:border-ascent-color-300 sm:border-b-white/20 sm:border-b">
            <div
                id="navbar-container"
                className="flex max-sm:w-full justify-center sm:justify-between gap-4 max-sm:h-20 h-32 max-sm:fixed max-sm:z-50 max-sm:bg-primary-color-300 bottom-0 left-0"
            >
                <Image
                    src="/images/logo-arnaldo.svg"
                    width={256}
                    height={143}
                    alt="teste"
                    className="max-sm:hidden"
                />
                <div className="flex justify-evenly w-full gap-4 items-center text-center max-sm:text-2xl">
                    <a
                        href="/"
                        className="hover:text-ascent-color-300 flex flex-col justify-center items-center gap-2 max-sm:p-4"
                    >
                        <AiFillHome className="sm:hidden" />
                        <p className="max-sm:hidden">Inicio</p>
                    </a>
                    <a
                        href="/"
                        className="hover:text-ascent-color-300 flex flex-col justify-center items-center gap-2 max-sm:p-4"
                    >
                        <BsFillBookmarkFill className="sm:hidden" />
                        <p className="max-sm:hidden">Agendar</p>
                    </a>
                    <a
                        href="/"
                        className="hover:text-ascent-color-300 flex flex-col justify-center items-center gap-2 max-sm:p-4"
                    >
                        <BsFillPeopleFill className="sm:hidden" />
                        <p className="max-sm:hidden">Quem somos</p>
                    </a>
                    <a
                        href="/"
                        className="hover:text-ascent-color-300 flex flex-col justify-center items-center gap-2 max-sm:hidden"
                    >
                        <p>Parceiros</p>
                    </a>
                    <a
                        href="/"
                        className="hover:text-ascent-color-300 flex flex-col justify-center items-center gap-2 max-sm:hidden"
                    >
                        <p>Contato</p>
                    </a>
                    <button onClick={handleClick} className="sm:hidden p-4">
                        {menuIsOpen ? (
                            <p className="w-6">x</p>
                        ) : (
                            <RxHamburgerMenu />
                        )}
                    </button>
                </div>
                <div className="flex items-center gap-1 max-lg:hidden">
                    <a href="/" className="hover:text-ascent-color-300">
                        <AiOutlineWhatsApp size={25} />
                    </a>
                    <a href="/" className="hover:text-ascent-color-300">
                        <AiOutlineInstagram size={25} />
                    </a>
                    <a href="/" className="hover:text-ascent-color-300">
                        <RiFacebookCircleLine size={25} />
                    </a>
                </div>
                <div
                    className={`relative flex justify-center items-center max-lg:flex-col lg:gap-4 max-sm:fixed max-sm:bottom-16 max-sm:right-0  transition max-sm:rounded-t-lg max-sm:bg-primary-color-300/90 max-sm:p-4 ${
                        menuIsOpen ? 'translate-x-0' : 'max-sm:translate-x-full'
                    }`}
                >
                    <button className="border-opacity-100 border-2 border-ascent-color-300 sm:w-36 rounded-lg p-2 color bg-ascent-color-300/20 active:bg-ascent-color-300/40">
                        Cadastre-se
                    </button>
                    <button className="text-ascent-color-300 p-2 hover:text-white">
                        Entrar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
