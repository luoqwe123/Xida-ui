// replacePrefixEnhanced.js
const fs = require('fs').promises;
const path = require('path');

const args = process.argv.slice(2);
const inputPath = args[0];
const outputPath = args[1] || inputPath; // 如果未提供输出路径，则覆盖原文件

// if (!inputPath) {
//   console.error('请提供输入文件路径，例如：node replacePrefixEnhanced.js ./input.scss [./output.scss]');
//   process.exit(1);
// }

async function replacePrefix(inputFile, outputFile) {
  try {
    const absoluteInputPath = path.resolve(__dirname, inputFile);
    const absoluteOutputPath = path.resolve(__dirname, outputFile);
    console.log(`读取文件：${absoluteInputPath}`);
    console.log(`输出文件：${absoluteOutputPath}`);

    const content = await fs.readFile(absoluteInputPath, 'utf8');
    // 只替换 CSS 变量中的 --er-（以 -- 开头）
    const modifiedContent = content.replace(/--er-(\w+)/g, '--xida-$1');

    if (content === modifiedContent) {
      console.log('未找到需要替换的内容。');
      return;
    }

    await fs.writeFile(absoluteOutputPath, modifiedContent, 'utf8');
    console.log('替换完成');
  } catch (error) {
    console.error('发生错误：', error.message);
    process.exit(1);
  }
}

// ?replacePrefix(inputPath, outputPath);
console.log(process.cwd())