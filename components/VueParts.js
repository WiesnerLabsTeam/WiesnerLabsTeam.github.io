'use client';

// React ↔ Vue 桥接：每个 Vue 组件在这里包一层，供页面直接使用
import './vue-flags'; // 必须最先引入
import VueMount from './VueMount';
import Nav from './vue/Nav';
import Terminal from './vue/Terminal';

export const VueNav = (props) => (
  <VueMount component={Nav} props={props} className="nav-shell" fallback={<div style={{ height: 'var(--nav-h)' }} />} />
);
export const VueTerminal = ({ lines }) => (
  <VueMount component={Terminal} props={{ lines }} fallback={<div className="term term-ph" />} />
);
