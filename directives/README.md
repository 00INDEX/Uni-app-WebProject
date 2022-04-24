# 微信小程序端不支持自定义指令，请勿使用
# ~~自定义指令目录(不要删除`index.js`)~~
~~请将需要绑定的自定义指令放置此文件夹中，示例文件如下：~~
```
//example.js
export default {
	// 在绑定元素的 attribute 或事件监听器被应用之前调用
	created() {},
	// 在绑定元素的父组件挂载之前调用
	beforeMount() {},
	// 绑定元素的父组件被挂载时调用
	mounted() {},
	// 在包含组件的 VNode 更新之前调用
	beforeUpdate() {},
	// 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
	updated() {},
	// 在绑定元素的父组件卸载之前调用
	beforeUnmount() {},
	// 卸载绑定元素的父组件时调用
	unmounted() {}
}
```
~~以上每个生命周期的钩子函数可使用的参数列表如下：~~

|参数|说明|
|---|---|
|el|指令绑定到的元素。这可用于直接操作 DOM|
|binding||
|vnode|作为 el 参数收到的真实 DOM 元素的蓝图|
|prevNode|上一个虚拟节点，仅在 beforeUpdate 和 updated 钩子中可用|

~~自定义指令的使用方法，例如在前端文件`index.vue`中：~~
```
//指令名与文件名相同
<input v-example/>
```