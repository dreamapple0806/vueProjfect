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
		},
		{
			path : '/board_modify',
			component : httpVueLoader('components/board/board_modify.vue')
		},
		{
			path : '/board_delete',
			beforeEnter(to, from, next){
				alert('삭제되었습니다')
				next('/board_main')
			}
		},
		{
			path : '/board_write',
			component : httpVueLoader('components/board/board_write.vue')
		}
	],
	scrollBehavior(to, from, savedPosition){
		return {
			x : 0,
			y : 0
		}
	}
})