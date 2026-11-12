import { defineComponent, h, ref, onMounted, onUnmounted } from 'vue';

// 终端打字动画：命令逐字打出，输出整行出现，播完停顿后循环
export default defineComponent({
  name: 'TerminalDemo',
  props: { lines: { type: Array, default: () => [] } },
  setup(props) {
    const shown = ref([]); // 已显示的行：{ text, kind, accent }
    const typing = ref(''); // 正在输入的命令
    const root = ref(null);
    let timer, alive = true, started = false, io;
    const wait = (ms) => new Promise((r) => { timer = setTimeout(r, ms); });

    const play = async () => {
      while (alive) {
        shown.value = []; typing.value = '';
        for (const line of props.lines) {
          if (!alive) return;
          if (line.type) {
            for (let i = 1; i <= line.type.length && alive; i++) {
              typing.value = line.type.slice(0, i);
              await wait(28 + Math.random() * 40);
            }
            await wait(320);
            shown.value = [...shown.value, { text: line.type, kind: 'cmd' }];
            typing.value = '';
            await wait(260);
          } else {
            shown.value = [...shown.value, { text: line.out, kind: 'out', accent: line.accent }];
            await wait(420);
          }
        }
        await wait(3200);
      }
    };

    onMounted(() => {
      // 减少动态效果时直接显示全部内容
      if (document.documentElement.classList.contains('rm')) {
        shown.value = props.lines.map((l) => (l.type ? { text: l.type, kind: 'cmd' } : { text: l.out, kind: 'out', accent: l.accent }));
        return;
      }
      // 进入视口后才开始播放
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !started) { started = true; play(); }
      }, { threshold: 0.3 });
      io.observe(root.value);
    });
    onUnmounted(() => { alive = false; clearTimeout(timer); if (io) io.disconnect(); });

    const prompt = () => h('span', { class: 't-prompt' }, '$ ');
    return () => h('div', { ref: root, class: 'term' }, [
      h('div', { class: 'term-bar' }, [h('i'), h('i'), h('i'), h('span', 'forma — ~/my-project')]),
      h('div', { class: 'term-body' }, [
        ...shown.value.map((l, i) =>
          h('div', { key: i, class: ['t-line', `t-${l.kind}`, { 't-accent': l.accent }] }, l.kind === 'cmd' ? [prompt(), l.text] : l.text)),
        h('div', { class: 't-line t-cmd' }, [prompt(), typing.value, h('span', { class: 't-caret' })]),
      ]),
    ]);
  },
});
