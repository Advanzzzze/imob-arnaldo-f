import { authMiddleware } from '@clerk/nextjs/server'

export default authMiddleware({
    publicRoutes: [
        '/',
        '/dashboard',
        '/dashboard/users',
        '/dashboard/houses',
        '/dashboard/books',
        '/parceiros',
        '/contato',
        '/quem-somos',
        '/agendar/2',
        '/api/houses',
        '/api/houses/filter',
    ],
})

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
