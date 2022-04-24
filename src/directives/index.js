export default {
	install(app){
		const files = import.meta.globEager("/directives/*.js")
		for (const key in files) {
			if (key != "/directives/index.js") {
				app.directive(key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.')), files[key].default)
			}
		}
	}
}