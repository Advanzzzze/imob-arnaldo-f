import Image from 'next/image'
import PeopleCard from '../components/quem-somos/PeopleCard'

function page() {
    return (
        <div id="quemsomos-container" className="flex justify-center">
            <div className="flex flex-col justify-center w-1/3 items-center gap-14">
                <h1 className="font-bold text-3xl pt-16">NOSSOS CORRETORES</h1>
                <p>
                    A{' '}
                    <span className="text-ascent-color-300">
                        ARNALDO FERREIRA IMÓVEIS
                    </span>{' '}
                    tem mais opções de apartamentos, casas residenciais e
                    comerciais, sobrados, terrenos, ranchos, sítios e fazendas
                    para venda ou locação, além de empreendimentos em construção
                    ou lançamentos na planta em Araraquara e Região. Aqui você
                    encontra milhares de ofertas para encontrar o imóvel que
                    mais combina com seu estilo de vida.
                </p>
                <p>
                    Negocie seu imóvel de forma totalmente online, com segurança
                    e tranquilidade. Na{' '}
                    <span className="text-ascent-color-300">
                        ARNALDO FERREIRA IMÓVEIS
                    </span>{' '}
                    você consegue comprar ou alugar um imóvel mesmo não estando
                    na cidade e com a praticidade de fazer tudo online, direto
                    do seu computador ou smartphone. Nós criamos soluções
                    inovadoras para simplificar a relação de proprietários,
                    inquilinos e compradores com o mercado imobiliário.
                </p>
                <p> Anuncie seu imóvel! É fácil, rápido e gratuito!</p>
                <p>
                    Na{' '}
                    <span className="text-ascent-color-300">
                        ARNALDO FERREIRA IMÓVEIS
                    </span>{' '}
                    você consegue vender ou alugar seu imóvel muito mais rápido
                    do que em imobiliárias tradicionais. Já vendemos e locamos
                    diversos imóveis em Araraquara e Região e em São Paulo
                    Capital, especialmente em Jardim Nova Taquaral, Residencial
                    Nova Colina e EcoVille. Isso porque temos uma equipe de
                    marketing digital focada em produzir campanhas específicas,
                    o que aumenta muito o número de contatos interessados e
                    tendo como consequência uma maior chance de vender ou alugar
                    seu imóvel mais rápido. Contamos também com um time de
                    programadores, corretores treinados e uma central de
                    atendimento preparada para atender proprietários e
                    inquilinos.
                </p>
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-3xl mb-10 text-center">
                        Nossa equipe
                    </h1>
                    <div className="flex gap-8">
                        <PeopleCard
                            name={'Arnaldo Ferreira'}
                            image={'/images/img-arnaldo.svg'}
                        />
                        <PeopleCard
                            name={'Arnaldo Ferreira'}
                            image={'/images/img-arnaldo.svg'}
                        />
                        <PeopleCard
                            name={'Arnaldo Ferreira'}
                            image={'/images/img-arnaldo.svg'}
                        />
                        <PeopleCard
                            name={'Arnaldo Ferreira'}
                            image={'/images/img-arnaldo.svg'}
                        />
                    </div>
                </div>
                <a
                    href="/"
                    className="text-white bg-ascent-color-300/50 rounded-lg p-2"
                >
                    Agendar agora!
                </a>
            </div>
        </div>
    )
}

export default page
