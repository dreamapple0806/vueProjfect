$(function(){
	var app = new Vue({
		el : '#app',
		components : {
			'top-menu' : httpVueLoader('components/common/top_menu.vue'),
			'bottom-info' : httpVueLoader('components/common/bottom_info.vue')
		},
		router : router
	})
})