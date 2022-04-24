<template>
	<view class="content">
		<span>{{title}}</span>
		<span>{{vuex}}</span>
		<com-example></com-example>
		<span>{{$example()}}</span>
		<span class="animate__animated animate_custom_hello" style='font-size: 35px; font-weight: 1000;'>Hello Animate.css</span>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: import.meta.env.VITE_ENV_TEST
			}
		},
		computed: {
			vuex(){
				return this.$store.state.val
			}
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.animate_custom_hello{
		animation: hello 2s infinite;
	}
	@keyframes hello {
		0% {color: red}
		25% {color: green}
		50% {color: blue}
		75% {color: purple}
		100% {color: red}
	}
</style>
