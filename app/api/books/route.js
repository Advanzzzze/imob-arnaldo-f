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

    const newBook = {
        userId: body.userId,
        guideId: body.guideId,
        houseId: body.houseId,
        date: body.date,
    }

    const result = await db.insert(books).values(newBook)

    return NextResponse.json({ response: newBook })
}

export async function PUT(request) {
    const body = await request.json()

    const response = await db.delete(books).where(eq(books.id, body.id))

    return NextResponse.json({ response: response })
}

// MUST PASS EVERY PROPERTY OF THE HOUSE FOR CHANGE

export async function PATCH(request) {
    const body = await request.json()

    const newBook = {
        userId: body.userId,
        guideId: body.guideId,
        houseId: body.houseId,
        date: body.date,
    }

    const response = await db
        .update(books)
        .set(newBook)
        .where(eq(books.id, body.id))

    return NextResponse.json({ response: response })
}
