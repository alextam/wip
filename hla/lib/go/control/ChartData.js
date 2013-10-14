enyo.kind({
	name: 'ChartData',
	kind: null,
	key: null,
	data: [], // format: {x: 5, y: 5}
	legend: "",
	showInLegend: true,
	constructor: function(key, data, legend, showInLegend) {
		this.key = key;
		this.data = data || this.data;
		this.legend = legend || this.legend;
		this.showInLegend = (showInLegend == null || showInLegend == undefined)? this.showInLegend : showInLegend;
	}
});