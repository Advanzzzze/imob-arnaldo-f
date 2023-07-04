import Button from '../../components/Button'
import AppModal from './AppModal'

function page() {
    return (
        <div className="flex justify-center flex-col items-center h-[40vh] gap-5 text-black">
            <div className="flex justify-center items-center">
                <h1 className="font-bold text-4xl text-white">Casas</h1>
            </div>
            <div className="bg-white w-[800px] p-4 rounded-lg">
                <h2
                    className="text-black mb-4
                "
                >
                    Filtros
                </h2>
                <form className="flex gap-8 mb-5">
                    <div className="flex flex-col w-24">
                        <label>Id</label>
                        <input type="number" name="id" placeholder="ID"></input>
                    </div>

                    <div className="flex flex-col w-52">
                        <label>Casa</label>
                        <input
                            type="text"
                            name="casa"
                            placeholder="Digite a casa"
                        ></input>
                    </div>

                    <div className="flex flex-col w-52">
                        <label>Cidade</label>
                        <input
                            type="text"
                            name="cidade"
                            placeholder="Digite a cidade"
                        ></input>
                    </div>
                </form>
                <div className="flex gap-4">
                    <Button variant={'a'} onClick={''}>
                        Pesquisar
                    </Button>
                    <Button
                        className={'bg-primary-color-300 rounded-lg'}
                        variant={'a-text'}
                        onClick={''}
                    >
                        Limpar
                    </Button>
                </div>
            </div>
            <AppModal />
        </div>
    )
}

export default page
