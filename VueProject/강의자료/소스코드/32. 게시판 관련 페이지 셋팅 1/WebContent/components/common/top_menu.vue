<template>
<!-- 상단 메뉴 부분 -->
<nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top shadow-lg">
	<router-link to='/' class="navbar-brand">SoftCampus</router-link>
	<button class="navbar-toggler" type="button" data-toggle="collapse"
	        data-target="#navMenu">
		<span class="navbar-toggler-icon"></span>        
	</button>
	<div class="collapse navbar-collapse" id="navMenu">
		<ul class="navbar-nav">
			<li class="nav-item">
				<router-link to='/board_main' class="nav-link">자유게시판</router-link>
			</li>
			<li class="nav-item">
				<router-link to='/board_main' class="nav-link">유머게시판</router-link>
			</li>
			<li class="nav-item">
				<router-link to='/board_main' class="nav-link">정치게시판</router-link>
			</li>
			<li class="nav-item">
				<router-link to='/board_main' class="nav-link">스포츠게시판</router-link>
			</li>
		</ul>
		
		<ul class="navbar-nav ml-auto">
			<li class="nav-item">
				<a href="login.html" class="nav-link">로그인</a>
			</li>
			<li class="nav-item">
				<a href="join.html" class="nav-link">회원가입</a>
			</li>
			<li class="nav-item">
				<a href="modify_user.html" class="nav-link">정보수정</a>
			</li>
			<li class="nav-item">
				<a href="index.html" class="nav-link">로그아웃</a>
			</li>
		</ul>
	</div>
</nav>
</template>