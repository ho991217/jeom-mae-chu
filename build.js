import esbuild from 'esbuild';

const baseConfig = {
  entryPoints: ['src/index.ts'],
  outdir: 'dist',
  bundle: true,
  sourcemap: true,
};
Promise.all([
  esbuild.build({
    ...baseConfig,
    format: 'cjs',
    outExtension: {
      '.js': '.cjs',
    },
  }),

  esbuild.build({
    ...baseConfig,
    format: 'esm',
  }),
]).catch(() => {
  console.log('Build failed');
  process.exit(1);
});
