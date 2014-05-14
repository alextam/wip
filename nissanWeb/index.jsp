<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<title>TC Mobile Portal</title>
	<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css" />
	<!--<link rel="stylesheet/less" type="text/css" href="script/custom.less" />-->
	<link href="css/custom.css" rel="stylesheet" type="text/css" />
	<link href="login-box.css" rel="stylesheet" type="text/css" />
	<!--<script src="script/less.min.js" type="text/javascript"></script>-->
	
</head>

<body>
<div id="headerBar">
	<div class="headerBarSider">TC Mobile System</div>
	<div class="headerBarMid"></div>
	<div class="headerBarUsername"></div>
</div>
<form name="myform" action="${pageContext.request.contextPath}/login.nissan"  method="post">
<div class="loginContainerBox">
	<div class="loginContainerHeader"><h1>Mobile Reporting System</h1></div>
	<div class="annotationContainer">
	<c:if test="${loginerrormsg=='true'}">
		<%session.invalidate(); %>
		<div id="annotationBox">
			<strong>Note : </strong> Wrong user name or password!
		</div>
	</c:if>
	<c:if test="${sessionerror=='true'}">
		<%session.invalidate(); %>
		<div id="annotationBox">
			<strong>Note : </strong> Your session is expired, please log in again!
		</div>
	</c:if>
	</div>
	<div class="std15Gap"></div>
	<div class="loginField"><input value="00001677" name="username" class="formLogin" title="Username" value="" size="30" maxlength="2048" placeholder="Username" />
	</div>
	<div class="loginField"><input value="00001677" name="password" type="password" class="formLogin" title="Password" value="" size="30" maxlength="2048" placeholder="Password" />
	</div>
	<div class="std15Gap"></div>
	<div class="centerTxt">
		<button class="stdButton" onclick="javascript:document.myform.submit();">Submit</div>
	</div>
	
</div>
</form>
</body>
</html>
