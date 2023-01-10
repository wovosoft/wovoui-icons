import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    build: {
        cssCodeSplit: false,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'wovoui-icons',
            fileName: (format) => `index.${format}.mjs`
        },
        rollupOptions: {
            external: ['vue'],
            // input: {
            //     demo: path.resolve(__dirname, 'docs/app.ts')
            // },
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
