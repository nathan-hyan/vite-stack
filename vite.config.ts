/* eslint-disable import/no-extraneous-dependencies */
/// <reference types='vitest' />
/// <reference types='vite/client' />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

interface Props {
  mode: string;
}

// https://vitejs.dev/config/
export default ({ mode }: Props) => {
  const generateScopedName =
    mode === 'production' ? '__[hash:base64:2]' : '[local]_[hash:base64:2]';

  return defineConfig({
    plugins: [react()],
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: ['./src/setupTest.ts'],
      css: true,
      coverage: {
        enabled: true,
        skipFull: true,
        provider: 'v8',
        functions: 50,
        lines: 50,
        branches: 100,
        statements: 50,
        thresholdAutoUpdate: true,
      },
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName,
      },
    },
  });
};
