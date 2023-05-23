import Image from 'next/image'

function Section() {
    return (
        <div
            id="container-section"
            className="flex flex-col justify-center items-center p-10"
        >
            <h1 className="text-3xl pb-8 font-bold">
                Seu novo lar está esperando por você
                <span className="text-ascent-color-300">.</span>
            </h1>
            <div className="flex gap-20 items-center pt-6">
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
                <div className="w-80 bg-secondary-color-200/20 rounded-lg">
                    <p className="text-xl">
                        “ Na{' '}
                        <span className="text-ascent-color-300 font-bold">
                            Arnaldo Ferreira Imóveis
                        </span>
                        , estamos prontos para ajudar{' '}
                        <span className="font-bold">você</span> a realizar seu{' '}
                        <span
                            className="font-bold
                        "
                        >
                            sonho.
                        </span>{' '}
                        Venha nos visitar e descubra como podemos torná-lo
                        realidade.{' '}
                        <span className="text-ascent-color-300 font-bold">
                            Arnaldo Ferreira Imóveis
                        </span>{' '}
                        - seu caminho para a felicidade no lar. ”
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section
