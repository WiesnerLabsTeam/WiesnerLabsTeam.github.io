'use client';

import { useEffect, useRef } from 'react';
import { createApp } from 'vue';

// 通用：把 Vue 组件挂载到 React 页面中。fallback 为 Vue 接管前的服务端内容（利于 SEO 与首屏）
export default function VueMount({ component, props, fallback = null, className }) {
  const el = useRef(null);
  useEffect(() => {
    const app = createApp(component, props);
    app.mount(el.current);
    return () => app.unmount();
  }, [component]); // eslint-disable-line react-hooks/exhaustive-deps
  return <div ref={el} className={className} suppressHydrationWarning>{fallback}</div>;
}
