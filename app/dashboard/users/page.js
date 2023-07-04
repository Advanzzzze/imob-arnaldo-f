function page() {
    const users = {
        response: [
            {
                id: 1,
                userId: 'user_2QNEy4fgWoLKc7Cu5WufKcmXxTv',
                name: 'Lymei',
                isAdmin: true,
            },
            {
                id: 2,
                userId: 'user_2QNEy4fgWoLKc7Cu5WufKcmXxTv',
                name: 'Kevyn',
                isAdmin: true,
            },
            {
                id: 3,
                userId: 'user_2Qw8q4tHcgPDSK9i9kss3FwRR4B',
                name: 'Advanzzze',
                isAdmin: false,
            },
            {
                id: 4,
                userId: 'user_2QwA72UUM5XwXi7wRpPq2x2O6ss',
                name: 'Lymei',
                isAdmin: false,
            },
            {
                id: 5,
                userId: 'user_2Qwwth7YobmQ7bOec6EDlKPE8RO',
                name: 'Advanzzze',
                isAdmin: false,
            },
            {
                id: 6,
                userId: 'user_2R0xZ3CCOHX2BJ1dOmrNfqr4ylt',
                name: 'Felipe',
                isAdmin: false,
            },
            {
                id: 1,
                userId: 'user_2QNEy4fgWoLKc7Cu5WufKcmXxTv',
                name: 'Lymei',
                isAdmin: true,
            },
            {
                id: 2,
                userId: 'user_2QNEy4fgWoLKc7Cu5WufKcmXxTv',
                name: 'Kevyn',
                isAdmin: true,
            },
            {
                id: 3,
                userId: 'user_2Qw8q4tHcgPDSK9i9kss3FwRR4B',
                name: 'Advanzzze',
                isAdmin: false,
            },
            {
                id: 4,
                userId: 'user_2QwA72UUM5XwXi7wRpPq2x2O6ss',
                name: 'Lymei',
                isAdmin: false,
            },
            {
                id: 5,
                userId: 'user_2Qwwth7YobmQ7bOec6EDlKPE8RO',
                name: 'Advanzzze',
                isAdmin: false,
            },
            {
                id: 6,
                userId: 'user_2R0xZ3CCOHX2BJ1dOmrNfqr4ylt',
                name: 'Felipe',
                isAdmin: false,
            },
            {
                id: 1,
                userId: 'user_2QNEy4fgWoLKc7Cu5WufKcmXxTv',
                name: 'Lymei',
                isAdmin: true,
            },
            {
                id: 2,
                userId: 'user_2QNEy4fgWoLKc7Cu5WufKcmXxTv',
                name: 'Kevyn',
                isAdmin: true,
            },
            {
                id: 3,
                userId: 'user_2Qw8q4tHcgPDSK9i9kss3FwRR4B',
                name: 'Advanzzze',
                isAdmin: false,
            },
            {
                id: 4,
                userId: 'user_2QwA72UUM5XwXi7wRpPq2x2O6ss',
                name: 'Lymei',
                isAdmin: false,
            },
            {
                id: 5,
                userId: 'user_2Qwwth7YobmQ7bOec6EDlKPE8RO',
                name: 'Advanzzze',
                isAdmin: false,
            },
            {
                id: 6,
                userId: 'user_2R0xZ3CCOHX2BJ1dOmrNfqr4ylt',
                name: 'Felipe',
                isAdmin: false,
            },
            {
                id: 1,
                userId: 'user_2QNEy4fgWoLKc7Cu5WufKcmXxTv',
                name: 'Lymei',
                isAdmin: true,
            },
            {
                id: 2,
                userId: 'user_2QNEy4fgWoLKc7Cu5WufKcmXxTv',
                name: 'Kevyn',
                isAdmin: true,
            },
            {
                id: 3,
                userId: 'user_2Qw8q4tHcgPDSK9i9kss3FwRR4B',
                name: 'Advanzzze',
                isAdmin: false,
            },
            {
                id: 4,
                userId: 'user_2QwA72UUM5XwXi7wRpPq2x2O6ss',
                name: 'Lymei',
                isAdmin: false,
            },
            {
                id: 5,
                userId: 'user_2Qwwth7YobmQ7bOec6EDlKPE8RO',
                name: 'Advanzzze',
                isAdmin: false,
            },
            {
                id: 6,
                userId: 'user_2R0xZ3CCOHX2BJ1dOmrNfqr4ylt',
                name: 'Felipe',
                isAdmin: false,
            },
            {
                id: 1,
                userId: 'user_2QNEy4fgWoLKc7Cu5WufKcmXxTv',
                name: 'Lymei',
                isAdmin: true,
            },
            {
                id: 2,
                userId: 'user_2QNEy4fgWoLKc7Cu5WufKcmXxTv',
                name: 'Kevyn',
                isAdmin: true,
            },
            {
                id: 3,
                userId: 'user_2Qw8q4tHcgPDSK9i9kss3FwRR4B',
                name: 'Advanzzze',
                isAdmin: false,
            },
            {
                id: 4,
                userId: 'user_2QwA72UUM5XwXi7wRpPq2x2O6ss',
                name: 'Lymei',
                isAdmin: false,
            },
            {
                id: 5,
                userId: 'user_2Qwwth7YobmQ7bOec6EDlKPE8RO',
                name: 'Advanzzze',
                isAdmin: false,
            },
            {
                id: 6,
                userId: 'user_2R0xZ3CCOHX2BJ1dOmrNfqr4ylt',
                name: 'Felipe',
                isAdmin: false,
            },
        ],
    }
    return (
        <div className="flex flex-col gap-2 items-center justify-center h-[70vh]">
            <div>
                <h1 className="font-bold text-4xl">Usuários</h1>
            </div>
            <div className="flex flex-col border border-white w-3/4 h-3/4 rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 px-2 h-[5vh] bg-ascent-color-300">
                    <p className="font-bold">ID</p>
                    <p className="font-bold">Nome</p>
                    <p className="font-bold">Admin</p>
                </div>
                <div className="flex flex-col h-[50vh] overflow-auto">
                    {users.response.map((user, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-3 p-2 even:bg-white/10"
                        >
                            <p>{user.id}</p>
                            <p>{user.name}</p>
                            <p
                                className={`p-2 rounded-lg ${
                                    user.isAdmin
                                        ? 'text-ascent-color-300'
                                        : 'text-red-700'
                                }`}
                            >
                                {user.isAdmin ? 'Sim' : 'Não'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
