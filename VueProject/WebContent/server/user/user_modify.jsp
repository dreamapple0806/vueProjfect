<%@ page language="java" contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%@ page import="java.sql.*" %>
<%@ page import="org.json.simple.*" %>
<%
	// 로그인 여부값을 가져온다.
	Boolean login_chk = (Boolean)session.getAttribute("login_chk");
	
	if(login_chk == null || login_chk == false){
		return;		
	}

	// 데이터 베이스 접속 정보
	String driver = "oracle.jdbc.OracleDriver";
	String url = "jdbc:oracle:thin:@localhost:1521:orcl";
	String id = "scott";
	String pw = "1234";
	
	// 접속
	Class.forName(driver);
	Connection db = DriverManager.getConnection(url, id, pw);
	
	String str1 = request.getParameter("user_idx");
	int user_idx = Integer.parseInt(str1);
	
	String user_pw = request.getParameter("user_pw");
	
	String sql = "update user_table set user_pw = ? where user_idx = ?";
	
	PreparedStatement pstmt = db.prepareStatement(sql);
	pstmt.setString(1, user_pw);
	pstmt.setInt(2, user_idx);
	
	pstmt.execute();
	
	db.close();
%>
{
	"result" : true
}














