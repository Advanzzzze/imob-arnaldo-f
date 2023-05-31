import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { connect } from '@planetscale/database'
import { NextResponse } from 'next/server'
import { houses } from '@/db/schema'

// create the connection
const connection = connect({
    host: process.env['DATABASE_HOST'],
    username: process.env['DATABASE_USERNAME'],
    password: process.env['DATABASE_PASSWORD'],
})

const db = drizzle(connection)

export async function GET() {
    const result = await db.select().from(houses)

    return NextResponse.json({ response: result })
}

export async function POST() {
    const date = new Date()

    const today = `${date.getFullYear()}-${
        date.getMonth() + 1
    }-${date.getDate()}`

    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    const dateTime = `${today}T${time}`

    const newHouse = {
        name: 'Lymei',
        data: {
            address: '',
            info: {
                area: '',
                status: '',
                bedrooms: '',
                suite: '',
                restrooms: '',
                cars: '',
            },
            desc: '',
            tags: [], // {title: '', iconId: 0}
            images: [],
        },
        createdAt: dateTime,
    }

    console.log(dateTime)

    const result = await db.insert(houses).values(newHouse)

    return NextResponse.json({ response: newHouse })
}
