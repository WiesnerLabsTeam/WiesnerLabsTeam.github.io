import Reveal from '../Reveal';
import SectionHead from '../ui/SectionHead';
import { team } from '../../content/site';

// 团队：头像卡片（暂以名字首字作为头像）
export default function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <SectionHead {...team.head} aside={`${team.members.length} 位成员`} />
        <div className="people">
          {team.members.map(([name, role, color], i) => (
            <Reveal key={name} className="person" variant="scale" delay={i * 90}>
              <div className="avatar" style={{ '--bg': color }}><span>{name.slice(-1)}</span></div>
              <b>{name}</b>
              <span>{role}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
