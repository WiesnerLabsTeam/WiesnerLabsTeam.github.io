import Reveal from '../Reveal';
import SectionHead from '../ui/SectionHead';
import { VueTabs } from '../VueParts';
import { process } from '../../content/site';

// 深色区：我们如何做软件（Vue 标签切换）
export default function Process() {
  return (
    <section className="dark" id="process">
      <div className="container">
        <SectionHead {...process.head} aside={`${process.steps.length} 个阶段`} />
        <Reveal delay={120}><VueTabs items={process.steps} /></Reveal>
      </div>
    </section>
  );
}
