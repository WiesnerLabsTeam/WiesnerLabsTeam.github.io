// 首页：只负责按顺序组合各个区块。调整顺序或删减区块改这里，改文字去 content/site.js
import { VueNav } from '../components/VueParts';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Process from '../components/sections/Process';
import Principles from '../components/sections/Principles';
import Updates from '../components/sections/Updates';
import Team from '../components/sections/Team';
import Join from '../components/sections/Join';
import SiteFooter from '../components/sections/SiteFooter';
import { site, nav } from '../content/site';

export default function Home() {
  return (
    <>
      <VueNav name={site.name} links={nav.links} cta={nav.cta} github={site.github} />
      <main id="top">
        <Hero />
        <Projects />
        <Process />
        <Principles />
        <Updates />
        <Team />
        <Join />
      </main>
      <SiteFooter />
    </>
  );
}
