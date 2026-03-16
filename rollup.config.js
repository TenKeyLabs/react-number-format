import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const globals = {
  react: 'React',
};

const defaultConfig = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/react-number-format.es.js',
      format: 'esm',
      globals,
      exports: 'auto',
    },
    {
      file: 'dist/react-number-format.cjs.js',
      format: 'cjs',
      globals,
      exports: 'auto',
    },
    {
      file: 'dist/react-number-format.js',
      format: 'umd',
      name: 'NumberFormat',
      globals,
      exports: 'auto',
    },
  ],
  external: ['react'],
  plugins: [
    typescript({
      target: 'es2016',
    }),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
  ],
};

const minConfig = {
  ...defaultConfig,
  output: {
    file: 'dist/react-number-format.min.js',
    format: 'umd',
    name: 'NumberFormat',
    globals,
    exports: 'auto',
  },
  plugins: [...defaultConfig.plugins, terser()],
};

export default [defaultConfig, minConfig];
