import { SignUp, auth } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
    const { userId } = auth()
    return (
        <div className="grid grid-cols-2 max-sm:flex-col justify-center items-center gap-14 pt-16 relative">
            <div className="flex flex-col gap-12 items-end">
                <h1 className="font-bold text-5xl w-2/3">Registre-se</h1>
                <div className="w-2/3 max-sm:hidden flex flex-col gap-4 bg-primary-color-100/30 rounded-lg p-2">
                    <h2 className="text-3xl">
                        <span className="font-bold">Bem-vindo(a)</span> à{' '}
                        <span className="font-bold text-ascent-color-300">
                            Arnaldo Ferreira Imóveis!
                        </span>
                    </h2>
                    <p className="text-xl">
                        🔍 Explore{' '}
                        <span className="text-ascent-color-300">
                            oportunidades incríveis
                        </span>{' '}
                        de imóveis ao fazer login.
                    </p>
                    <p className="text-xl">
                        🏠 Facilitamos a busca pelo seu{' '}
                        <span className="text-ascent-color-300">
                            lar dos sonhos
                        </span>
                        .
                    </p>
                    <p className="text-xl">
                        🌟 Descubra as{' '}
                        <span className="text-ascent-color-300">
                            melhores opções
                        </span>{' '}
                        e variedade de propriedades em nossa plataforma.
                    </p>
                    <p className="text-xl">
                        ℹ️ Acesse informações{' '}
                        <span className="text-ascent-color-300">
                            exclusivas e detalhadas
                        </span>{' '}
                        sobre os imóveis com sua conta.
                    </p>
                    <p className="text-xl">
                        💬 Navegue, salve pesquisas{' '}
                        <span className="text-ascent-color-300">favoritas</span>{' '}
                        e receba suporte personalizado.
                    </p>
                    <p className="text-xl">
                        Obrigado por escolher a{' '}
                        <span className="text-ascent-color-300">
                            Arnaldo Ferreira Imóveis
                        </span>
                        !
                    </p>
                </div>
            </div>
            <div className="relative">
                <div className="absolute w-10 h-10 flex-none -z-10 left-1/4 top-1/2 -translate-y-1/2">
                    <Image
                        alt="Loading Image"
                        src="/images/loading.svg"
                        fill
                        className="object-contain animate-spin text-ascent-color-300"
                    />
                </div>
                <SignUp />
            </div>
        </div>
    )
}
