---
search: false
next:
  link: /components/button
  text: Button 按钮
---

# 最新 Vue3 + TS 高仿 ElementPlus 打造自己的组件库

## 安装

```bash
npm i @xida-ui --save
```

## 开始使用

**全局使用**

```js
// 引入所有组件
import Xida from "xida-ui";
// 引入样式
import "xida-ui/dist/index.css";

import App from "./App.vue";
// 全局使用
createApp(App).use(Xida).mount("#app");
```

```vue
<template>
  <xida-button>我是 Button</xida-button>
</template>
```

**单个导入**

Xida-ui 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

```vue
<template>
  <xida-button>我是 Button</xida-button>
</template>
<script>
import { xidaButton } from " xida-ui";
export default {
  components: { xidaButton },
};
</script>
```

<!-- 
::: api-table src=components/Button/type.ts
:::
 -->
