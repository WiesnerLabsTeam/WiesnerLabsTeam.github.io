export const metadata = {
  title: 'Wiesner Labs Team',
  description: 'Wiesner Labs Team organization website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 24 }}>
        {children}
      </body>
    </html>
  );
}
