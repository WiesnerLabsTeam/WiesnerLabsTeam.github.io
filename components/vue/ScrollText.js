import { defineComponent, h, ref, onMounted, onUnmounted } from 'vue';

// 滚动时逐词点亮的开场陈述（Anthropic 首页开场文字的效果）
export default defineComponent({
  name: 'ScrollText',
  props: { text: String, accent: { type: Array, default: () => [] } },
  setup(props) {
    const root = ref(null);
    const progress = ref(0);
    // 按标点或空格切成"词"，中文也能逐段点亮
    const words = typeof Intl !== 'undefined' && Intl.Segmenter
      ? [...new Intl.Segmenter('zh', { granularity: 'word' }).segment(props.text)].map((s) => s.segment)
      : props.text.split(/(?<=[，。、])|\s+/).filter(Boolean);
    const total = words.length;
    const update = () => {
      const el = root.value;
      if (!el) return;
      const r = el.getBoundingClientRect(), vh = window.innerHeight;
      // 元素顶部从视口 90% 走到 30% 的过程中，进度 0 → 1
      progress.value = Math.min(1, Math.max(0, (vh * 0.9 - r.top) / (vh * 0.6 + r.height * 0.4)));
    };
    onMounted(() => { update(); window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update); });
    onUnmounted(() => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); });
    return () =>
      h('p', { ref: root, class: 'statement-lit' },
        words.map((w, i) =>
          h('span', { class: ['w', { lit: i / total < progress.value * 1.15, accent: props.accent.some((a) => w.includes(a)) }] }, w)));
  },
});
