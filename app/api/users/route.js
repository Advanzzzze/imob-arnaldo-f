import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { connect } from '@planetscale/database'
import { NextResponse } from 'next/server'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { currentUser } from '@clerk/nextjs'

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

export async function POST(request) {
    const body = await request.json()
    const user = await currentUser()

    const newUser = {
        userId: body.userId,
        name: user.firstName,
        isAdmin: false,
    }

    const result = await db.insert(users).values(newUser)

    return NextResponse.json({ response: newUser })
}

export async function PUT(request) {
    const body = await request.json()

    const result = await db
        .select()
        .from(users)
        .where(eq(users.userId, body.userId))

    return NextResponse.json({ response: result })
}
