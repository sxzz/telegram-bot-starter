export default defineNitroConfig({
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        module: 'preserve',
        moduleDetection: 'force',
        isolatedModules: true,
        types: ['node'],
      },
    },
  },
  compatibilityDate: 'latest',
})
