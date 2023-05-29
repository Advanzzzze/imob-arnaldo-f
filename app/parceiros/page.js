import Image from 'next/image'
import Button from '../components/Button'

function page() {
    return (
        <div className="flex max-sm:flex-col justify-center items-center gap-12 py-12">
            <div>
                <Image
                    src="/images/gobatto.jpg"
                    width={256}
                    height={143}
                    alt="teste"
                    className="bg-ascent-color-300/10 p-2 rounded-lg"
                />
            </div>
            <div className="flex flex-col gap-2 p-2">
                <h1 className="text-4xl">Gobatto</h1>
                <h3 className="font-bold">Corretora de Seguros</h3>
                <p>
                    A mais de 30 anos ajudando você a preservar os seus sonhos!
                </p>
                <p className="sm:w-96 pb-8">
                    Desde o celular, carro, casa, até a sua vida, temos a sempre
                    uma solução inteligente e prática para que você esteja
                    seguro. Atendimento exclusivo e diferenciado, além da
                    segurança que só quem tem mais de 30 anos em Araraquara e
                    região pode oferecer.
                </p>
                <Button
                    variant={'a'}
                    onClick={'https://www.gobatto.com.br/home/'}
                    target="_blank"
                >
                    Saiba mais
                </Button>
            </div>
        </div>
    )
}

export default page
