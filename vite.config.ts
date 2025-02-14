import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    vue(),
    visualizer({
    filename: 'stats.html',  // 결과물 파일명
    template: 'treemap',     // 또는 'sunburst', 'network' 등
    gzipSize: true           // gzip 사이즈도 표시
  })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
