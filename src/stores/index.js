export default {
	install(app){
		const files = import.meta.globEager("/src/stores/*.js")
		for (const key in files) {
			if (key != "/src/stores/index.js") {
				console.log("正在注册状态：" + key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.')))
				app.use(files[key].default)
			}
		}
	}
}