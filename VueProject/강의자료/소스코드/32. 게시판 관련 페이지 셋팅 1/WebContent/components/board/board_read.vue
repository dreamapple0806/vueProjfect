<template>
<div class="container" style="margin-top:100px">
	<div class="row">
		<div class="col-sm-3"></div>
		<div class="col-sm-6">
			<div class="card shadow">
				<div class="card-body">
					<div class="form-group">
						<label for="board_writer_name">작성자</label>
						<input type="text" id="board_writer_name" name="board_writer_name" class="form-control" value="홍길동" disabled="disabled"/>
					</div>
					<div class="form-group">
						<label for="board_date">작성날짜</label>
						<input type="text" id="board_date" name="board_date" class="form-control" value="2018-7-20" disabled="disabled"/>
					</div>
					<div class="form-group">
						<label for="board_subject">제목</label>
						<input type="text" id="board_subject" name="board_subject" class="form-control" value="제목입니다" disabled="disabled"/>
					</div>
					<div class="form-group">
						<label for="board_content">내용</label>
						<textarea id="board_content" name="board_content" class="form-control" rows="10" style="resize:none" disabled="disabled">본문입니다</textarea>
					</div>
					<div class="form-group">
						<label for="board_file">첨부 이미지</label>
						<img src="image/logo.png" width="100%"/>						
					</div>
					<div class="form-group">
						<div class="text-right">
							<a href="board_main.html" class="btn btn-primary">목록보기</a>
							<a href="board_modify.html" class="btn btn-info">수정하기</a>
							<a href="board_main.html" class="btn btn-danger">삭제하기</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-sm-3"></div>
	</div>
</div>
</template>
<script>
	function check_reply(){
		var reply_content = $("#reply_content").val()
		
		if(reply_content.length == 0){
			alert("댓글 내용을 입력해주세요")
			$("#reply_content").focus()
			return false
		}
		
		return true
	}
</script>