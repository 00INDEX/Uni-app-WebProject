import { defineConfig } from "vite";
import autoImport from 'unplugin-auto-import/vite'
import {dirResolver, DirResolverHelper} from 'vite-auto-import-resolvers'
import uni from "@dcloudio/vite-plugin-uni";
import path, { dirname } from "path"

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
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [uni(), createAutoImport(), DirResolverHelper()],
  resolve: {
	  alias: {
		  "@": path.resolve(__dirname, "src")
	  }
  }
});
