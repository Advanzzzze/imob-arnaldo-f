import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { connect } from '@planetscale/database'
import { NextResponse } from 'next/server'
import { houses } from '@/db/schema'
import { eq } from 'drizzle-orm'

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

export async function POST(request) {
    const body = await request.json()

    const date = new Date()

    const today = `${date.getFullYear()}-${
        date.getMonth() + 1
    }-${date.getDate()}`

    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    const dateTime = `${today}T${time}`

    const newHouse = {
        name: body.name,
        data: {
            isHouse: body.isHouse ? body.isHouse : false,
            address: body.address ? body.address : '',
            info: {
                area: body.area ? body.area : '',
                status: body.status ? body.status : '',
                bedrooms: body.bedrooms ? body.bedrooms : '',
                suites: body.suites ? body.suites : '',
                restrooms: body.restrooms ? body.restrooms : '',
                cars: body.cars ? body.cars : '',
            },
            description: body.description ? body.description : '',
            tags: body.tags ? body.tags : [], // {title: '', iconId: 0}
            images: body.images ? body.images : [],
        },
        createdAt: dateTime,
    }

    const result = await db.insert(houses).values(newHouse)

    return NextResponse.json({ response: newHouse })
}

export async function PUT(request) {
    const body = await request.json()

    const response = await db.delete(houses).where(eq(houses.id, body.id))

    return NextResponse.json({ response: response })
}

// MUST PASS EVERY PROPERTY OF THE HOUSE FOR CHANGE

export async function PATCH(request) {
    const body = await request.json()

    const newHouse = {
        name: body.name,
        data: {
            isHouse: body.isHouse,
            address: body.address,
            info: {
                area: body.area,
                status: body.status,
                bedrooms: body.bedrooms,
                suites: body.suites,
                restrooms: body.restrooms,
                cars: body.cars,
            },
            description: body.description,
            tags: body.tags, // {title: '', iconId: 0}
            images: body.images,
        },
    }

    const response = await db
        .update(houses)
        .set(newHouse)
        .where(eq(houses.id, body.id))

    return NextResponse.json({ response: response })
}
