'use client';

import { useEffect, useRef } from 'react';
import { createApp, defineComponent, h, ref } from 'vue';

// 一个最小的 Vue 3 组件（使用渲染函数，无需额外编译配置）
const Counter = defineComponent({
  name: 'Counter',
  setup() {
    const count = ref(0);
    return () =>
      h('div', { style: 'border:1px solid #888;padding:12px;border-radius:8px' }, [
        h('p', '这一段由 Vue 3 渲染（客户端挂载）。'),
        h('button', { onClick: () => count.value++ }, `点击次数：${count.value}`),
      ]);
  },
});

export default function VueApp() {
  const el = useRef(null);
  useEffect(() => {
    const app = createApp(Counter);
    app.mount(el.current);
    return () => app.unmount();
  }, []);
  return <div ref={el} />;
}
