import './globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider, currentUser } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'

const open_Sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
    title: 'Imobiliária Arnaldo Ferreira',
    description:
        'Bem-vindo à Imobiliária Arnaldo Ferreira! Somos uma imobiliária especializada na compra, venda e aluguel de imóveis. Nossa equipe experiente está pronta para ajudá-lo a encontrar a casa ou apartamento dos seus sonhos. Oferecemos uma ampla seleção de imóveis à venda e para aluguel, incluindo casas e apartamentos. Conte conosco para uma experiência imobiliária confiável e personalizada. Entre em contato agora mesmo e descubra como podemos realizar seus objetivos imobiliários com sucesso!',
}

export default function RootLayout({ children }) {
    return (
        <ClerkProvider localization={ptBR}>
            <html lang="en">
                <body
                    id="home"
                    className={`bg-primary-color-300 text-white ${open_Sans.className}`}
                >
                    <Navbar />
                    {children}
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    )
}
