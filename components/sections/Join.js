import Reveal from '../Reveal';
import Button from '../ui/Button';
import CopyCommand from '../ui/CopyCommand';
import { join } from '../../content/site';

// 加入我们：标题 + 可复制的命令 + 按钮
export default function Join() {
  return (
    <section className="join" id="join">
      <div className="container">
        <Reveal className="join-box">
          <h2 className="h2">{join.title}</h2>
          <p className="lead">{join.lead}</p>
          {join.command ? <CopyCommand command={join.command} /> : null}
          <div className="btns">
            <Button href={join.primary[1]} variant="light">{join.primary[0]}</Button>
            <Button href={join.secondary[1]} variant="dark" arrow>{join.secondary[0]}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
