/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

interface Props {
  mode: string;
}

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
        reporter: ['text', 'json-summary', 'json'],
        enabled: true,
        skipFull: false,
        provider: 'v8',
      },
    },
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
        generateScopedName,
      },
    },
    resolve: {
      alias: [
        {
          find: '~screens',
          replacement: path.resolve(__dirname, 'src/screens'),
        },
        {
          find: '~assets',
          replacement: path.resolve(__dirname, 'src/assets'),
        },
        {
          find: '~scss',
          replacement: path.resolve(__dirname, 'src/scss'),
        },
      ],
    },
  });
};
