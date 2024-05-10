import { interopDefault } from '../shared'
import type { FlatConfigItem } from '../types'

export async function createUnicornConfig(): Promise<FlatConfigItem[]> {
  const pluginUnicorn = await interopDefault(import('eslint-plugin-unicorn'))

  return [
    {
      name: '@anyions/shared-eslint-config/unicorn/rules',
      plugins: {
        unicorn: pluginUnicorn
      },
      rules: {
        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/no-instanceof-array': 'error',
        'unicorn/no-new-array': 'error',
        'unicorn/no-new-buffer': 'error',
        'unicorn/number-literal-case': 'error',
        'unicorn/prefer-dom-node-text-content': 'error',
        'unicorn/prefer-includes': 'error',
        'unicorn/prefer-node-protocol': 'error',
        'unicorn/prefer-number-properties': 'error',
        'unicorn/prefer-string-starts-ends-with': 'error',
        'unicorn/prefer-type-error': 'error',
        'unicorn/throw-new-error': 'error'
      }
    }
  ]
}
