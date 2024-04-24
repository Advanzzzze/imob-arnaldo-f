import React from 'react'
import Button from '../../Button'

function Filter() {
    return (
        <>
            <h2
                className="text-black mb-4 text-2xl font-bold
                "
            >
                Filtros
            </h2>
            <form className="flex flex-wrap gap-8 mb-5">
                <div className="flex flex-col w-24">
                    <label>Id</label>
                    <input type="number" name="id" placeholder="ID"></input>
                </div>

                <div className="flex flex-col w-52">
                    <label>Rua</label>
                    <input
                        type="text"
                        name="rua"
                        placeholder="Digite a rua"
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
                <div className="flex flex-col w-52">
                    <label>Estado</label>
                    <input
                        type="text"
                        name="estado"
                        placeholder="Digite o estado"
                    ></input>
                </div>
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
            </form>
        </>
    )
}

export default Filter
