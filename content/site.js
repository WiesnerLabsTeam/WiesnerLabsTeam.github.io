// =========================================================
// 网站全部文字与数据集中在这里。改内容只需要改这个文件。
// 标注「占位」的内容之后替换为真实信息。
// =========================================================

export const site = {
  name: 'Wiesner Labs',
  fullName: 'Wiesner Labs Team',
  github: 'https://github.com/WiesnerLabsTeam',
  year: 2026,
};

// 顶部导航：[文字, 锚点]
export const nav = {
  links: [
    ['产品', '#projects'],
    ['团队', '#team'],
  ],
  cta: ['联系我们', '#join'],
};

// 首屏
export const hero = {
  label: 'AI · Developer Tools',
  titleLines: ['让复杂的工程，', '一目了然'],
  subtitle: 'Wiesner Labs 致力于打造新一代 AI 开发工具。我们的首款产品 Forma，是一款工程可视化的 AI 开发工具。',
  primary: ['了解 Forma', '#projects'],
  secondary: ['GitHub', 'https://github.com/WiesnerLabsTeam'],
  // 终端动画（示意占位，命令与输出待 Forma 确定后替换）
  // type 为输入命令（逐字打出），out 为输出（直接出现），accent 为高亮输出
  terminal: [
    { type: 'forma open ./my-project' },
    { out: '正在解析工程结构… 已识别 128 个模块' },
    { out: '✓ 工程图已生成', accent: true },
    { type: 'forma ask "支付流程经过哪些模块？"' },
    { out: '→ 已在画布中高亮 6 个相关模块', accent: true },
  ],
};

// 产品：Forma
export const projects = {
  head: {
    label: 'Product',
    title: 'Forma',
    lead: '工程可视化的新一代 AI 开发工具。',
  },
  featured: {
    name: 'Forma',
    status: '开发中',
    tagline: '工程可视化的新一代 AI 开发工具',
    description: '这里是 Forma 的详细介绍占位文字：核心能力、使用场景与适用人群。',
    tags: ['AI', '工程可视化', '开发工具'],
    meta: [['状态', '开发中'], ['类型', 'AI 开发工具'], ['平台', '待定']],
    links: [['联系我们', '#join']],
  },
};

// 团队：[名字, 角色, 头像底色]
export const team = {
  head: { label: 'Team', title: '团队成员', lead: '' },
  members: [
    ['成员 A', '负责人', 'var(--coral)'],
    ['成员 B', '前端开发', 'var(--cactus)'],
    ['成员 C', 'AI 工程', 'var(--heather)'],
    ['成员 D', '设计', 'var(--oat)'],
  ],
};

// 联系我们（command 留空则不显示命令框）
export const join = {
  title: '联系我们',
  lead: '欢迎合作与交流。',
  command: '',
  primary: ['访问 GitHub', 'https://github.com/WiesnerLabsTeam'],
  secondary: ['了解 Forma', '#projects'],
};

// 页脚
export const footer = {
  about: '致力于打造新一代 AI 开发工具的团队。',
  columns: [
    { title: '产品', links: [['Forma', '#projects']] },
    { title: '团队', links: [['成员', '#team']] },
    { title: '链接', links: [['GitHub', 'https://github.com/WiesnerLabsTeam']] },
  ],
};
