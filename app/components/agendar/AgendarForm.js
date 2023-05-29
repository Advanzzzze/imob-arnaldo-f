import Button from '../Button'

function AgendarForm() {
    const inputStyle = 'p-2 text-black rounded-sm w-full'

    return (
        <div className="flex flex-col gap-2 flex-none max-md:mx-2 md:w-1/3 h-fit p-4 border border-ascent-color-300 rounded-lg">
            <h3 className="font-bold text-2xl text-ascent-color-300">
                Estou Interessado
            </h3>
            <p className="">Preencha os campos abaixo</p>
            <form className="flex flex-col gap-2">
                <div>
                    <p className="block">Nome</p>
                    <input
                        placeholder="Digite seu nome"
                        className={inputStyle}
                    />
                </div>
                <div className="flex gap-2">
                    <div>
                        <p className="block">E-mail</p>
                        <input
                            placeholder="Digite seu e-mail"
                            className={inputStyle}
                        />
                    </div>
                    <div>
                        <p className="block">Telefone</p>
                        <input
                            placeholder="(xx) xxxxx-xxxx"
                            className={inputStyle}
                        />
                    </div>
                </div>
                <Button variant={'outline'} className="mt-4">
                    Enviar
                </Button>
            </form>
        </div>
    )
}

export default AgendarForm
