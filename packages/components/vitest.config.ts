
import { defineConfig, } from 'vitest/config';
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"



export default defineConfig({
    plugins: [vue(), vueJsx()],   // vueJsx 测试文件的后缀名为jsx  / tsx
    test: {
        environment: 'jsdom',
        globals: true,   
        coverage: {
            provider: 'v8', // 或 'istanbul'
            reporter: ['text', 'html'], // 指定报告格式
          },
    },
})
