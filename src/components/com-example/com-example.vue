<template>
	<view>{{text}}</view>
	<button @click="log">登陆测试</button>
</template>

<script setup>
	const text = "测试一下组件"
	const log = ()=>{
		loginUtil.login()
	}
</script>

<style>
</style>