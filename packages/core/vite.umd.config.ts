import { defineConfig } from "vite";
import { readFile } from "fs";
import { resolve } from "path";
// import { delay, defer } from "lodash-es";
// import { compression } from "vite-plugin-compression2"; // 文件压缩
// import { visualizer } from "rollup-plugin-visualizer";  // 生成构建分析图

// import shell from "shelljs";
import vue from "@vitejs/plugin-vue"; 
// import { hooksPlugin as hooks } from "@toy-element/vite-plugins";
// import terser from "@rollup/plugin-terser"; // 代码压缩和混淆

// const TRY_MOVE_STYLES_DELAY = 800 as const;

// const isProd = process.env.NODE_ENV === "production";
// const isDev = process.env.NODE_ENV === "development";
// const isTest = process.env.NODE_ENV === "test";
// function moveStyles() {
//   readFile("./dist/umd/index.css.gz", (err) => {
//     if (err) return delay(moveStyles, TRY_MOVE_STYLES_DELAY);
//     defer(() => shell.cp("./dist/umd/index.css", "./dist/index.css"));
//   });
// }

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "dist/umd",
    lib: {    // 配置库模式构建。
      entry: resolve(__dirname, "./index.ts"),
      name: "Xida-ui",  // UMD 全局变量名，浏览器中通过 <script> 使用时暴露为 Xida-ui
      fileName: "index",  // 输出文件名（生成 index.umd.js）。
      formats: ["umd"],   // 仅输出 UMD 格式
    },
    rollupOptions: {
      external: ["vue"],  // 将 Vue 作为外部依赖，不打包进 UMD
      output: {
        exports: "named",
        globals: {
          vue: "Vue",  // 映射外部依赖的全局变量名
        },
        assetFileNames: (assetInfo) => {
          // 重命名输出资产文件，style.css 改为 index.css
          if (assetInfo.name === "style.css") return "index.css";
          return assetInfo.name as string;
        },
      },
    },
  },
});