// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      DATABASE_URL: process.env.DATABASE_URL,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "img.clerk.com",
        },
        {
          protocol: "https",
          hostname: "images.clerk.dev",
        },
      ],
    },
  };
  
  export default nextConfig;