// 应用界面示意（纯 CSS 占位图，带轻微动画）。拿到 Forma 截图后可替换为 <img>
export default function AppPreview({ title = 'App' }) {
  return (
    <div className="preview" aria-hidden="true">
      <div className="pv-bar">
        <i /><i /><i />
        <span>{title}</span>
      </div>
      <div className="pv-body">
        <aside className="pv-side">
          {Array.from({ length: 6 }, (_, i) => <b key={i} style={{ width: `${55 + ((i * 17) % 35)}%` }} />)}
        </aside>
        <div className="pv-main">
          <div className="pv-title" />
          <div className="pv-cards">
            <div className="pv-card c1" /><div className="pv-card c2" /><div className="pv-card c3" />
          </div>
          <div className="pv-lines">
            {Array.from({ length: 4 }, (_, i) => <b key={i} style={{ width: `${90 - i * 14}%`, '--i': i }} />)}
          </div>
        </div>
      </div>
      <div className="pv-cursor" />
    </div>
  );
}
