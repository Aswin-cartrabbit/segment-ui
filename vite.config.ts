import react from '@vitejs/plugin-react-swc'
import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'index',
      formats: ['es', 'umd'],
      fileName: `index`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'tailwindcss',
        'react/jsx-runtime',
        'react-hook-form',
        'lodash',
        'react-select',
        'react-select/creatable',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
          'react/jsx-runtime': 'jsxRuntime',
          'react-hook-form': 'reactHookForm',
          lodash: '_',
          'react-select': 'Select',
          'react-select/creatable': 'CreatableSelect',
        },
      },
    },
  },
})