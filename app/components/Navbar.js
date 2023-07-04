'use client'

import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react'
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
import { FiSettings } from 'react-icons/fi'
import { usePathname } from 'next/navigation'
import Button from './Button'
import { UserButton, useAuth, useClerk, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import axios from 'axios'

function Navbar() {
    const { isLoaded, userId, sessionId, getToken } = useAuth()
    const { isSignedIn, user } = useUser()
    const { signOut } = useClerk()
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

    if (isLoaded) {
        if (userId) {
            const user = localStorage.getItem('userLogged')
            if (!user) {
                console.log('searching user...')

                let newLocalUser = null

                axios
                    .put('/api/users', { userId: userId })
                    .then(({ data }) => {
                        if (data.response.length == 0) {
                            const newUser = {
                                userId: userId,
                            }
                            axios
                                .post('/api/users', newUser)
                                .then(({ data }) => {
                                    newLocalUser = data.response
                                })
                        } else {
                            newLocalUser = data.response
                        }
                    })
                    .finally(localStorage.setItem('userLogged', newLocalUser))
            }
        } else localStorage.removeItem('userLogged')
    }

    return (
        <>
            <div className="flex justify-center items-center w-screen bg-primary-color-300 z-10 sm:border-t-8 sm:border-ascent-color-300 sm:border-b-white/20 sm:border-b">
                <a
                    href="#home"
                    className={`fixed z-20 text-ascent-color-300 bottom-24 sm:bottom-8 sm:left-8 animate-bounce transition ${
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
                <a
                    href="https://api.whatsapp.com/send?phone=5516997224184&text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%20Poderia%20me%20ajudar%3F"
                    className="fixed z-20 text-ascent-color-300 right-8 bottom-24 sm:bottom-8 hover:scale-105 transition origin-center"
                    target="_blank"
                >
                    <AiOutlineWhatsApp size={40} />
                </a>
                <div
                    id="navbar-container"
                    className="flex max-sm:w-full justify-center sm:justify-between gap-4 max-sm:h-20 h-32 max-sm:fixed max-sm:z-50 max-sm:bg-primary-color-300 max-sm:border-t border-secondary-color-300 bottom-0 left-0"
                >
                    <Image
                        src="/images/logo-arnaldo.svg"
                        width={256}
                        height={143}
                        alt="Logo"
                        className="max-sm:hidden"
                    />
                    <div className="flex justify-evenly w-full gap-4 items-center text-center max-sm:text-2xl">
                        <Link
                            href="/"
                            className={`hover:text-ascent-color-300 flex flex-col justify-center items-center gap-2 max-sm:p-4 ${
                                url[1] == '' && 'text-ascent-color-300'
                            }`}
                        >
                            <AiFillHome className="sm:hidden" />
                            <p className="max-sm:hidden">Inicio</p>
                        </Link>
                        <Link
                            href="/casas"
                            className={`hover:text-ascent-color-300 flex flex-col justify-center items-center gap-2 max-sm:p-4 ${
                                url[1] == 'casas' && 'text-ascent-color-300'
                            }`}
                        >
                            <BsFillPeopleFill className="sm:hidden" />
                            <p className="max-sm:hidden">Casas</p>
                        </Link>{' '}
                        <Link
                            href="/quem-somos"
                            className={`hover:text-ascent-color-300 flex flex-col justify-center items-center gap-2 max-sm:p-4 ${
                                url[1] == 'quem-somos' &&
                                'text-ascent-color-300'
                            }`}
                        >
                            <BsFillPeopleFill className="sm:hidden" />
                            <p className="max-sm:hidden">Quem somos</p>
                        </Link>
                        <Link
                            href="/parceiros"
                            className={`hover:text-ascent-color-300 flex flex-col justify-center items-center gap-2 max-sm:fixed top-2 right-2 max-sm:p-4 max-sm:text-lg transition ${
                                url[1] == 'parceiros' && 'text-ascent-color-300'
                            } ${
                                menuIsOpen
                                    ? 'translate-x-0'
                                    : 'max-sm:translate-x-full'
                            }`}
                        >
                            <p>Parceiros</p>
                        </Link>
                        <Link
                            href="/contato"
                            className={`hover:text-ascent-color-300 flex flex-col justify-center items-center gap-2 max-sm:fixed top-10 right-2 max-sm:p-4 transition max-sm:text-lg ${
                                url[1] == 'contato' && 'text-ascent-color-300'
                            } ${
                                menuIsOpen
                                    ? 'translate-x-0'
                                    : 'max-sm:translate-x-full'
                            }`}
                        >
                            <p>Contato</p>
                        </Link>
                        <Button
                            onClick={handleClick}
                            variant={'text'}
                            className="sm:hidden text-white p-4"
                        >
                            {menuIsOpen ? (
                                <p className="w-6">x</p>
                            ) : (
                                <RxHamburgerMenu />
                            )}
                        </Button>
                    </div>
                    <div className="flex items-center gap-1 max-lg:hidden">
                        <a
                            href="https://api.whatsapp.com/send?phone=5516997224184&text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%20Poderia%20me%20ajudar%3F"
                            className="hover:text-ascent-color-300"
                            target="_blank"
                        >
                            <AiOutlineWhatsApp size={25} />
                        </a>
                        <a
                            href="https://www.instagram.com/corretor_arnaldofs/"
                            className="hover:text-ascent-color-300"
                            target="_blank"
                        >
                            <AiOutlineInstagram size={25} />
                        </a>
                        <a
                            href="https://www.facebook.com/arnaldoferreira.imoveis"
                            className="hover:text-ascent-color-300"
                            target="_blank"
                        >
                            <RiFacebookCircleLine size={25} />
                        </a>
                    </div>
                    <div
                        className={`relative flex justify-center items-center max-lg:flex-col lg:gap-4 max-sm:fixed max-sm:bottom-16 max-sm:right-0  transition max-sm:rounded-t-lg max-sm:p-4 ${
                            menuIsOpen
                                ? 'translate-x-0'
                                : 'max-sm:translate-x-full'
                        }`}
                    >
                        {userId && isLoaded ? (
                            <>
                                <Button variant={'text'} onClick={signOut}>
                                    Sair
                                </Button>
                                <UserButton />
                            </>
                        ) : (
                            <>
                                <Button variant={'a'} onClick={'/sign-up'}>
                                    Cadastre-se
                                </Button>
                                <Button variant={'a-text'} onClick={'/sign-in'}>
                                    Entrar
                                </Button>
                            </>
                        )}
                        <a href="/dashboard">
                            <FiSettings
                                className="hover:text-ascent-color-300"
                                size={25}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div
                className={`fixed sm:hidden bg-primary-color-300/50 backdrop-blur-lg top-0 right-0 bottom-0 left-1/2 z-20 transition border border-secondary-color-300 ${
                    menuIsOpen ? 'translate-x-0' : 'max-sm:translate-x-full'
                }`}
            ></div>
        </>
    )
}

export default Navbar
