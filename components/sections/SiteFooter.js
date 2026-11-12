import { site, footer } from '../../content/site';

// 页脚：简介 + 链接栏 + 版权小字
export default function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="fgrid">
          <div className="about">
            <span className="wm">{site.name}</span>
            <p>{footer.about}</p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>{col.links.map(([t, href]) => <li key={t}><a href={href}>{t}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="flegal">
          <span>© {site.year} {site.fullName}</span>
          <span>Built with Next.js &amp; Vue</span>
        </div>
      </div>
    </footer>
  );
}
