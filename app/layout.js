import './globals.css';
import ScrollVars from '../components/ScrollVars';

export const metadata = {
  title: 'Wiesner Labs Team',
  description: 'Wiesner Labs Team organization website',
};

// 在首帧前判断是否启用"减少动态效果"模式；?motion=full 可强制完整动效
const motionScript = `try{var f=/[?&]motion=full\\b/.test(location.search);if(!f&&matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('rm')}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <ScrollVars />
        {children}
      </body>
    </html>
  );
}
