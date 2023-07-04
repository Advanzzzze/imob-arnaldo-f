function page() {
    function filterDate(date) {
        const objectDate = new Date(date)

        return `${objectDate.getDate().toString().padStart(2, '0')}/${(
            objectDate.getMonth() + 1
        )
            .toString()
            .padStart(2, '0')}/${objectDate.getFullYear()} as ${objectDate
            .getHours()
            .toString()
            .padStart(2, '0')}:${objectDate
            .getMinutes()
            .toString()
            .padStart(2, '0')}`
    }
    const books = {
        response: [
            {
                id: 1,
                userId: 'Lymei1231',
                guideId: 'daklsjdl21',
                houseId: 2,
                date: '2023-05-12T12:00:00.000Z',
            },
            {
                id: 2,
                userId: 'Kevyn',
                guideId: 'daklsjdl21',
                houseId: 2,
                date: '2023-05-12T12:00:00.000Z',
            },
            {
                id: 3,
                userId: 'Lucao',
                guideId: 'daklsjdl21',
                houseId: 2,
                date: '2023-05-12T12:00:00.000Z',
            },
            {
                id: 4,
                userId: 'Aury',
                guideId: 'daklsjdl21',
                houseId: 2,
                date: '2023-05-12T12:00:00.000Z',
            },
            {
                id: 5,
                userId: 'Foca',
                guideId: 'daklsjdl21',
                houseId: 2,
                date: '2023-05-12T12:00:00.000Z',
            },
            {
                id: 2,
                userId: 'Kevyn',
                guideId: 'daklsjdl21',
                houseId: 2,
                date: '2023-05-12T12:00:00.000Z',
            },
            {
                id: 3,
                userId: 'Lucao',
                guideId: 'daklsjdl21',
                houseId: 2,
                date: '2023-05-12T12:00:00.000Z',
            },
            {
                id: 4,
                userId: 'Aury',
                guideId: 'daklsjdl21',
                houseId: 2,
                date: '2023-05-12T12:00:00.000Z',
            },
            {
                id: 5,
                userId: 'Foca',
                guideId: 'daklsjdl21',
                houseId: 2,
                date: '2023-05-12T12:00:00.000Z',
            },
            {
                id: 2,
                userId: 'Kevyn',
                guideId: 'daklsjdl21',
                houseId: 2,
                date: '2023-05-12T12:00:00.000Z',
            },
            {
                id: 3,
                userId: 'Lucao',
                guideId: 'daklsjdl21',
                houseId: 2,
                date: '2023-05-12T12:00:00.000Z',
            },
            {
                id: 4,
                userId: 'Aury',
                guideId: 'daklsjdl21',
                houseId: 2,
                date: '2023-05-12T12:00:00.000Z',
            },
            {
                id: 5,
                userId: 'Foca',
                guideId: 'daklsjdl21',
                houseId: 2,
                date: '2023-05-12T12:00:00.000Z',
            },
        ],
    }
    return (
        <div className="flex flex-col justify-center items-center gap-2 h-[70vh]">
            <div>
                <h1 className="font-bold text-4xl">Agendamentos</h1>
            </div>
            <div className="flex flex-col border border-white w-3/4 h-3/4 rounded-lg overflow-hidden">
                <div className="grid grid-cols-4 px-2 h-[5vh] bg-ascent-color-300">
                    <p className="font-bold">Usuário</p>
                    <p className="font-bold">Guia</p>
                    <p className="font-bold">Casa</p>
                    <p className="font-bold">Data</p>
                </div>
                <div className="flex flex-col h-[50vh] overflow-auto">
                    {books.response.map((books, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-4 p-2 even:bg-white/10"
                        >
                            <p>{books.userId}</p>
                            <p>{books.guideId}</p>
                            <p>{books.houseId}</p>
                            <p>{filterDate(books.date)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
