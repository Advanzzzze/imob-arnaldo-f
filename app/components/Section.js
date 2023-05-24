import Image from 'next/image'

function Section() {
    return (
        <div
            id="container-section"
            className="flex flex-col justify-center items-center p-10 py-16"
        >
            <h1 className="text-3xl pb-8 font-bold">
                Seu novo lar está esperando por você
                <span className="text-ascent-color-300">.</span>
            </h1>
            <div className="flex flex-col gap-20 items-center pt-6">
                <div className="flex flex-col items-center">
                    <Image
                        src="/images/Vector-bubbles.svg"
                        width={256}
                        height={143}
                        alt="teste"
                    />
                    <p className="font-bold text-xl pt-4">
                        Você está á um passo de realizar seu{' '}
                        <span className="text-secondary-color-300">sonho</span>!{' '}
                    </p>
                </div>
                <div className="flex flex-col gap-4 items-center justify-center w-2/5 bg-secondary-color-200/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-xl">
                        <span className="text-ascent-color-300">
                            Arnaldo Ferreira Imóveis:
                        </span>{' '}
                        sua parceira confiável no mercado imobiliário. Com
                        experiência, equipe qualificada e foco no cliente,
                        oferecemos soluções personalizadas. Transparência,
                        honestidade e inovação são nossos pilares. Ampla seleção
                        de imóveis residenciais e comerciais. Conte conosco para
                        uma experiência imobiliária excepcional.
                    </p>
                    <p>
                        <span className="text-ascent-color-300 font-bold">
                            Arnaldo Ferreira Imóveis
                        </span>{' '}
                        - seu caminho para a felicidade no lar.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section
