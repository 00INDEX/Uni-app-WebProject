<template>
	<view class="content">
		
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

</script>

<style scoped>
	.content{
		background-color: #fcf9ec;
		height: 100vh;
		width: 100%;
		padding-top: v-bind(statusBarHeight);
		/* #ifdef MP-WEIXIN */
		padding-top: v-bind(navigationBarHeight);
		/* #endif */
	}
</style>