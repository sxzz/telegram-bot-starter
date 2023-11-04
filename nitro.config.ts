export default defineNitroConfig({
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        noEmit: true,
        moduleResolution: 'bundler',
      },
    },
  },
})
