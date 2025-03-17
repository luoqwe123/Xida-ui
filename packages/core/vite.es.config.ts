import { defineConfig } from "vite";
import { resolve } from "path";
// import { readdirSync, readdir } from "fs";
import { filter, map } from "lodash-es";
// import { visualizer } from "rollup-plugin-visualizer";

import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";   // 用于打包后的根据类型进行分包
import { readdirSync } from "fs";
// import shell from "shelljs";
// import { hooksPlugin as hooks } from "@xida-ui/vite-plugins";
// import terser from "@rollup/plugin-terser";

// const TRY_MOVE_STYLES_DELAY = 800 as const;

// const isProd = process.env.NODE_ENV === "production";
// const isDev = process.env.NODE_ENV === "development";
// const isTest = process.env.NODE_ENV === "test";

function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true });
 
  return map(
    filter(entries, (entry:any) => entry.isDirectory()),
    (entry:any) => entry.name
  );
}

// function moveStyles() {
//   readdir("./dist/es/theme", (err) => {
//     if (err) return delay(moveStyles, TRY_MOVE_STYLES_DELAY);
//     defer(() => shell.mv("./dist/es/theme", "./dist"));
//   });
// }

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types",
    }),
  ],
  build: {
    outDir: "dist/es",
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "Xida-ui",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator",
      ],
      output: {
       
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          if (
            assetInfo.type === "asset" &&
            /\.(css)$/i.test(assetInfo.name as string)
          ) {
            return "theme/[name].[ext]";
          }
          return assetInfo.name as string;
        },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("/packages/hooks")) {
            return "hooks";
          }
          if (
            id.includes("/packages/utils") ||
            id.includes("plugin-vue:export-helper")
          ) {
            return "utils";
          }
          for (const dirName of getDirectoriesSync("../components")) {
            if (id.includes(`/packages/components/${dirName}`)) {
              return dirName;
            }
          }
        },
      },
    },
  },
});


