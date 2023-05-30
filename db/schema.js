import {
    boolean,
    int,
    json,
    mysqlEnum,
    mysqlTable,
    serial,
    uniqueIndex,
    varchar,
} from 'drizzle-orm/mysql-core'

// declaring enum in database
export const users = mysqlTable('users', {
    id: serial('id').primaryKey(),
    userId: varchar('user_id', { length: 256 }),
    name: varchar('name', { length: 256 }),
    data: json('data'),
    isAdmin: boolean('is_admin').default(false),
})

export const houses = mysqlTable('houses', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    data: json('data'),
})
