/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静态导出到 out/，供 GitHub Pages 使用
  images: { unoptimized: true },
  trailingSlash: true,
  compiler: {
    // Vue esm-bundler 构建所需的编译期开关（只用 Composition API）
    define: {
      __VUE_OPTIONS_API__: 'false',
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
    },
  },
};
export default nextConfig;
