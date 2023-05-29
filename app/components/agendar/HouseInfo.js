'use client'

import { FaCarSide, FaStreetView } from 'react-icons/fa'
import Button from '../Button'
import { TfiMapAlt } from 'react-icons/tfi'
import { CgRuler } from 'react-icons/cg'
import { MdOutlineShower } from 'react-icons/md'
import { AiOutlineFileImage } from 'react-icons/ai'
import { IoBedOutline } from 'react-icons/io5'

function HouseInfo({ activeInfo, setActiveInfo }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <Button
                    className="flex gap-2"
                    variant={activeInfo != 'images' && 'outline'}
                    onClick={() => {
                        setActiveInfo('images')
                    }}
                >
                    <AiOutlineFileImage size={25} />
                    <p>Fotos</p>
                </Button>
                <Button
                    className="flex gap-2"
                    variant={activeInfo != 'map' && 'outline'}
                    onClick={() => {
                        setActiveInfo('map')
                    }}
                >
                    <TfiMapAlt size={25} />
                    <p>Mapa</p>
                </Button>
                <Button
                    className="flex gap-2"
                    variant={activeInfo != 'street' && 'outline'}
                    onClick={() => {
                        setActiveInfo('street')
                    }}
                >
                    <FaStreetView size={25} />
                    <p>Rua</p>
                </Button>
            </div>
            <div>
                <h1 className="font-bold text-2xl">Chácara</h1>
                <h2 className="text-xl text-ascent-color-300">
                    Araraquara - SP
                </h2>
                <p>Rua Arnaldo Ferreira, 123 - Araraquara SP</p>
                <p>Status: Em construção</p>
            </div>
            <div className="flex gap-4 py-2">
                <div className="flex flex-col items-center border border-ascent-color-300/20 rounded-lg p-2">
                    <div className="flex gap-2">
                        <CgRuler className="text-ascent-color-300" size={20} />
                        <p>Área</p>
                    </div>
                    <p>15 a 70m²</p>
                </div>
                <div className="flex flex-col items-center border border-ascent-color-300/20 rounded-lg p-2">
                    <div className="flex gap-2">
                        <IoBedOutline
                            className="text-ascent-color-300"
                            size={20}
                        />
                        <p>Dormitórios</p>
                    </div>
                    <p>2 a 3</p>
                </div>
                <div className="flex flex-col items-center border border-ascent-color-300/20 rounded-lg p-2">
                    <div className="flex gap-2">
                        <MdOutlineShower
                            className="text-ascent-color-300"
                            size={20}
                        />
                        <p>Banheiros</p>
                    </div>
                    <p>1 a 2</p>
                </div>
                <div className="flex flex-col items-center border border-ascent-color-300/20 rounded-lg p-2">
                    <div className="flex gap-2">
                        <FaCarSide
                            className="text-ascent-color-300"
                            size={20}
                        />
                        <p>Carros</p>
                    </div>
                    <p>1 a 2</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-2/3">
                <h3 className="font-bold text-2xl">Sobre o Imóvel</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    )
}

export default HouseInfo
