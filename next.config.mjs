/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
        ],
    },
    experimental: {
        serverActions: {
            allowedOrigins: ["127.0.0.1:24001"],
        },
    },
};

export default nextConfig;
