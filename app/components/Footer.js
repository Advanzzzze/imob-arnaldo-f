import Image from 'next/image'

function Footer() {
    return (
        <div className="relative flex justify-center items-center border-t-8 border-b-4 border-ascent-color-300 mt-16">
            <div className="relative mt-6 grid grid-cols-1 px-2 gap-4 sm:grid-cols-5">
                <Image
                    src="/images/logo-arnaldo.svg"
                    width={256}
                    height={143}
                    alt="teste"
                    className="max-sm:hidden"
                />

                <div className="flex flex-col gap-2">
                    <h4 className="font-bold">Arnaldo Ferreira Imóveis</h4>
                    <div className="flex flex-col gap-4">
                        <a href="/" className="hover:text-ascent-color-300">
                            Quem somos
                        </a>
                        <a href="/" className="hover:text-ascent-color-300">
                            Fale Conosco
                        </a>
                        <a href="/" className="hover:text-ascent-color-300">
                            Assessoria de Imprensa
                        </a>
                        <a href="/" className="hover:text-ascent-color-300">
                            Termos e Condições
                        </a>
                        <a href="/" className="hover:text-ascent-color-300">
                            Trabalhe Conosco
                        </a>
                        <a href="/" className="hover:text-ascent-color-300">
                            Seja um corretor associado
                        </a>
                        <a href="/" className="hover:text-ascent-color-300">
                            Relação com Investidores
                        </a>
                        <a href="/" className="hover:text-ascent-color-300">
                            Mapa do Site
                        </a>
                        <a href="/" className="hover:text-ascent-color-300">
                            Condomínios e Edifícios
                        </a>
                        <a href="/" className="hover:text-ascent-color-300">
                            Conheça seu bairro
                        </a>
                        <a href="/" className="hover:text-ascent-color-300">
                            Construtoras e Incorporadoras
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold">Serviços</h4>
                    <div className="flex flex-col gap-4">
                        <a href="/" className="hover:text-ascent-color-300">
                            Venda seu imóvel
                        </a>
                        <a href="/" className="hover:text-ascent-color-300">
                            Alugue seu imóvel
                        </a>
                        <a href="/" className="hover:text-ascent-color-300">
                            Credipronto
                        </a>
                        <a href="/" className="hover:text-ascent-color-300">
                            Consórcio
                        </a>
                        <a href="/" className="hover:text-ascent-color-300">
                            Acesso em Libras
                        </a>
                    </div>
                </div>
                <div className="col-span-2">
                    <h4 className="font-bold">Endereço</h4>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.743158839186!2d-48.17975870920287!3d-21.79019926067796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f3de1c490885%3A0x93f58bfd5ec8efe2!2sAv.%20Jos%C3%A9%20Bonif%C3%A1cio%2C%20819%20-%20Centro%2C%20Araraquara%20-%20SP%2C%2014801-150!5e0!3m2!1spt-BR!2sbr!4v1684857382849!5m2!1spt-BR!2sbr"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full min-h-[500px] h-2/3 rounded-lg"
                    ></iframe>
                </div>
            </div>
            <div className="absolute left-0 bottom-0 flex items-center gap-2">
                <Image
                    src="/images/advanzzze_logo.png"
                    width={30}
                    height={30}
                    alt="teste"
                />
                <p className="text-white/20 text-sm">Advanzzze © 2023</p>
            </div>
        </div>
    )
}

export default Footer
