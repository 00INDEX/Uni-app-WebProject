# 工程文件夹说明

|路径|说明|
|---|---|
|./directives/|自定义指令目录|
|./components/|自定义组件目录|
|./pages/|前端页面|
|./static/|静态资源|
|./store/|Vuex全局状态|
|./utils/|项目使用到的API文件夹|
|./App.vue|程序的生命周期钩子函数|
|./main.js|用来添加全局引用的模块|
|./package.json|npm依赖|
|./pages.json|路由|
|./uni.scss|全局样式|
|.env|全局静态常量|
|./vite.config.js|Vite编译配置文件|

uni-app中使用动画模块需要修改`animate.css`源文件(第 8 行)

|H5页面|微信小程序|
|---|---|
|:root|page|