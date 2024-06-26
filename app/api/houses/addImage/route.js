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

export async function POST(request) {
    const body = await request.json()

    const houseId = body.houseId
    const image = body.image

    const houseObj = await db
        .select({ data: houses.data })
        .from(houses)
        .where(eq(houses.id, houseId))

    const houseImages = houseObj[0].data.images

    const result = await db
        .update(houses)
        .set({ data: { images: [...houseImages, image] } })
        .where(eq(houses.id, houseId))

    return NextResponse.json({ response: image })
}
