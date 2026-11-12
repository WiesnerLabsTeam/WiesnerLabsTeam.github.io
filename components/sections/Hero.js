import ExpandCard from '../ExpandCard';
import Reveal from '../Reveal';
import Words from '../Words';
import Button from '../ui/Button';
import { VueTerminal } from '../VueParts';
import { hero } from '../../content/site';

// 首屏：随滚动长成满屏的深色卡片，左侧标题，右侧终端打字动画
export default function Hero() {
  return (
    <section className="hero-wrap" aria-label="首屏">
      <ExpandCard>
        <div className="art" aria-hidden="true">
          <div className="gridbg" />
          <div className="orb o1" /><div className="orb o2" /><div className="orb o3" />
        </div>
        <div className="hero-grid">
          <Reveal className="hero-copy">
            <span className="label on-dark">{hero.label}</span>
            <h1>
              {hero.titleLines.map((line, i) => (
                <span key={line} className="ln"><Words text={line} base={120 + i * 260} step={55} /></span>
              ))}
            </h1>
            <p className="sub">{hero.subtitle}</p>
            <div className="btns">
              <Button href={hero.primary[1]} variant="light" arrow>{hero.primary[0]}</Button>
              <Button href={hero.secondary[1]} variant="dark">{hero.secondary[0]}</Button>
            </div>
          </Reveal>
          <Reveal className="hero-term" delay={250}>
            <VueTerminal lines={hero.terminal} />
          </Reveal>
        </div>
      </ExpandCard>
    </section>
  );
}
