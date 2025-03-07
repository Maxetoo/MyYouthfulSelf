/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**'
        }, {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
            port: '',
            pathname: '/**'
        }]
    },
    compiler: {
        styledComponents: true
    }
};

export default nextConfig;