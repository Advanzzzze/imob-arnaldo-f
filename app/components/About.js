import { TbClipboardText } from 'react-icons/tb'
import { BiCoinStack } from 'react-icons/bi'
import { TfiMapAlt } from 'react-icons/tfi'
import { BiCheckboxChecked } from 'react-icons/bi'
import Image from 'next/image'

function About() {
    return (
        <div
            id="container-about"
            className="flex flex-col items-center pt-16 gap-16"
        >
            <h1 className="text-3xl font-bold">
                CORRETORES QUE VOCÊS PODEM CONFIAR
                <span className="text-ascent-color-300">.</span>
            </h1>
            <div className="flex grid-cols-4 gap-14">
                <div className="flex flex-col items-center">
                    <TbClipboardText size={48} />
                    <p>CADASTRO GRATUITO SEM TAXAS EXTRAS</p>
                </div>
                <div className="flex flex-col items-center">
                    <BiCoinStack size={48} className="text-ascent-color-300" />
                    <p>AVALIAÇÃO DE IMÓVEL</p>
                </div>
                <div className="flex flex-col items-center">
                    <TfiMapAlt size={48} />
                    <p>AMPLA COBERTURA</p>
                </div>
                <div className="flex flex-col items-center">
                    <BiCheckboxChecked
                        size={48}
                        className="text-ascent-color-300"
                    />
                    <p>Garantia de Satisfação</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-12">
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
                <div className="w-1/3 flex flex-col items-center gap-8">
                    <p>
                        <span className="text-ascent-color-300">
                            Arnaldo Ferreira
                        </span>{' '}
                        é corretor de imóveis e já trabalhou no 1º loteamento de
                        Exclusividade no Jd. Nova Taquaral, com mais de 140
                        lotes vendidos. Também trabalhou no Residencial Nova
                        Colina, Zacarias -São Paulo com 165 lotes vendidos. Além
                        disso já vendeu mais de 200 títulos do Peixe Vivo e
                        atualmente está com a EcoVille com 4 lotes de
                        exclusividade, mais de 50 lotes entre casas e ranchos, 6
                        sítios, 2 fazendas vendidas. Arnaldo também se formou em
                        Perito de Imóveis no CNAI para atuar também com laudos e
                        vistorias
                        <span className="text-ascent-color-300">.</span>
                    </p>
                    <a
                        href="/"
                        className="text-ascent-color-300 p-4 hover:text-ascent-color-200"
                    >
                        Saiba mais
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
