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
    ['理念', '#principles'],
    ['动态', '#updates'],
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

// 产品：featured 为重点展示产品，其余为占位
export const projects = {
  head: {
    label: 'Product',
    title: '我们正在打造的产品',
    lead: '我们专注于开发工具：让开发者更快地理解、设计与构建软件。',
  },
  featured: {
    name: 'Forma',
    status: '开发中',
    tagline: '工程可视化的新一代 AI 开发工具',
    description: '这里是 Forma 的详细介绍占位文字：核心能力、使用场景与适用人群。正式信息将在产品发布前补充。',
    tags: ['AI', '工程可视化', '开发工具'],
    meta: [['状态', '开发中'], ['类型', 'AI 开发工具'], ['平台', '待定']],
    links: [['关注进展', '#updates'], ['联系我们', '#join']],
  },
  upcoming: [
    { name: '更多产品', note: '筹备中（占位）' },
    { name: '更多产品', note: '筹备中（占位）' },
  ],
};

// 我们如何做产品（深色区标签切换）
export const process = {
  head: {
    label: 'How we build',
    title: '我们如何做产品',
    lead: '从想法到交付的每一步。以下为占位内容。',
  },
  steps: [
    { tab: '研究', title: '理解开发者真正的痛点', body: '从真实的开发场景出发，找到值得解决的问题。（占位）', chips: ['用户研究', '场景分析'] },
    { tab: '设计', title: '把复杂变得清晰', body: '用可视化与交互设计，让工程结构一目了然。（占位）', chips: ['交互设计', '可视化', '原型'] },
    { tab: '开发', title: 'AI 与工程结合', body: '将 AI 能力深度融入开发流程，同时保证结果可靠、可控。（占位）', chips: ['AI', '工程质量', '测试'] },
    { tab: '迭代', title: '与用户一起打磨', body: '持续收集反馈，快速迭代，让工具越用越顺手。（占位）', chips: ['反馈', '迭代', '发布'] },
  ],
};

// 理念
export const principles = {
  label: 'Principles',
  statement: '我们相信，好的开发工具应该让复杂的工程变得清晰可见，让 AI 成为开发者真正可靠的伙伴。',
  accent: ['清晰', '可见', '可靠'],
  items: [
    ['01', '可视化优先', '让代码结构与依赖关系一目了然，而不是藏在文件夹里。（占位）'],
    ['02', 'AI 辅助', 'AI 帮助理解与构建，决定权始终在开发者手中。（占位）'],
    ['03', '工程级可靠', '面向真实的大型工程，稳定、准确、可信赖。（占位）'],
  ],
};

// 动态 / 更新日志
export const updates = {
  head: { label: 'Updates', title: '最新动态', lead: '' },
  items: [
    { date: '2026-11-12', tag: '站点', title: '团队网站上线（占位）' },
    { date: '2026-11-01', tag: 'Forma', title: 'Forma 进入开发阶段（占位）' },
    { date: '2026-10-20', tag: '团队', title: 'Wiesner Labs Team 成立（占位）' },
  ],
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
  title: '一起构建下一代开发工具。',
  lead: '欢迎合作、交流，或加入我们的团队。',
  command: '',
  primary: ['访问 GitHub', 'https://github.com/WiesnerLabsTeam'],
  secondary: ['了解 Forma', '#projects'],
};

// 页脚
export const footer = {
  about: '致力于打造新一代 AI 开发工具的团队。',
  columns: [
    { title: '产品', links: [['Forma', '#projects'], ['更多产品', '#projects']] },
    { title: '团队', links: [['理念', '#principles'], ['成员', '#team'], ['动态', '#updates']] },
    { title: '链接', links: [['GitHub', 'https://github.com/WiesnerLabsTeam']] },
  ],
};
