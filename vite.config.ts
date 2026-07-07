import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    build: {
        sourcemap: true,
        cssCodeSplit: false,
        rolldownOptions: {
            input: path.resolve(__dirname, 'src/index.ts'),
            external: ['vue'],
            output: {
                preserveModules: true,
                preserveModulesRoot: 'src',
                entryFileNames: '[name].mjs',
                chunkFileNames: '[name].mjs',
                globals: { vue: 'Vue' },
            }
        }
    }
})