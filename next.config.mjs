/** @type {import('next').NextConfig} */
const nextConfig = {
        pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
        webpack: (config) => {
            config.module.rules.push({
                test: /\.md$/,
                type: 'asset/source'
            });
            return config;
        }
};

export default nextConfig;
