import { defineComponent, h, ref, onMounted, onUnmounted, nextTick } from 'vue';

// 标签切换：items = [{ tab, title, body, chips }]，内容来自 content/site.js
export default defineComponent({
  name: 'StepTabs',
  props: { items: { type: Array, default: () => [] } },
  setup(props) {
    const active = ref(0);
    const btns = [];
    const bar = ref({ left: 0, width: 0 });
    const measure = () => {
      const b = btns[active.value];
      if (b) bar.value = { left: b.offsetLeft, width: b.offsetWidth };
    };
    const select = (i) => { active.value = i; nextTick(measure); };
    // 键盘左右切换
    const onKey = (e) => {
      if (e.key === 'ArrowRight') { select((active.value + 1) % props.items.length); btns[active.value]?.focus(); }
      if (e.key === 'ArrowLeft') { select((active.value - 1 + props.items.length) % props.items.length); btns[active.value]?.focus(); }
    };
    onMounted(() => { measure(); window.addEventListener('resize', measure); });
    onUnmounted(() => window.removeEventListener('resize', measure));

    return () => {
      const cur = props.items[active.value];
      if (!cur) return null;
      return h('div', { class: 'tabs' }, [
        h('div', { class: 'tab-list', role: 'tablist', onKeydown: onKey }, [
          ...props.items.map((it, i) => h('button', {
            ref: (el) => { btns[i] = el; },
            class: ['tab', { active: i === active.value }], role: 'tab',
            'aria-selected': i === active.value, tabindex: i === active.value ? 0 : -1,
            onClick: () => select(i),
          }, [h('span', { class: 'tab-n' }, String(i + 1).padStart(2, '0')), it.tab])),
          h('span', { class: 'tab-bar', style: { left: bar.value.left + 'px', width: bar.value.width + 'px' } }),
        ]),
        h('div', { class: 'tab-panel', key: active.value, role: 'tabpanel' }, [
          h('div', { class: 'big' }, String(active.value + 1).padStart(2, '0')),
          h('div', [
            h('h3', cur.title),
            h('p', cur.body),
            h('div', { class: 'chips' }, (cur.chips || []).map((c) => h('span', c))),
          ]),
        ]),
      ]);
    };
  },
});
