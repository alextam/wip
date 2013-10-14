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
							title:'',
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
							style:"height:100px"
						},
						{ 
							kind: 'StandardChart',
							name: 'lineChart',
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
							
							style:"width:550px;height:446px;border:1px solid #fff"
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
			{ label: "1st Year", y: Math.round(year1) },
			{ label: "2nd Year", y: Math.round(year2) },
			{ label: "3rd Year", y: Math.round(year3) },                                    
			{ label: "4th Year", y: Math.round(year4) },
			{ label: "5th Year", y: Math.round(year5) }
		];
		var donutPlots = [       							
			{ label: "Overriding", y: (baseCompute*parseInt(initialData.annualGrowth,10)/100 * 0.6), suffix:"k", name: "Overriding" ,indexLabelFontFamily:"HandOfSean", indexLabelFontColor: "#fff", indexLabelFontSize: 12,indexLabelFontWeight:"normal" },
		    { label: "Production Bonus", y: (baseCompute*parseInt(initialData.annualGrowth,10)/100 * 0.1), suffix:"k", name: "Production Bonus",indexLabelFontFamily:"HandOfSean", indexLabelFontColor: "#fff", indexLabelFontSize: 12,indexLabelFontWeight:"normal" },
			{ label: "Persistence Bonus", y: (baseCompute*parseInt(initialData.annualGrowth,10)/100 * 0.1), suffix:"k", name: "Persistence Bonus",indexLabelFontFamily:"HandOfSean", indexLabelFontColor: "#fff", indexLabelFontSize: 12,indexLabelFontWeight:"normal" },
		    { label: "Basic Commission", y: (baseCompute*parseInt(initialData.annualGrowth,10)/100* 0.2), suffix:"k", name: "Basic Commission",indexLabelFontFamily:"HandOfSean", indexLabelFontColor: "#fff", indexLabelFontSize: 12,indexLabelFontWeight:"normal" }
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