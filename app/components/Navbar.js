import Image from 'next/image'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiFacebookCircleLine } from 'react-icons/ri'

function Navbar() {
    return (
        <div
            id="navbar-container"
            className="flex justify-between w-screen bg-primary-color-300 h-32 border-t-8 border-ascent-color-300 px-40 border-b-white/10 border-b"
        >
            <Image
                src="/images/logo-arnaldo.svg"
                width={256}
                height={143}
                alt="logo"
            />
            <div className="flex justify-center gap-12">
                <div className="flex justify-center gap-6 items-center p-9 top-11">
                    <a href="/" className="hover:text-ascent-color-300">
                        Inicio
                    </a>
                    <a href="/" className="hover:text-ascent-color-300">
                        Agendar Online
                    </a>
                    <a href="/" className="hover:text-ascent-color-300">
                        Quem somos
                    </a>
                    <a href="/" className="hover:text-ascent-color-300">
                        Parceiros
                    </a>
                    <a href="/" className="hover:text-ascent-color-300">
                        Contato
                    </a>
                </div>
                <div className="flex items-center gap-2">
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
            </div>
            <div className="flex gap-6 items-center">
                <button className="border-opacity-100 h-10 border-2 border-ascent-color-300 rounded-lg px-4 color bg-ascent-color-300/20 active:bg-ascent-color-300/40">
                    Cadastre-se
                </button>
                <button className="text-ascent-color-300 p-2 hover:text-white">
                    Entrar
                </button>
                <Image
                    src="/images/perfil.svg"
                    width={25}
                    height={25}
                    alt="teste"
                    className="cursor-pointer"
                />
            </div>
        </div>
    )
}

export default Navbar
