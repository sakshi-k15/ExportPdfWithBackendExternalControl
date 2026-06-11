const esbuild = require('esbuild');
const fs = require('fs-extra');

(async function build() {
  await fs.ensureDir('widget');

  // Use esbuild to trace the imports and bundle them into ONE file
  await esbuild.build({
    entryPoints: ['./dist/frontend/browser/main.js'],
    bundle: true,
    outfile: './widget/exportPdf-widget.js',
    format: 'esm', // Keeps it as a modern ES module
    minify: true,
  });

  console.log('Widget bundled into a single file successfully!');
})();