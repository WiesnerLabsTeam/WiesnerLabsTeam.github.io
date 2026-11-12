'use client';

import { useState } from 'react';

// 可一键复制的命令行
export default function CopyCommand({ command }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };
  return (
    <div className="cmd">
      <code><span className="cmd-prompt">$</span> {command}</code>
      <button type="button" onClick={copy} className={copied ? 'done' : ''} aria-label="复制命令">
        {copied ? '已复制' : '复制'}
      </button>
    </div>
  );
}
