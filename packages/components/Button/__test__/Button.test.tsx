import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import XidaButton from '../Button.vue'; // 假设组件路径

describe('XidaButton', () => {
  // 测试 1：默认渲染为 button 标签
  it('renders as a button by default', () => {
    const wrapper = mount(XidaButton);
    expect(wrapper.element.tagName.toLowerCase()).toBe('button');
    expect(wrapper.classes()).toContain('xida-button');
    expect(wrapper.attributes('type')).toBe('button');
  });

  // 测试 2：自定义 tag 渲染为指定标签
  it('renders custom tag when provided', () => {
    const wrapper = mount(XidaButton, {
      props: { tag: 'a' },
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe('a');
    expect(wrapper.classes()).toContain('xida-button');
    expect(wrapper.attributes('type')).toBeUndefined(); // 非 button 无 type
  });

  // 测试 3：插槽内容渲染
  it('renders slot content', () => {
    const wrapper = mount(XidaButton, {
      slots: {
        default: 'Click Me',
      },
    });
    expect(wrapper.text()).toBe('Click Me');
  });

  // 测试 4：动态类名根据 props 生成
  it('applies correct classes based on props', () => {
    const wrapper = mount(XidaButton, {
      props: {
        type: 'primary',
        size: 'large',
        plain: true,
        loading: true,
        circle: true,
        disabled: true,
        round: true,
      },
    });
    expect(wrapper.classes()).toContain('xida-button--primary');
    expect(wrapper.classes()).toContain('xida-button--large');
    expect(wrapper.classes()).toContain('is-plain');
    expect(wrapper.classes()).toContain('is-loading');
    expect(wrapper.classes()).toContain('is-circle');
    expect(wrapper.classes()).toContain('is-disabled');
    expect(wrapper.classes()).toContain('is-round');
  });

  // 测试 5：禁用状态
  it('sets disabled attribute when disabled or loading', () => {
    const wrapperDisabled = mount(XidaButton, {
      props: { disabled: true },
    });
    expect(wrapperDisabled.attributes('disabled')).toBeDefined();

    const wrapperLoading = mount(XidaButton, {
      props: { loading: true },
    });
    expect(wrapperLoading.attributes('disabled')).toBeDefined();

    const wrapperNormal = mount(XidaButton, {
      props: { disabled: false, loading: false },
    });
    expect(wrapperNormal.attributes('disabled')).toBeUndefined();
  });

  // 测试 6：nativeType 仅在 button 标签生效
  it('applies nativeType only to button tag', () => {
    const wrapperButton = mount(XidaButton, {
      props: { nativeType: 'submit' },
    });
    expect(wrapperButton.attributes('type')).toBe('submit');

    const wrapperLink = mount(XidaButton, {
      props: { tag: 'a', nativeType: 'submit' },
    });
    expect(wrapperLink.attributes('type')).toBeUndefined();
  });

  // 测试 7：ref 绑定
  it('binds ref to the component', () => {
    const wrapper = mount(XidaButton);
    // @ts-ignore
    expect(wrapper.vm.$refs._ref).toBeInstanceOf(HTMLButtonElement);
  });
});