<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<script class="code" type="text/javascript">
$(document).ready(function(){	
	  var line1 = ${addform.script};
	  var plot1 = $.jqplot('chart1', [line1], {
	    title: 'Contact Report',
	    series:[{renderer:$.jqplot.BarRenderer}],
	    axesDefaults: {
	        tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
	        tickOptions: {
	          angle: -30,
	          fontSize: '10pt'
	        }
	    },
	    axes: {
		      xaxis: {
		        renderer: $.jqplot.CategoryAxisRenderer
		      }
	    }
 });

$("#date-pick1").datepicker({ buttonImage: '${pageContext.request.contextPath}/img/icon_Calendar.gif', showOn: 'both', dateFormat: 'dd/mm/yy' });
$("#date-pick2").datepicker({ buttonImage: '${pageContext.request.contextPath}/img/icon_Calendar.gif', showOn: 'both', dateFormat: 'dd/mm/yy' });
});

</script>
<form:form modelAttribute="addform" action="search.nissan" method="post">
<table class="dateBox">
	<tr>
		<td>Start Date</td>
		<td><form:input path="strStartDate" maxlength="30" size="30" id="date-pick1"/></td>
		<td>End Date</td>
		<td><form:input path="strEndDate" maxlength="30" size="30" id="date-pick2"/></td>
		<td>Filter</td>
		<td>
			<form:select path="type">
				 <form:option value="A">All</form:option>
				 <form:option value="V">VSM</form:option>
				 <form:option value="M">Mobile</form:option>
			</form:select>
		</td>
		<td>
			<input type="submit" value="Search" class="stdButton small" />
		</td>
	</tr>
	
</table>
</form:form>
<div class="std15Gap"></div>
<div id="chart1"></div>

<table id="dataTable">
	<tr>
		<td bgcolor="grey" class="tableHeader">Sale Advisor</td>
		<td bgcolor="grey" class="tableHeaderCol">Lead</td>
		<td bgcolor="grey" class="tableHeaderCol">Warm</td>
		<td bgcolor="grey" class="tableHeaderCol">Hot</td>
		<td bgcolor="grey" class="tableHeaderCol">Customer</td>
		<td bgcolor="grey" class="tableHeaderCol">Total</td>
	</tr>
	<!-- TODO: MICHEAL NEED YOUR HELP PUT LOGIC IF NO RECORD FOUND USE THIS tag below.
	<tr>
		<td colspan="6" class="noData" id="noRecord">No record.</td>
	</tr>
	-->
	<c:forEach var="item" items="${addform.list}">
		<tr>
		 	<td class="tableHeaderData"><div class="truncater">${item.userName}</div></td>
		 	<td class="tableHeaderColData">${item.lead}</td>
		 	<td class="tableHeaderColData">${item.warm}</td>
		 	<td class="tableHeaderColData">${item.hot}</td>
		 	<td class="tableHeaderColData">${item.customer}</td>
		 	<td class="tableHeaderColData">${item.total}</td>
		</tr>		
 	</c:forEach>
</table>
