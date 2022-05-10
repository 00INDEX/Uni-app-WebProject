import { defineConfig, loadEnv } from "vite";
import autoImport from 'unplugin-auto-import/vite'
import {dirResolver, DirResolverHelper} from 'vite-auto-import-resolvers'
import uni from "@dcloudio/vite-plugin-uni";
import path, { dirname } from "path"
import visualizer from 'rollup-plugin-visualizer'

plugins = []

require('dotenv').config({path: './.env'})

/**
 * @description 实现自动按需导入
 */
function createAutoImport() {
	return autoImport({
		imports: [
			'vue'
		],
		resolvers: [
			dirResolver({
				target: 'utils',
				suffix: 'Util'
			}),
			dirResolver({
				target: 'stores',
				suffix: 'Store'
			})
		],
		dts: false
	})
}

/**
 * @description 打包分析
 */

/** 
if(process.env.VITE_ENV_MODE == 'DEV'){
	plugins.push(
		visualizer({
			open: true,
			gzipSize: true,
			brotliSize: true
		})
	)
}
*/
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [uni(), createAutoImport(), DirResolverHelper(), ...plugins],
  resolve: {
	  alias: {
		  "@": path.resolve(__dirname, "src")
	  }
  }
});
