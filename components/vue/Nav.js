import { defineComponent, h, ref, onMounted, onUnmounted } from 'vue';

// 常驻顶部的导航（不随滚动收起）。links / cta / github 来自 content/site.js
const ghIcon = () =>
  h('svg', { viewBox: '0 0 16 16', fill: 'currentColor', 'aria-hidden': 'true' }, [
    h('path', { d: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z' }),
  ]);

export default defineComponent({
  name: 'SiteNav',
  props: {
    name: { type: String, default: 'Wiesner Labs' },
    links: { type: Array, default: () => [] },
    cta: { type: Array, default: null },
    github: { type: String, default: '' },
  },
  setup(props) {
    const scrolled = ref(false);
    const open = ref(false);
    const active = ref('');

    const onScroll = () => { scrolled.value = window.scrollY > 4; };
    const onKey = (e) => { if (e.key === 'Escape') open.value = false; };
    let io;
    onMounted(() => {
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('keydown', onKey);
      // 根据视口中央所在章节高亮对应链接
      io = new IntersectionObserver(
        (es) => es.forEach((e) => {
          if (e.isIntersecting) active.value = '#' + e.target.id;
          else if (active.value === '#' + e.target.id) active.value = '';
        }),
        { rootMargin: '-45% 0px -50% 0px' }
      );
      props.links.forEach(([, id]) => { const s = document.querySelector(id); if (s) io.observe(s); });
    });
    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
      if (io) io.disconnect();
    });
    const close = () => { open.value = false; };

    return () =>
      h('header', { class: ['nav', { scrolled: scrolled.value }] }, [
        h('div', { class: 'nav-bar' }, [
          h('a', { class: 'logo', href: '#top', 'aria-label': `${props.name} 首页` }, [
            h('span', { class: 'logo-mark', 'aria-hidden': 'true' }, [h('i'), h('i'), h('i')]),
            h('span', { class: 'logo-text' }, props.name),
          ]),
          h('nav', { class: 'nav-links', 'aria-label': '主导航' },
            props.links.map(([t, href]) => h('a', { href, class: { active: active.value === href } }, t))),
          h('div', { class: 'nav-end' }, [
            props.github ? h('a', { class: 'nav-gh', href: props.github, target: '_blank', rel: 'noreferrer', 'aria-label': 'GitHub' }, ghIcon()) : null,
            props.cta ? h('a', { class: 'nav-cta', href: props.cta[1] }, props.cta[0]) : null,
            h('button', {
              class: ['nicon', { open: open.value }], 'aria-label': open.value ? '关闭菜单' : '打开菜单',
              'aria-expanded': open.value, onClick: () => { open.value = !open.value; },
            }, h('i')),
          ]),
        ]),
        h('div', { class: ['drawer', { open: open.value }] },
          [...props.links, ...(props.cta ? [props.cta] : [])].map(([t, href], i) =>
            h('a', { href, style: { '--i': i }, onClick: close }, t))),
      ]);
  },
});
