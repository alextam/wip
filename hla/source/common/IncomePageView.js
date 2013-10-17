enyo.kind({
    name: "IncomePageView",
    kind: "Control",
    nav: Navigator,
    fit:true,
    layoutKind:"FittableRowsLayout",
    classes:"mainBg",
    components: [           
		{ style:"height:40px" },
		{
          	kind:"ActionButton",
            content:"< Back",
            ontap:"handleBtnBack",
            style:"margin-top:10px !important",
            classes:"actionButton"
		},
		{ style:"height:30px" },
        {
        	style:"padding:20px",
        	layoutKind:"FittableColumnsLayout",
        	components:[
        		{
        			style:"width:425px",
        			components:[
        				{ 
		        			tag:"h2", 
		        			classes:"standardSeanH2",
		        			style:"font-size:1.8em",
		        			content:"How’s your income grow ?"
		        		},
		        		{
		        			name:"chartBox",
		        			kind:"ChartControlBox",
		        			onDataChanged:"handleDataChanged"
		        		},
		        		{
							kind:'StandardChart',
							name:'donutChart',
							chartId: 2,
							theme:'theme2',
							title: {
								text:"Year 1",
								fontFamily:"HandOfSean",
								fontSize:15,
								fontColor: "#fff"
							},
							type:'doughnut',
							backgroundColor: "#222",
							xAxis: {
								title: ""								
							},
							yAxis: {
								title: "",
								prefix: "",
								suffix: "k"
								
							},
							legend:{
						        fontSize:11,
						        fontFamily: "Arial",
						        fontColor: "white",
						        fontWeight:"bold",
						        fontStyle:"oblique"      
					      	},
							style: "margin-top:20px;height: 300px; width: 400px;"
						}
        			]
        		},
        		{
        			fit:true,
        			components:[
						{
							style:"height:80px"
						},
						{ 
							kind: 'StandardChart',
							name: 'lineChart',
							onTouchChart:"handleTouchChart",
							theme: 'theme2',
							title: {
								text:"_",
								fontColor: "rgba(0,0,0,0)"
							},
							type: 'line',
							lineColor:"red",
							backgroundColor: "rgba(0,0,0,0)",
							legend:{
						        fontSize:12,
						        fontFamily: "Arial",
						        fontColor: "black",
						        fontWeight:"bold",
						        fontStyle:"oblique"      
					      	},
					      	xAxis: {
								title: " ",
								tickColor:"black",
								gridColor:"black",
								titleFontSize:16,
								labelFontColor: "black",								
								interlacedColor: "rgba(0,0,0,0.1)",
								labelFontSize:12,
								lineColor:"red",
								labelFontWeight:"normal",
								labelFontFamily:"HandOfSean",
								titleFontFamily:"HandOfSean"
							},
							yAxis: {
								title: " ",
								prefix: "",
								gridColor:"black",
								suffix: "k",
								gridThickness: 0.2, 
								lineColor:"black",
								titleFontSize:16,
								labelFontSize:13,
								labelFontWeight:"normal",
								labelFontColor: "black",
								labelFontFamily:"HandOfSean",
								titleFontFamily:"HandOfSean"
							},
							
							style:"width:550px;height:446px;"
						}
					]

        		}        		
        	]
        }
    ],
    create: function() {
        this.inherited(arguments);
        
    },
    rendered:function() {
    	this.inherited(arguments);
    	this.plotCharts();
    },
    getInitialData:function() {
    	return this.$.chartBox.getValue();

    },
    handleTouchChart:function(inSender,inEvent) {
    	console.log(inEvent.y);
    	var colorSet = {};
		colorSet.name = "goIngenious";
		colorSet.data = [
			 "#04558E",
		     "#ff9933",
		     "#669933",
		     "#a11621",
		     "#3EA0DD",
		     "#F5A52A",
		     "#23BFAA",
		     "#FAA586",
		     "#EB8CC6"
	    ];
    	baseCompute = 1;
    	var donutPlots = [       							
			{ label: "Overriding", y: baseCompute*0.6, suffix:"k", legendText: "Overriding ("+baseCompute*0.6+"k)" ,indexLabelFontFamily:"HandOfSean", indexLabelFontColor: "#fff", indexLabelFontSize: 12,indexLabelFontWeight:"normal" },
		    { label: "Production Bonus", y: baseCompute*0.1, suffix:"k", legendText: "Production Bonus ("+baseCompute*0.1+"k)",indexLabelFontFamily:"HandOfSean", indexLabelFontColor: "#fff", indexLabelFontSize: 12,indexLabelFontWeight:"normal" },
			{ label: "Persistence Bonus", y: baseCompute*0.1, suffix:"k", legendText: "Persistence Bonus ("+baseCompute*0.1+"k)",indexLabelFontFamily:"HandOfSean", indexLabelFontColor: "#fff", indexLabelFontSize: 12,indexLabelFontWeight:"normal" },
		    { label: "Basic Commission", y: baseCompute*0.2, suffix:"k", legendText: "Basic Commission ("+baseCompute*0.2+"k)",indexLabelFontFamily:"HandOfSean", indexLabelFontColor: "#fff", indexLabelFontSize: 12,indexLabelFontWeight:"normal" }
		];
		var linePlots = [
			{ label: "1st Year" },
			{ label: "2nd Year" },
			{ label: "3rd Year" },                                    
			{ label: "4th Year" },
			{ label: "5th Year" }
		];
		this.$.donutChart.title.text = linePlots[inEvent.x].label;
    	this.$.donutChart.refresh();
    	this.$.donutChart.setDatasource('key1', donutPlots, 'Income', true, colorSet);
    },
    handleDataChanged:function(inSender,inEvent) {
    	this.plotCharts();
    },
    plotCharts:function() {
    	var initialData = this.getInitialData();
    	var lineChart = this.$.lineChart;
    	var donutChart = this.$.donutChart;
    	// annualGrowth: "10", monthlyPremium: "250", policyPerMonth: "4"
    	var baseCompute = parseInt(initialData.policyPerMonth,10) * parseInt(initialData.monthlyPremium,10);
    	var year1 = (baseCompute*1.2 + parseInt(initialData.annualGrowth,10))/100 - 3 + (parseInt(initialData.annualGrowth,10)/12); 
    	var year2 = (baseCompute*2.4 + parseInt(initialData.annualGrowth,10))/(100) - 2.5 + (parseInt(initialData.annualGrowth,10)/12);
    	var year3 = (baseCompute*3.6 + parseInt(initialData.annualGrowth,10))/(100) - 2 + (parseInt(initialData.annualGrowth,10)/12); 
    	var year4 = (baseCompute*4.8 + parseInt(initialData.annualGrowth,10))/(100) + 2.5 + (parseInt(initialData.annualGrowth,10)/12);
    	var year5 = (baseCompute*6.0 + parseInt(initialData.annualGrowth,10))/(100) + 20.5 + (parseInt(initialData.annualGrowth,10)/12);
    	var linePlots = [
			{ label: "1st Year", y: Math.round(year1), markerSize: 16, markerBorderThickness:5 },
			{ label: "2nd Year", y: Math.round(year2), markerSize: 16, markerBorderThickness:5 },
			{ label: "3rd Year", y: Math.round(year3), markerSize: 16, markerBorderThickness:5 },                                    
			{ label: "4th Year", y: Math.round(year4), markerSize: 16, markerBorderThickness:5 },
			{ label: "5th Year", y: Math.round(year5), markerSize: 16, markerBorderThickness:5 }
		];
		var donutPlots = [       							
			{ label: "Overriding", y: baseCompute*0.6, suffix:"k", legendText: "Overriding ("+baseCompute*0.6+"k)" ,indexLabelFontFamily:"HandOfSean", indexLabelFontColor: "#fff", indexLabelFontSize: 12,indexLabelFontWeight:"normal" },
		    { label: "Production Bonus", y: baseCompute*0.1, suffix:"k", legendText: "Production Bonus ("+baseCompute*0.1+"k)",indexLabelFontFamily:"HandOfSean", indexLabelFontColor: "#fff", indexLabelFontSize: 12,indexLabelFontWeight:"normal" },
			{ label: "Persistence Bonus", y: baseCompute*0.1, suffix:"k", legendText: "Persistence Bonus ("+baseCompute*0.1+"k)",indexLabelFontFamily:"HandOfSean", indexLabelFontColor: "#fff", indexLabelFontSize: 12,indexLabelFontWeight:"normal" },
		    { label: "Basic Commission", y: baseCompute*0.2, suffix:"k", legendText: "Basic Commission ("+baseCompute*0.2+"k)",indexLabelFontFamily:"HandOfSean", indexLabelFontColor: "#fff", indexLabelFontSize: 12,indexLabelFontWeight:"normal" }
		]; 

		var colorSet = {};
		colorSet.name = "goIngenious";
		colorSet.data = [
			 "#04558E",
		     "#ff9933",
		     "#669933",
		     "#a11621",
		     "#3EA0DD",
		     "#F5A52A",
		     "#23BFAA",
		     "#FAA586",
		     "#EB8CC6"
	    ];
		lineChart.refresh();
	    donutChart.refresh();
		lineChart.setDatasource('key1', linePlots, 'Income', true, colorSet);
		donutChart.setDatasource('key1', donutPlots, 'Income', true, colorSet);

    },
    handleBtnBack: function(inSender,inEvent) {
		this.nav.gotoPage("App");
	}
});