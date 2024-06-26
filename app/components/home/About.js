'use client'

import { TbClipboardText } from 'react-icons/tb'
import { BiCoinStack } from 'react-icons/bi'
import { TfiMapAlt } from 'react-icons/tfi'
import { BiCheckboxChecked } from 'react-icons/bi'
import Image from 'next/image'
import Button from '../Button'
import { motion } from 'framer-motion'

function About() {
    return (
        <div
            id="container-about"
            className="flex flex-col items-center text-center py-16 gap-16"
        >
            <h1 className="text-3xl font-bold">
                CORRETORES QUE VOCÊS PODEM CONFIAR
                <span className="text-ascent-color-300">.</span>
            </h1>
            <div className="sm:flex grid grid-cols-2 gap-2 justify-center p-2 sm:gap-14">
                <div className="flex flex-col items-center transition hover:scale-105 duration-200">
                    <TbClipboardText size={48} />
                    <p>Cadastro Gratuito Sem Taxas Extras</p>
                </div>
                <div className="flex flex-col items-center transition hover:scale-105 duration-200">
                    <BiCoinStack size={48} className="text-ascent-color-300" />
                    <p>Avaliação de Imóveis</p>
                </div>
                <div className="flex flex-col items-center transition hover:scale-105 duration-200">
                    <TfiMapAlt size={48} />
                    <p>Ampla Cobertura</p>
                </div>
                <div className="flex flex-col items-center transition hover:scale-105 duration-200">
                    <BiCheckboxChecked
                        size={48}
                        className="text-ascent-color-300"
                    />
                    <p>Garantia de Satisfação</p>
                </div>
            </div>
            <div className="flex max-sm:flex-col justify-center items-center gap-12">
                <div className="text-center">
                    <Image
                        src="/images/img-arnaldo.svg"
                        width={256}
                        height={143}
                        alt="teste"
                    />
                    <p className="font-bold">ARNALDO FERREIRA</p>
                    <p>CRECI: 223086 / CNAI:39267</p>
                </div>
                <div className="w-4/5 sm:w-1/3 flex flex-col items-center gap-8">
                    <p>
                        <span className="text-ascent-color-300">
                            Arnaldo Ferreira
                        </span>{' '}
                        é corretor de imóveis e já trabalhou no 1º loteamento de
                        Exclusividade no Jd. Nova Taquaral, com mais de 140
                        lotes vendidos. Também trabalhou no Residencial Nova
                        Colina, Zacarias -São Paulo com 165 lotes vendidos. e
                        atualmente está com a EcoVille , mais de 50 lotes entre
                        casas e ranchos, 6 sítios, 2 fazendas vendidas. Arnaldo
                        também se formou em Perito de Imóveis no CNAI para atuar
                        também com laudos e vistorias
                        <span className="text-ascent-color-300">.</span>
                    </p>
                    <Button
                        className={'max-xl:text-primary-color-200'}
                        variant={'a-text'}
                        onClick={'/quem-somos'}
                    >
                        Saiba mais
                    </Button>{' '}
                </div>
            </div>
        </div>
    )
}

export default About
