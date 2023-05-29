/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ['@prisma/client', 'bcrypt'] // to run only on server
    }
}

module.exports = nextConfig
