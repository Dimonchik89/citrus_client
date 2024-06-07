import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['ua', 'ru'],
    defaultLocale: 'ua'
})

export const config = {
    matcher: ['/', '/(ua|ru)/:path*']
}