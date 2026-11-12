// 把文字拆成"词"并逐个加动画延迟（服务端渲染，无需客户端 JS）
// 中文用 Intl.Segmenter 按词切分；chars 模式按单个字符切分
export function split(text, chars = false) {
  if (chars) return [...text];
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    return [...new Intl.Segmenter('zh', { granularity: 'word' }).segment(text)].map((s) => s.segment);
  }
  return text.split(/(\s+)/).filter(Boolean);
}

export default function Words({ text, base = 0, step = 45, chars = false, className = 'wd' }) {
  return split(text, chars).map((w, i) => (
    <span key={i} className={className} style={{ '--d': `${base + i * step}ms` }}>
      {w}
    </span>
  ));
}
