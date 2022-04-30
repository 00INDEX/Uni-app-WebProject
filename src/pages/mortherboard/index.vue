<template>
	<view class="content">
		<span>11111111111111</span>
	</view>
</template>

<script setup>
	// 防止挡住状态栏
	const statusBarHeight = ref(uni.getSystemInfoSync().statusBarHeight + "px")
</script>

<style scoped>
	.content{
		background-color: #fcf9ec;
		height: 100vh;
		width: 100%;
		padding-top: v-bind('statusBarHeight');
	}
</style>