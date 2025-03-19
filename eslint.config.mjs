import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 忽略 abc 文件夹中的所有文件
  {
    ignores: [
      "packages/core/dist/**",
      "packages/components/**/__test__/**",
      "packages/play/**"
    ], // 忽略 abc 文件夹及其子目录下的所有文件

    
  },
  // 针对 .ts 和 .vue 文件的配置
  {
    files: ["**/*.{ts,vue}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: tseslint.parser, // 统一使用 TypeScript 解析器
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      indent: ["error", 2], // 缩进 2 个空格
      "no-console": ["error"], // 禁止使用 console
      semi: ["error", "always"], // 强制分号
     
    },
  },
  // 针对 .js 文件的配置
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      indent: ["error", 2], // 缩进 2 个空格
      semi: ["error", "always"], // 强制分号
      "no-console": "off", // 允许 .js 文件中使用 console
      "no-require": "off", 
    },
  },
  // 浏览器全局变量
  {
    languageOptions: {
      globals: {
        ...globals.browser, // 允许使用浏览器环境的全局变量
      },
    },
  },
  pluginJs.configs.recommended, // 使用 JavaScript 插件的推荐配置
  ...tseslint.configs.recommended, // 使用 TypeScript 插件的推荐配置
  ...pluginVue.configs["flat/essential"], // 使用 Vue 插件的基本配置
  
  {
    files: ["**/*.{js,cjs}"],
    languageOptions: {
      globals: {
        require: "readonly",  // require 是只读的全局变量
        module: "writable",   // module 是可写的全局变量
        exports: "writable",  // exports 也是 CommonJS 的全局变量
      },
      // 指定运行环境为 Node.js（可选，推荐）
      sourceType: "commonjs", // 表示使用 CommonJS 模块系统
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off", // 允许使用 require 引入模块
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser, // 统一使用 TypeScript 解析器
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  // 针对 Vue 文件的特定配置
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: pluginVue.vueParser, // 使用 vue-eslint-parser 解析 .vue 文件
      parserOptions: {
        parser: tseslint.parser, // <script> 使用 TypeScript 解析器
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".vue"],
      },
    },
    rules: {
      "vue/html-indent": ["error", 2], // <template> 缩进 2 个空格
      indent: ["error", 2], // <script> 和 <style> 缩进 2 个空格
      semi: ["error", "always"], // 强制分号
    
    },
  },
];