/*
== StandardChart ==

All chart types:
	"line", "stepLine", "spline", "column", "area", "splineArea", "bar", "bubble", "scatter",
    "stackedColumn", "stackedColumn100", "stackedBar", "stackedBar100",
	"stackedArea", "stackedArea100",
    "pie", "doughnut"

All themes:
	"theme1", "theme2", "theme3"
*/
enyo.kind({
	name: 'StandardChart',
	kind: 'enyo.Control',

	chartId: 1,
	theme: "theme1",
	width: null,
    height: null,
    zoomEnabled: false,
    backgroundColor: "white",
    animationEnabled: true,
    colorSet: "colorSet1",
    culture: "en",
    creditHref: "",
	creditText: "",
	legend: {},

	title: "Go Standard Chart",
	type: "line",
	xAxis: {
		title: "X Axis",
		prefix: "",
		suffix: ""
	},
	yAxis: {
		title: "Y Axis",
		prefix: "",
		suffix: ""
	},
	published: {
		data: {},
		chart: null
	},
	chartContainer: {
		tag: "div",
		name: "chartContainer",
		style: "height: 100%; width: 100%;"
	},
	components: [
		/*
		{
			tag: "div",
			id: "chartContainer",
			name: "chartContainer",
			style: "height: 100%; width: 100%;"
		},
		{
			tag: "div",
			id: "chartContainer2",
			name: "chartContainer",
			style: "height: 100%; width: 100%;"
		}
		*/
	],
	
	create: function() {
		this.inherited(arguments);
		
		this.chartContainer.id = "gochart_" + this.name;
		this.destroyClientControls();
		this.createComponent(this.chartContainer);
		this.render();
	},
	rendered: function() {
		this.inherited(arguments);
	},
	setDatasource: function(key, datasource, legend, showInLegend, colorSet) {
		CanvasJS.addColorSet(colorSet.name, colorSet.data); 
		this.chart = new CanvasJS.Chart(this.controls[0].id,
			{
				theme: this.theme,
				width: this.width,
			    height: this.height,
			    zoomEnabled: this.zoomEnabled,
			    backgroundColor: this.backgroundColor,
			    animationEnabled: this.animationEnabled,
			    colorSet: colorSet.name,
			    culture: this.culture,
				creditHref: this.creditHref,
	            creditText: this.creditText
			});
		
		// find datasource
		var d = this.find(key);

		if(d != null) {
			// update data instance if any
			if(datasource !== undefined) {
				this.data[key].data = datasource;
			}
			if(legend !== undefined) {
				this.data[key].legend = legend;
			}
			if(showInLegend !== undefined) {
				this.data[key].showInLegend = showInLegend;
			}
		} else {
			// create a new data instance
			var chartData = new ChartData(key, datasource, legend, showInLegend);
			this.data[key] = chartData;
		}

		this.chart.options.title = this.title;

		this.chart.options.axisX = this.xAxis;
		this.chart.options.axisY = this.yAxis;
		this.chart.options.legend = this.legend;

		this.chart.options.data = [];
		for(var i in this.data) {
			var series = {
				type: this.type,
				name: this.data[i].legend,
				showInLegend: this.data[i].showInLegend,
				dataPoints: this.data[i].data
			};
			this.chart.options.data.push(series);		
		}
		this.chart.render();
	},
	find: function(key) {
		for(var i in this.data) {
			if(i == key) {
				return this.data[i];
			}
		}
		return null;
	},
	remove: function(key) {
		var d = this.find(key);
		if(d) {
			delete this.data[key];
			return true;
		}
		return false;
	},
	size: function() {
		return Object.keys(this.data).length;
	},
	refresh: function() {
		//this.chart.render();
		this.chartContainer.id = "gochart_" + this.name;
		this.destroyClientControls();
		this.createComponent(this.chartContainer);
		this.render();
	}
});