const { createPkgGraph } = require('@pnpm/workspace.pkgs-graph');

const manifest = require('./package.json');

const workspaceManifest = { dir: __dirname, manifest };

console.log(createPkgGraph([workspaceManifest]));
