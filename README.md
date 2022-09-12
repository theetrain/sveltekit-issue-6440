# Reproduction for SvelteKit#6440

Issue: https://github.com/sveltejs/kit/issues/6440

**Work In Progress**

This is a reproduction repository for the above esbuild issue. To reproduce:

1. Run `npm i && npm run build` to build with adapter-node and all dependencies
2. Run `npm i --production && node build` to run the production build with only this project's production dependencies
3. (WIP) Observe runtime error
