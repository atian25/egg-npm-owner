#!/usr/bin/env node

const assert = require('assert');
const { execSync } = require('child_process');

const pkg = process.argv[ 2 ];
assert(pkg, 'Usage: npx egg-npm-owner <package name>');

run(`npm owner ls ${pkg}`);

[ 'fengmk2', 'popomore', 'dead_horse' ].forEach(user => {
  run(`npm owner add ${user} ${pkg}`);
});

run(`npm owner ls ${pkg}`);

console.log('\nDone.');

function run(cmd) {
  console.log('\x1b[33m➜ %s\x1b[0m', cmd);
  execSync(cmd, { stdio: 'inherit' });
}
