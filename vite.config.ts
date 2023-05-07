import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'
import dns from 'dns'

// https://vitejs.dev/config/

dns.setDefaultResultOrder('verbatim')

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    server: {
      open: true,
      port: 3000,
    },
    build: {
      sourcemap: true, // Source map generation must be turned on
    },
    plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  }
})
