import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/tests/setup.ts'],
    include: ['src/tests/**/*.test.ts', 'src/tests/**/*.test.tsx'],
    coverage: {
      // istanbul provider 用 Babel 透過 vitest 既有 transform pipeline 做 TS-aware
      // instrumentation。v8 provider 會用 rollup 純 JS AST 再 parse uncovered files，
      // 遇到 TS-only 語法（parameter properties、`export type`）會 PARSE_ERROR。
      provider: 'istanbul',
      reporter: ['text', 'text-summary', 'lcov'],
      include: ['src/lib/**', 'src/stores/**', 'src/components/**'],
      exclude: [
        'src/data/seed/**',
        'src/tests/**',
        '**/*.d.ts',
        '**/index.ts', // barrel re-exports
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
