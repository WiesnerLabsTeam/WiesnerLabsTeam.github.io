'use client';

import { useEffect, useRef } from 'react';

// 仿 anthropic 首页"media-expanding"卡片：随滚动把 --grow 从 0 推到 1，
// CSS 用它把 clip-path 的内缩与圆角收为 0，卡片因此长成满屏。
export default function ExpandCard({ children, className = '', ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (document.documentElement.classList.contains('rm')) {
      el.style.setProperty('--grow', '1');
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const docTop = el.getBoundingClientRect().top + window.scrollY;
      // 卡片顶部进入视口 85% 处开始生长，再滚动 0.6 屏完成
      const start = Math.max(0, docTop - vh * 0.85);
      const g = Math.min(1, Math.max(0, (window.scrollY - start) / (vh * 0.6)));
      el.style.setProperty('--grow', g.toFixed(4));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return (
    <div ref={ref} className={`xcard ${className}`} {...rest}>
      {children}
    </div>
  );
}
