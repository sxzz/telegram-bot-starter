import { sxzz } from '@sxzz/eslint-config'
export default sxzz([
  {
    ignores: ['**/.nitro'],
  },
  {
    files: ['routes/*.ts'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
])
