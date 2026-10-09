import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceFile = resolve(projectRoot, 'index.html');
const outputDir = resolve(projectRoot, 'dist');
const outputFile = resolve(outputDir, 'index.html');

const html = await readFile(sourceFile, 'utf8');
const requiredFragments = [
  '<!doctype html>',
  '<meta name="viewport"',
  '<title>',
  'id="about"',
  'id="products"',
  'id="custom"',
  'id="contact"',
];

for (const fragment of requiredFragments) {
  if (!html.toLowerCase().includes(fragment.toLowerCase())) {
    throw new Error(`构建失败：index.html 缺少必要内容 ${fragment}`);
  }
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await writeFile(outputFile, html, 'utf8');

const publicDir = resolve(projectRoot, 'public');
try {
  await cp(publicDir, outputDir, { recursive: true });
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

console.log(`构建完成：${outputFile}`);
