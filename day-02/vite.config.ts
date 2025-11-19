/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../node_modules/.vite/day-02',

  plugins: [nxViteTsPaths()],

  test: {
    globals: true,
    cache: {
      dir: '../node_modules/.vitest/day-02',
    },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../coverage/day-02',
      provider: 'v8',
    },
  },
});

