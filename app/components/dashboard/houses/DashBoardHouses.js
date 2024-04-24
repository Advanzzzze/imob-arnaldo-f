import React from 'react'

function DashBoardHouses({ house }) {
    return (
        <div
            key={house.id}
            className="odd:bg-gray-100 rounded-lg text-center mb-6 p-6"
        >
            <p className="text-xl font-bold">{house.name}</p>
            <p className="font-semibold">{house.data.location}</p>
            <p>{house.data.address}</p>
            <p>{house.data.city}</p>
            <div className="h-24 flex gap-2">
                {house.data.images.map((image, index) => (
                    <img
                        className="rounded"
                        key={`${house.name}-${index}`}
                        src={image}
                        alt={house.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default DashBoardHouses
