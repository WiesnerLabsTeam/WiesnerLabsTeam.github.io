import Reveal from '../Reveal';
import { VueScrollText } from '../VueParts';
import { principles } from '../../content/site';

// 理念：滚动逐词点亮的陈述 + 三条原则
export default function Principles() {
  return (
    <section className="belief" id="principles">
      <div className="container">
        <Reveal><span className="label">{principles.label}</span></Reveal>
        <VueScrollText text={principles.statement} accent={principles.accent} />
        <div className="pillars">
          {principles.items.map(([n, t, d], i) => (
            <Reveal key={n} className="pillar" delay={i * 100}>
              <span className="num">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
