import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    return defineConfig({
        plugins: [vue()],

        server: {
            proxy: {
                '^/api': {
                    target: "https://development.k8s.vps2day.com",
                    pathRewrite: { '^/api': '' },
                    changeOrigin: true,
                    secure: true,
                    cookieDomainRewrite: {
                        '.vps2day.com': 'localhost'
                    },
                },
            },
        },

        resolve: {
            alias: {
                '@': resolve(__dirname, 'src')
            },
            extensions: ['.js', '.vue', '.json']
        }
    });
}