const fs = require('fs');
const path = require('path');

const packagePath = path.join(process.cwd(), 'node_modules', '@splinetool', 'react-spline', 'package.json');

if (fs.existsSync(packagePath)) {
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  pkg.exports = {
    ".": {
      "types": "./dist/Spline.d.ts",
      "require": "./dist/react-spline.js",
      "import": "./dist/react-spline.js",
      "default": "./dist/react-spline.js"
    },
    "./next": {
      "types": "./dist/next/SplineNext.d.ts",
      "require": "./dist/react-spline-next.js",
      "import": "./dist/react-spline-next.js",
      "default": "./dist/react-spline-next.js"
    },
    "./dist/react-spline.js": "./dist/react-spline.js"
  };

  fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));
  console.log('✅ Successfully patched @splinetool/react-spline package.json for Next.js Webpack resolution.');
} else {
  console.log('⚠️ Could not find @splinetool/react-spline to patch. Ensure it is installed.');
}
