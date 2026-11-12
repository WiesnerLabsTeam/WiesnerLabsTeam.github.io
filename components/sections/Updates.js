import Reveal from '../Reveal';
import SectionHead from '../ui/SectionHead';
import { updates } from '../../content/site';

// 动态：更新日志式列表
export default function Updates() {
  return (
    <section className="section" id="updates">
      <div className="container">
        <SectionHead {...updates.head} />
        <ol className="log">
          {updates.items.map((u, i) => (
            <Reveal key={u.title} as="li" delay={i * 80}>
              <a href="#" className="log-row">
                <time>{u.date}</time>
                <span className="log-tag">{u.tag}</span>
                <span className="log-title">{u.title}</span>
                <i aria-hidden="true">→</i>
              </a>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
