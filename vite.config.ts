/*
 * @Author: Andrew Q
 * @Date: 2021-09-18 14:31:55
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-09-18 16:23:33
 * @Description:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [vue(), dts()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/lib/main.ts'),
      name: 'mygao-test',
      fileName: (format) => `mygao-test.${format}.js`,
    },

    // rollup配置
    rollupOptions: {
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'vue-demi': 'vueDemi',
        },
      },
      external: ['vue', 'vue-demi'],
    },
  },
});
