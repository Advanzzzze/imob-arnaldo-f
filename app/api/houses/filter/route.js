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

export async function PUT(request) {
    const body = await request.json()
    const result = await db.select().from(houses).where(eq(houses.id, 4))
    return NextResponse.json({ response: result })
}
