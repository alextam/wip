<%@ taglib uri="http://www.opensymphony.com/sitemesh/decorator" prefix="decorator"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>TC Mobile Portal</title>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/datePicker.css" />
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/jquery.jqplot.css" />
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/ui.core.css" />
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/jqui/ui.all.css" />
	<link href="css/custom.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
	
	<script language="javascript" type="text/javascript" src="${pageContext.request.contextPath}/script/jquery.min.js"></script>
	<script language="javascript" type="text/javascript" src="${pageContext.request.contextPath}/script/jquery.jqplot.min.js"></script>


	
	<script language="javascript" type="text/javascript" src="${pageContext.request.contextPath}/script/plugins/jqplot.logAxisRenderer.js"></script>
	<script class="include" type="text/javascript" src="${pageContext.request.contextPath}/script/plugins/jqplot.barRenderer.min.js"></script>
	<script class="include" type="text/javascript" src="${pageContext.request.contextPath}/script/plugins/jqplot.pieRenderer.min.js"></script>
	<script class="include" type="text/javascript" src="${pageContext.request.contextPath}/script/plugins/jqplot.categoryAxisRenderer.min.js"></script>
	<script class="include" type="text/javascript" src="${pageContext.request.contextPath}/script/plugins/jqplot.pointLabels.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/script/plugins/jqplot.dateAxisRenderer.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/script/plugins/jqplot.canvasTextRenderer.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/script/plugins/jqplot.canvasAxisTickRenderer.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/script/plugins/jqplot.categoryAxisRenderer.min.js"></script>
	
	<script type="text/javascript" src="${pageContext.request.contextPath}/script/jquery.datePicker.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/script/ui.datepicker.min.js"></script>
	<script src="${pageContext.request.contextPath}/script/jquery-ui.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/script/ui.core.min.js"></script>

	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/style.css" />


<div id="headerBar">
	<div class="headerBarSider">TC Mobile System</div>
	<div class="headerBarMid"></div>
	<div class="headerBarUsername">Welcome HOB - (${user.branch})</div>
</div>
<div id="contentSection">
	<div id="menuContainer">
		<ul>
			<li><a href="#" class="selected"><i class="fa fa-tachometer icon"></i> Dashboard</a></li>
			<li><a href="${pageContext.request.contextPath}/logout.jsp"><i class="fa fa-sign-out icon"></i> Logout</a></li>
		</ul>
	</div>
	<div id="contentContainer">
		<decorator:body />
	</div>
</div>


</body>
</html>
