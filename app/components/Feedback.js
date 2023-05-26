/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

function Feedback() {
    return (
        <div className="flex flex-col justify-center items-center relative w-full py-16 gap-12">
            <h1 className="font-bold text-2xl">
                OQUE NOSSOS CLIENTES ESTÃO FALANDO
            </h1>
            <div className="flex flex-col gap-8">
                <div className="flex justify-center gap-6 items-center">
                    <div className="flex flex-col items-center justify-center gap-1">
                        <Image
                            src="/images/image 1.png"
                            width={110}
                            height={110}
                            alt="teste"
                            className="object-contain"
                        />
                        <p className="text-ascent-color-300">~ Alessandra</p>
                    </div>
                    <p className="w-1/3">
                        " Parabéns à Arnaldo Ferreira Imóveis pela excelência e
                        compromisso em oferecer um serviço imobiliário
                        excepcional. Com conhecimento de mercado e atendimento
                        personalizado, eles ajudam os clientes a encontrar seus
                        lares dos sonhos. É uma imobiliária confiável e
                        referência no setor. Parabéns pelo sucesso alcançado! "
                    </p>
                </div>
                <div className="flex flex-row-reverse justify-center gap-6 items-center">
                    <div className="flex flex-col items-center justify-center gap-1">
                        <Image
                            src="/images/image 2.png"
                            width={110}
                            height={110}
                            alt="teste"
                            className="object-contain"
                        />
                        <p className="text-ascent-color-300">~ João Santos</p>
                    </div>
                    <p className="w-1/3">
                        " Parabéns à Arnaldo Ferreira Imóveis pela excelência e
                        compromisso em oferecer um serviço imobiliário
                        excepcional. Com conhecimento de mercado e atendimento
                        personalizado, eles ajudam os clientes a encontrar seus
                        lares dos sonhos. É uma imobiliária confiável e
                        referência no setor. Parabéns pelo sucesso alcançado! "
                    </p>
                </div>
                <div className="flex justify-center gap-6 items-center">
                    <div className="flex flex-col items-center justify-center gap-1">
                        <Image
                            src="/images/image 3.png"
                            width={110}
                            height={110}
                            alt="teste"
                            className="object-contain"
                        />
                        <p className="text-ascent-color-300">~ Ana</p>
                    </div>
                    <p className="w-1/3">
                        " Parabéns à Arnaldo Ferreira Imóveis pela excelência e
                        compromisso em oferecer um serviço imobiliário
                        excepcional. Com conhecimento de mercado e atendimento
                        personalizado, eles ajudam os clientes a encontrar seus
                        lares dos sonhos. É uma imobiliária confiável e
                        referência no setor. Parabéns pelo sucesso alcançado! "
                    </p>
                </div>
            </div>
            <a href="/" className="text-ascent-color-300">
                Ver mais
            </a>
        </div>
    )
}

export default Feedback