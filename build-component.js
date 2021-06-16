const fs = require('fs-extra');
const concat = require('concat');

build = async () => {
  const files = [
    './dist/web-components/runtime-es5.js',
    './dist/web-components/polyfills-es5.js',
    './dist/web-components/polyfills-es2015.js',
    './dist/web-components/main-es5.js'
  ]

  await fs.ensureDir('widget')
  await concat(files, 'widget/user-widget.js')
}

build();
