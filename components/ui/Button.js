// 通用按钮：variant = 'primary' | 'light' | 'dark' | 'ghost'
export default function Button({ href, children, variant = 'primary', arrow = false }) {
  const external = /^https?:/.test(href);
  return (
    <a className={`btn btn-${variant}`} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}
      {arrow || external ? <i aria-hidden="true">{external ? '↗' : '→'}</i> : null}
    </a>
  );
}
