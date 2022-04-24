import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path, { dirname } from "path"

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [uni()],
  resolve: {
	  alias: {
		  "@": path.resolve(__dirname, "src")
	  }
  }
});
