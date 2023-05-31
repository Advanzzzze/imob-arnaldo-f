import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { connect } from '@planetscale/database'
import { NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'
import { books } from '@/db/schema'

// create the connection
const connection = connect({
    host: process.env['DATABASE_HOST'],
    username: process.env['DATABASE_USERNAME'],
    password: process.env['DATABASE_PASSWORD'],
})

const db = drizzle(connection)

export async function GET() {
    const result = await db.select().from(books)

    return NextResponse.json({ response: result })
}

export async function POST(request) {
    const body = await request.json()

    const newBook = {}

    const result = await db.insert(books).values(newHouse)

    return NextResponse.json({ response: newHouse })
}

export async function PUT(request) {
    const body = await request.json()

    const response = await db.delete(books).where(eq(books.id, body.id))

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
        .update(books)
        .set(newHouse)
        .where(eq(books.id, body.id))

    return NextResponse.json({ response: response })
}
