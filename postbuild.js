const fs = require('fs');
const path = require('path');

const standaloneDir = path.join(__dirname, '.next', 'standalone');
const targetFile = path.join(standaloneDir, 'node_modules', 'next', 'dist', 'build', 'handle-externals.js');

const fixedFunction = `function resolveNextExternal(localRes) {
  const isExternal = externalPattern.test(localRes);
  if (isExternal) {
    return \`commonjs \${(0, _normalizepathsep.normalizePathSep)(
      localRes.replace(/.*?next[/\\\\]dist/, 'next/dist').replace(/\\\\/g, '/')
    )}\`;
  }
}`;

// Match entire function including surrounding line breaks
const pattern = /function resolveNextExternal\s*\([^)]*\)\s*\{[^]*?\n\}/m;

try {
  let content = fs.readFileSync(targetFile, 'utf8');

  if (!pattern.test(content)) {
    console.error('❌ Could not find resolveNextExternal function to patch.');
    process.exit(1);
  }

  content = content.replace(pattern, fixedFunction);

  fs.writeFileSync(targetFile, content);
  console.log('✅ Successfully patched resolveNextExternal in standalone output.');
} catch (err) {
  console.error('❌ Error patching standalone build:', err);
  process.exit(1);
}
