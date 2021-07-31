import typescript from 'rollup-plugin-typescript2';
import packageJson from './package.json';
import {terser} from "rollup-plugin-terser";
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

const globals = {
   ...packageJson.devDependencies,
 };

export default {
 input: 'src/index.ts', // our source file
 output: [
   {
     file: packageJson.main,
     format: 'cjs', // commonJS
     sourcemap: true,
   },
   {
     file: packageJson.module,
     format: 'esm', // ES Modules
     sourcemap: true,
   },
 ],
 plugins: [
    commonjs(),
    typescript({
      typescript: require('typescript'),
    }),
    commonjs({
      exclude: 'node_modules',
      ignoreGlobal: true,
    }),
   ],
   external: Object.keys(globals),
};