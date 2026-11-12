import Reveal from '../Reveal';
import SectionHead from '../ui/SectionHead';
import Button from '../ui/Button';
import AppPreview from '../ui/AppPreview';
import { projects } from '../../content/site';

// 产品区：Forma 大卡片
export default function Projects() {
  const f = projects.featured;
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead {...projects.head} />

        <Reveal className="feature">
          <div className="feature-info">
            <div className="status"><span className="dot" />{f.status}</div>
            <h3 className="feature-name">{f.name}</h3>
            <p className="feature-tagline">{f.tagline}</p>
            <p className="feature-desc">{f.description}</p>
            <div className="tags">{f.tags.map((t) => <span key={t}>{t}</span>)}</div>
            <dl className="meta">
              {f.meta.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
            <div className="btns">
              {f.links.map(([text, href], i) => (
                <Button key={text} href={href} variant={i === 0 ? 'primary' : 'ghost'} arrow>{text}</Button>
              ))}
            </div>
          </div>
          <div className="feature-visual"><AppPreview title={f.name} /></div>
        </Reveal>
      </div>
    </section>
  );
}
