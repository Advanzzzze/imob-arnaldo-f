'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
    AiOutlineHome,
    AiFillHome,
    AiFillSchedule,
    AiOutlineSchedule,
} from 'react-icons/ai'
import { HiUsers, HiOutlineUsers } from 'react-icons/hi'
import { BsArrowLeftShort, BsHousesFill, BsHouses } from 'react-icons/bs'
import SideButton from '../components/dashboard/SideButton'
import Link from 'next/link'

export default function Layout({ children }) {
    const pathName = usePathname().split('/')[2]
    const isHome = pathName == undefined
    const isUsers = pathName == 'users'
    const isHouses = pathName == 'houses'
    const isBooks = pathName == 'books'
    return (
        <div className="absolute inset-0 bg-primary-color-300 overflow-hidden z-50 border-y-8 border-ascent-color-300">
            <div className="h-full w-full grid grid-cols-5">
                <div className="h-full bg-primary-color-200 flex flex-col p-4 gap-4">
                    <div className="flex justify-center">
                        <Image
                            src="/images/arnaldo-icon.png"
                            width={128}
                            height={71}
                            alt="teste"
                            className="max-sm:hidden"
                        />
                    </div>
                    <SideButton
                        OutlineIcon={AiOutlineHome}
                        FillIcon={AiFillHome}
                        href={'/dashboard'}
                        condition={isHome}
                        title={'Início'}
                    />
                    <SideButton
                        OutlineIcon={HiOutlineUsers}
                        FillIcon={HiUsers}
                        href={'/dashboard/users'}
                        condition={isUsers}
                        title={'Usuários'}
                    />
                    <SideButton
                        OutlineIcon={BsHouses}
                        FillIcon={BsHousesFill}
                        href={'/dashboard/houses'}
                        condition={isHouses}
                        title={'Casas'}
                    />
                    <SideButton
                        OutlineIcon={AiOutlineSchedule}
                        FillIcon={AiFillSchedule}
                        href={'/dashboard/books'}
                        condition={isBooks}
                        title={'Agendamentos'}
                    />
                </div>
                <Link
                    href="/"
                    className="flex gap-2 items-center absolute left-4 bottom-4 p-2 hover:text-ascent-color-300"
                >
                    <BsArrowLeftShort size={20} />
                    <p>Sair</p>
                </Link>
                <div className="h-full col-span-4">{children}</div>
            </div>
        </div>
    )
}
