import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  // unocss: true,
  vue: true,
  ignores: [
    '*.sh',
    'node_modules',
    '*.md',
    '*.woff',
    '*.ttf',
    '*.idea',
    '/public',
    '/docs',
    '.husky',
    '.local',
    '/bin',
    'Dockerfile',
  ],
})
