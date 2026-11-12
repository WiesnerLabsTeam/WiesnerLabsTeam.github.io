/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静态导出到 out/，供 GitHub Pages 使用
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
