/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.refabry.com",
        port: "",
        pathname: "/storage/product/**",
      },
    ],
  },
};

export default nextConfig;
