'use client';

import { useEffect, useRef } from 'react';

// 滚动进入视口时淡入（variant: 'up' | 'scale'）。
// 进入视口、或已经被滚过（例如点击锚点直接跳到下方）都会显示。
export default function Reveal({ children, className = '', delay = 0, variant = 'up', as: Tag = 'div', ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    let raf = 0;
    const show = () => {
      el.classList.add('in');
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
    const check = () => {
      raf = 0;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.94) show();
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check); };
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) show(); }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    io.observe(el);
    window.addEventListener('scroll', onScroll, { passive: true });
    check();
    return () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);
  return (
    <Tag ref={ref} className={`${variant === 'scale' ? 'reveal-scale' : 'reveal'} ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}
