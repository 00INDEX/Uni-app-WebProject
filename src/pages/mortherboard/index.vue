<template>
	<view class="content">
		<button @click="httpTest">测试Axios</button>
	</view>
</template>

<script setup>

	// 防止挡住状态栏
	const statusBarHeight = ref(uni.getSystemInfoSync().statusBarHeight + "px")
	// #ifdef MP-WEIXIN
	let navigationBar = wx.getMenuButtonBoundingClientRect()
	console.log(navigationBar)
	const navigationBarHeight = ref((navigationBar.height + navigationBar.top * 2 - uni.getSystemInfoSync().statusBarHeight).toString() + "px")
	// #endif

	const httpTest = () => {
		requestUtil.request({
			url: '/test'
		})
	}

</script>

<style scoped>
	.content{
		background-color: aqua;
		height: 100vh;
		width: 100%;
		padding-top: v-bind(statusBarHeight);
		/* #ifdef MP-WEIXIN */
		padding-top: v-bind(navigationBarHeight);
		/* #endif */
	}
</style>