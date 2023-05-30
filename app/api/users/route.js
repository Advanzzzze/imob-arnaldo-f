import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { connect } from '@planetscale/database'
import { NextResponse } from 'next/server'
import { users } from '@/db/schema'

// create the connection
const connection = connect({
    host: process.env['DATABASE_HOST'],
    username: process.env['DATABASE_USERNAME'],
    password: process.env['DATABASE_PASSWORD'],
})

const db = drizzle(connection)

export async function GET() {
    const result = await db.select().from(users)

    return NextResponse.json({ response: result })
}

export async function POST() {
    const newUser = {
        userId: 'user_2QNEy4fgWoLKc7Cu5WufKcmXxTv',
        name: 'Lymei',
        data: { teste: true },
        isAdmin: true,
    }

    const result = await db.insert(users).values(newUser)

    return NextResponse.json({ response: newUser })
}
