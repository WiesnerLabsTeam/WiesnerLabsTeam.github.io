// Vue esm-bundler 的编译期开关。开发模式下 Turbopack 不替换 node_modules 里的常量，
// 所以在 Vue 加载前先挂到全局上（必须在 import 'vue' 之前被引入）。
if (typeof globalThis !== 'undefined') {
  globalThis.__VUE_OPTIONS_API__ = false;
  globalThis.__VUE_PROD_DEVTOOLS__ = false;
  globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
}
