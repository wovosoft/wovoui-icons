import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

/** @type {import('vite').UserConfig} */
export default defineConfig({
    plugins: [
        vue({}),
    ],
    build: {
        sourcemap: true,
        cssCodeSplit: false,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'wovoui-icons',
            formats: ['es'],
            fileName: (format) => `[name].${format}.mjs`
        },
        rolldownOptions: {
            external: ['vue', 'axios'],
            // input: {
            //     demo: path.resolve(__dirname, 'docs/app.ts')
            // },
            output: {
                globals: {
                    vue: 'Vue',
                    axios: 'axios'
                }
            }
        }
    }
})
