export default {
	login(){
		uni.login({
			success: function(res){
				console.dir(res)
			},
			fail: function(res){
				console.dir(res)
			}
		})
	}
}