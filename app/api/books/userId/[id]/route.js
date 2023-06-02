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

export async function GET(request, { params }) {
    const result = await db
        .select()
        .from(books)
        .where(eq(books.userId, params.id))

    return NextResponse.json({ response: result })
}
