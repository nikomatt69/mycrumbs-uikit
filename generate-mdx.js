const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const outputDir = path.join(__dirname, 'docs');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

function generateMDX(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath, path.extname(filePath));
  const mdxContent = `\`\`\`${path.extname(filePath).substring(1)}\n${fileContent}\n\`\`\``;
  const outputFilePath = path.join(outputDir, `${fileName}.mdx`);
  fs.writeFileSync(outputFilePath, mdxContent);
}

function traverseDirectory(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      traverseDirectory(filePath);
    } else {
      generateMDX(filePath);
    }
  });
}

traverseDirectory(srcDir);