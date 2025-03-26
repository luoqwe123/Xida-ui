import { defineConfig } from 'vitepress'
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";
import apiTable from "vitepress-api-table";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "xida-ui",
  description: "一个基于vue3的组件库",
  base: "/Xida-ui/",  // 保持子路径
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "开始使用", link: "/get-started" },
      { text: "组件", link: "/components/Button" },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "指南",
        collapsed: false,
        items: [{ text: "快速开始", link: "/get-started" }],
      },
      {
        text: "基础组件",
        collapsed: false,
        items: [
          { text: "Button 按钮", link: "components/Button" },
          { text: "Message 消息", link: "components/Message" },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/luoqwe123/Xida-ui' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(containerPreview);
      md.use(componentPreview);
      md.use(apiTable)
    },
  },
})
