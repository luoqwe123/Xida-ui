---
title: Message
description: Message 组件文档


prev:
  link: /button
  text: Button 组件
---

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`content`、 `center`定义按钮的样式。通过不同状态来显示「成功、警告、消息、错误」等类的操作反馈

::: preview
demo-preview=../demo/Message/Basic.vue
:::

## 禁用状态

你可以使用 `showClose` 属性来添加关闭按钮。。

::: preview
demo-preview=../demo/Message/ShowClose.vue
:::



## Message API

Message 组件是一个轻量级的消息提示组件，支持多种类型和配置选项，用于在页面上显示通知信息。

### Props

| Name              | Description                       | Type                                                             | Default |
| ----------------- | --------------------------------- | ---------------------------------------------------------------- | ------- |
| type | 消息类型，影响显示样式 | "primary" \| "success" \| "warning" \| "danger" \| "info" | info |
| content        | 消息的显示内容                        | string                                                    | this is info |
| zIndex         | 消息的层级                      | number                                                    | 99           |
| showClose      | 是否显示关闭按钮                      | boolean                                                   | false        |
| offset         | 距离顶部的偏移量 (像素)               | number                                                    | 10           |
| onClose        | 关闭时的回调函数                      | () => void                                                | -            |
| duration       | 显示持续时间 (毫秒)，0 表示不自动关闭 | number                                                    | 3000         |
| transitionName | 过渡动画名称                          | string                                                    | -            |
| center         | 内容是否水平居中                      | boolean                                                   | true         |



