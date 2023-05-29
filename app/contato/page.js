import Button from '../components/Button'

function page() {
    return (
        <div className="py-12 px-2">
            <div className="flex justify-center mb-8">
                <h1 className="text-4xl font-bold text-center">Contatos</h1>
            </div>
            <div className="flex justify-center items-center gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl">Endereço</h2>
                    <div>
                        <p>Av. José Bonifácio, 819, Centro</p>
                        <p>ARARAQUARA/SP</p>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.743158839186!2d-48.17975870920287!3d-21.79019926067796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f3de1c490885%3A0x93f58bfd5ec8efe2!2sAv.%20Jos%C3%A9%20Bonif%C3%A1cio%2C%20819%20-%20Centro%2C%20Araraquara%20-%20SP%2C%2014801-150!5e0!3m2!1spt-BR!2sbr!4v1684857382849!5m2!1spt-BR!2sbr"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-80 rounded-lg"
                    ></iframe>
                    <h3 className="sm:w-96">
                        PARA FALAR COM UM DE NOSSOS ATENDENTES LIGUE OU
                        ENVIE-NOS UM E-MAIL:
                    </h3>
                    <div>
                        <a>E-mail: sac.arnaldoferreira@gmail.com</a>
                        <p>Whatsapp: (16) 9 9722-4184</p>
                        <p>Celular: (16) 9 9745-4184</p>
                        <p>Tel: (16) 3332-4714 Ramal 33</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
