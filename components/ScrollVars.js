'use client';

import { useEffect } from 'react';

// 全局滚动行为：
// 1. 把滚动位置写入 CSS 变量 --prog（0~1），用于顶部进度条
// 2. 接管页内锚点链接（href="#..."），用缓动动画平滑滚动到目标，并扣除导航栏高度
export default function ScrollVars() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty('--prog', max > 0 ? String(Math.min(1, window.scrollY / max)) : '0');
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    // —— 平滑滚动 ——
    let anim = 0;
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2); // easeInOutCubic
    const scrollToY = (to) => {
      cancelAnimationFrame(anim);
      const from = window.scrollY, dist = to - from;
      if (Math.abs(dist) < 2) return;
      // 距离越远时间越长，限制在 0.6 ~ 1.2 秒
      const dur = Math.min(1200, Math.max(600, Math.abs(dist) * 0.35));
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        window.scrollTo(0, from + dist * ease(p));
        if (p < 1) anim = requestAnimationFrame(step);
      };
      anim = requestAnimationFrame(step);
    };
    // 用户自己滚动滚轮或触摸时，立即停止动画
    const cancel = () => cancelAnimationFrame(anim);

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = id === '#top' ? document.body : document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const navH = parseFloat(getComputedStyle(root).getPropertyValue('--nav-h')) || 64;
      const y = id === '#top' ? 0 : target.getBoundingClientRect().top + window.scrollY - navH;
      scrollToY(Math.max(0, y));
      history.replaceState(null, '', id);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('wheel', cancel, { passive: true });
    window.addEventListener('touchstart', cancel, { passive: true });
    document.addEventListener('click', onClick);
    return () => {
      cancelAnimationFrame(anim);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('wheel', cancel);
      window.removeEventListener('touchstart', cancel);
      document.removeEventListener('click', onClick);
    };
  }, []);
  return <div className="progress" aria-hidden="true" />;
}
