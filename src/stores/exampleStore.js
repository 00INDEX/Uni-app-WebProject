const store = reactive({
	val: "这是一个响应式对象"
})
export default function(){
	return {
		store
	}
}