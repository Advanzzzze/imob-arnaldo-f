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

export async function POST(request) {
    const body = await request.json()

    const newHouse = {
        name: body.name,
        data: { image: body.image },
    }

    const result = await db.insert(houses).values(newHouse)

    return NextResponse.json({ response: newHouse })
}
