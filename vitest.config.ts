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
      // CI gate — Round 7 起設置。退步即 fail。每完成一輪 round 後可調高底線。
      // 當前實際值（2026-05-21 Round 9）：lines 64.8%、statements 64.2%、functions 61%、branches 54.4%
      // 設低 1-2 pp 留 buffer，避免每次新增功能就被卡住。
      thresholds: {
        lines: 64,
        statements: 63,
        functions: 60,
        branches: 53,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
