import {
    boolean,
    datetime,
    int,
    json,
    mysqlEnum,
    mysqlTable,
    serial,
    text,
    uniqueIndex,
    varchar,
} from 'drizzle-orm/mysql-core'

// declaring enum in database
export const users = mysqlTable('users', {
    id: serial('id').primaryKey(),
    userId: varchar('user_id', { length: 256 }),
    name: varchar('name', { length: 256 }),
    isAdmin: boolean('is_admin').default(false),
})

export const houses = mysqlTable('houses', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    data: json('data'),
    createdAt: datetime('created_at', { mode: 'date', fsp: 6 }),
})

export const images = mysqlTable('images', {
    id: serial('id').primaryKey(),
    image: varchar('image', { length: 8000 }),
    houseId: int('house_id'),
})

export const books = mysqlTable('books', {
    id: serial('id').primaryKey(),
    userId: varchar('user_id', { length: 256 }),
    guideId: varchar('guide_id', { length: 256 }),
    houseId: int('house_id'),
    date: datetime('date', { mode: 'date', fsp: 6 }),
})
