'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
    AiOutlineWhatsApp,
    AiOutlineInstagram,
    AiFillHome,
} from 'react-icons/ai'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'
import {
    BsFillArrowUpCircleFill,
    BsFillBookmarkFill,
    BsFillPeopleFill,
} from 'react-icons/bs'
import { usePathname } from 'next/navigation'
import Button from './Button'
import { MdOpacity } from 'react-icons/md'

function Navbar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [arrowOpacity, setArrowOpacity] = useState(0)

    const url = usePathname().split('/')

    function handleClick() {
        setMenuIsOpen(!menuIsOpen)
    }

    function handleScroll() {
        const arrowOpacityCalc = Math.floor(window.pageYOffset / 10)
        if (arrowOpacityCalc <= 150) {
            setArrowOpacity(arrowOpacityCalc)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="flex justify-center items-center w-screen bg-primary-color-300 z-10 sm:border-t-8 sm:border-ascent-color-300 sm:border-b-white/20 sm:border-b">
            <a
                href="#home"
                className={`fixed z-50 text-ascent-color-300 sm:right-8 bottom-24 sm:bottom-8 animate-bounce transition ${
                    arrowOpacity < 100
                        ? arrowOpacity < 75
                            ? arrowOpacity < 50
                                ? arrowOpacity < 25
                                    ? 'opacity-0'
                                    : 'opacity-25'
                                : 'opacity-50'
                            : 'opacity-75'
                        : 'opacity-100'
                }`}
            >
                <BsFillArrowUpCircleFill size={20} />
            </a>

            <div
                id="navbar-container"
                className="flex max-sm:w-full justify-center sm:justify-between gap-4 max-sm:h-20 h-32 max-sm:fixed max-sm:z-50 max-sm:bg-primary-color-300 max-sm:border-t border-secondary-color-300 bottom-0 left-0"
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
                        className={`hover:text-ascent-color-300 flex flex-col justify-center items-center gap-2 max-sm:p-4 ${
                            url[1] == '' && 'text-ascent-color-300'
                        }`}
                    >
                        <AiFillHome className="sm:hidden" />
                        <p className="max-sm:hidden">Inicio</p>
                    </a>
                    <a
                        href="/agendar"
                        className={`hover:text-ascent-color-300 flex flex-col justify-center items-center gap-2 max-sm:p-4 ${
                            url[1] == 'agendar' && 'text-ascent-color-300'
                        }`}
                    >
                        <BsFillBookmarkFill className="sm:hidden" />
                        <p className="max-sm:hidden">Agendar</p>
                    </a>
                    <a
                        href="/quem-somos"
                        className={`hover:text-ascent-color-300 flex flex-col justify-center items-center gap-2 max-sm:p-4 ${
                            url[1] == 'quem-somos' && 'text-ascent-color-300'
                        }`}
                    >
                        <BsFillPeopleFill className="sm:hidden" />
                        <p className="max-sm:hidden">Quem somos</p>
                    </a>
                    <a
                        href="/"
                        className={`hover:text-ascent-color-300 flex flex-col justify-center items-center gap-2 max-sm:hidden max-sm:p-4 ${
                            url[1] == '' && 'text-ascent-color-300'
                        }`}
                    >
                        <p>Parceiros</p>
                    </a>
                    <a
                        href="/"
                        className={`hover:text-ascent-color-300 flex flex-col justify-center items-center gap-2 max-sm:hidden max-sm:p-4 ${
                            url[1] == '' && 'text-ascent-color-300'
                        }`}
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
                    <Button>Cadastre-se</Button>
                    <Button variant={'text'}>Entrar</Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
