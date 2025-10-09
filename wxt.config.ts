import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'LeetJump - Leetcode quick search extension',
    description: 'Quick LeetCode problem search with Alt+L - minimal, fast, and clean interface',
    version: '1.0.0',
    permissions: ['alarms'],
    host_permissions: ['https://leetcode.com/*', 'https://leetcode.cn/*'],
    commands: {
      _execute_action: {
        suggested_key: {
          default: 'Ctrl+Alt+L',
          mac: 'Ctrl+Alt+L',
          windows: 'Ctrl+Alt+L',
          chromeos: 'Ctrl+Alt+L',
          linux: 'Ctrl+Alt+L',
        },
        description: 'Activate the extension',
      },
    },
  },
});
