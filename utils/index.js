export default {
	install(app){
		const files = import.meta.globEager("/utils/*.js")
		for (const key in files) {
			if (key != "/utils/index.js") {
				console.log("正在注册API：" + key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.')))
				app.config.globalProperties['$' + key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))] = files[key].default
			}
		}
	}
}