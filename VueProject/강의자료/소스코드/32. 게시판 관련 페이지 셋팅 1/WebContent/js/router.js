var router = new VueRouter({
	routes : [
		{
			path : '/',
			component : httpVueLoader('components/main/main.vue')
		},
		{
			path : '/board_main',
			component : httpVueLoader('components/board/board_main.vue')
		},
		{
			path : '/board_read',
			component : httpVueLoader('components/board/board_read.vue')
		}
	],
	scrollBehavior(to, from, savedPosition){
		return {
			x : 0,
			y : 0
		}
	}
})