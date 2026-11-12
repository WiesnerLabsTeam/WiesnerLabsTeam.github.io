import Reveal from '../Reveal';

// 通用区块标题：等宽小标签 + 标题 + 可选说明 + 可选右侧内容
export default function SectionHead({ label, title, lead, aside }) {
  return (
    <Reveal className="shead">
      <div className="shead-top">
        <span className="label">{label}</span>
        {aside ? <span className="label muted">{aside}</span> : null}
      </div>
      <h2 className="h2">{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </Reveal>
  );
}
