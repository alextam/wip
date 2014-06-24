/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.


	What is the selling price for your new car
	% amount you inted to finance 
	Minimum DOWN PAYMENT

	What make up of wedding expense TODAY
	Money for wedding

	What is the selling price of your new home
	% amount your inted to finance
	Minimum DOWN PAYMENT

	What make up of new born expense (1st 5 year) TODAY
	Money for new born

	What make up of overall education cost TODAY
	Money for child university studies

*/

enyo.kind({
	name: "StrTestView",
	components:[
		{
			kind:"Header",
			readOnly:true,
			onBackButtonTapped:"handleBackTapped",
			onNextButtonTapped:"handleNextTapped"
		},
		{
			fit:true,
			layoutKind: "FittableColumnsLayout",
			components:[
				{
					classes:"inflatePadding",
					style:"width:35%",
					components:[
						{
							tag:"h1",
							content:"Stress Test"
						}
					]
				},
				{
					classes:"scrollContent",
					style:"width:65%",
					layoutKind: "FittableRowsLayout",
					components:[
						{   	
							kind: "Scroller",
							name: "scrollerControl",
							style:"height:720px",
							touch:true, 
							thumb:true,
							components:[
								{
									kind:"CategoryDrawer",
									title:"A New Car",
									classes:"car",
									onUpdateSlider0:"handleValueUpdateCar",
									onUpdateSlider1:"handleValueUpdateCar",
									name:"drawer0"
								},
								{
									kind:"CategoryDrawer",
									title:"A Wedding",
									classes:"wedding",
									onUpdateSlider0:"handleValueUpdateWedding",
									onUpdateSlider1:"handleValueUpdateWedding",
									name:"drawer1"
								},
								{
									kind:"CategoryDrawer",
									title:"Purchase Property",
									classes:"property",
									onUpdateSlider0:"handleValueUpdateProperty",
									onUpdateSlider1:"handleValueUpdateProperty",
									name:"drawer2"
								},
								{
									kind:"CategoryDrawer",
									title:"New Born Baby",
									classes:"newborn",
									onUpdateSlider0:"handleValueUpdateBaby",
									onUpdateSlider1:"handleValueUpdateBaby",
									name:"drawer3"
								},
								{
									kind:"CategoryDrawer",
									title:"Child Education",
									classes:"education",
									onUpdateSlider0:"handleValueUpdateEducation",
									onUpdateSlider1:"handleValueUpdateEducation",
									name:"drawer4"
								}
							]
						}
					]
				}
			]
		}
	],
	published:{
	    data:null,
	    inflationRate:0.04,
	    stressTest:[
	    	{type:"car",price:0,loan:0,amount:0,year:0},
	    	{type:"wedding",price:0,amount:0,year:0},
	    	{type:"home",price:0,loan:0,amount:0,year:0},
	    	{type:"baby",price:0,amount:0,year:0},
	    	{type:"education",price:0,amount:0,year:0}
	    ],
	    drawerQuestion:[
	    	{
	    		label:[
			    	{
			    		question:"New car selling price",
			    		increment:1,
			    		max:20,
			    		type:"currency",
			    		category:"carPrice",
			    		data:[20000,30000,40000,50000,60000,70000,80000,90000,100000,110000,120000,130000,140000,150000,160000,170000,180000,190000,200000,250000]
			    	},
			    	{
			    		question:"Amount(%) you intend to finance",
			    		increment:1,
			    		max:10,
			    		type:"percentage",
			    		category:"carLoanPc",
			    		data:[10,20,30,40,50,60,70,80,90,100]
			    	},
			    	{
			    		question:"Minimum DOWN PAYMENT"
			    	}
	    		]
	    	},
	    	{
	    		label:[
			    	{
			    		question:"Estimated wedding expenses TODAY",
			    		increment:1,
			    		max:6,
			    		type:"currency",
			    		category:"wedding",
			    		data:[12500,25000,50000,100000,150000,200000]			    	
			    	},
			    	{
			    		question:"Money for wedding"
			    	}
	    		]
	    	},
	    	{
	    		label:[
			    	{
			    		question:"Selling price for your new home",
			    		increment:1,
			    		max:26,
			    		type:"currency",
			    		category:"home",
			    		data:[25000,50000,100000,150000,200000,250000,300000,350000,400000,450000,500000,550000,600000,650000,700000,750000,800000,850000,900000,950000,1000000,1500000,2000000,2500000,3000000,3500000]
			    	},
			    	{
			    		question:"Amount(%) you intend to finance",
			    		increment:1,
			    		max:10,
			    		type:"percentage",
			    		category:"home",
			    		data:[10,20,30,40,50,60,70,80,90,100]	
			    	},
			    	{
			    		question:"Minimum DOWN PAYMENT"
			    	}
	    		]
	    	},
	    	{
	    		label:[
			    	{
			    		question:"Estimated new born expense TODAY (1<sup>st</sup> 5 Year)",
			    		increment:1,
			    		max:8,
			    		type:"currency",
			    		category:"baby",
			    		data:[12500,25000,50000,100000,150000,200000,250000,300000]			    	
			    	},
			    	{
			    		question:"Money for new born" 
			    	}
	    		]
	    	},
	    	{
	    		label:[
			    	{
			    		question:"Estimated overall education cost TODAY",
			    		increment:1,
			    		max:6,
			    		type:"currency",
			    		category:"education",
			    		data:[12500,25000,50000,100000,150000,200000]			    	
			    	},
			    	{
			    		question:"Money for child university studies" 
			    	}
	    		]
	    	}
	    ]	
	},
	create: function() {
		this.inherited(arguments);
		this.dataChanged();
	},
	rendered:function() {
		this.inherited(arguments);
		
	},
	findMinValueForYear:function(){
		var minArray = new Array();
		var nearestYear = 0;
		for(var i = 0;i < this.data.length;i++) {
			if((this.data[i].value != "No") && (this.data[i].value != 0)){
				minArray.push(this.data[i].value);
			}
		}
		var nearestYear = Math.min.apply(Math,minArray);
		console.log("========== YEAR MIN : "+ nearestYear +" ===========");
		return nearestYear;
	},
	calculateForCar:function(){
		var isOk;
		//var yearForCar = this.data[0].value;
		if (this.data[0].value == "No"){
			this.data[0].value = 0;
			isOk = 0;
		} else {
			isOk = 1;
		}

		var yearForCar = this.findMinValueForYear( this.data );
		var inDrawerControl = this.$.drawer0.controls[1].controls[1].controls[0];
		console.log("================== CAR CALCULATION ===============");

		var carPrice = inDrawerControl.controls[0].getValue();
		var carLoan = (100-inDrawerControl.controls[1].getValue())/100;
		var carAmount = carPrice*carLoan*isOk;
		inDrawerControl.controls[2].setValue( carAmount );
		
		this.stressTest[0] = {type:"car",price:carPrice, loan:carLoan ,amount:carAmount, year:yearForCar };
	},
	calculateForWedding:function(){
		var isOk;
		if (this.data[1].value == "No"){
			this.data[1].value = 0;
			isOk = 0;
		} else {
			isOk = 1;
		}

		var yearForWedding = this.findMinValueForYear( this.data );
		var inDrawerControl = this.$.drawer1.controls[1].controls[1].controls[0];
		console.log("================== WEDDING CALCULATION ===============");

		var weddingPrice = inDrawerControl.controls[0].getValue();
		var weddingNeeded = this.calculateFutureValue(weddingPrice,this.inflationRate,yearForWedding)*isOk;

		inDrawerControl.controls[2].setValue(weddingNeeded);
		this.stressTest[1] = {type:"wedding",price:weddingPrice,amount:weddingNeeded, year:yearForWedding};

	},
	calculateForProperty:function() {
		var isOk;
		if (this.data[2].value == "No"){
			this.data[2].value = 0;
			isOk = 0;
		} else {
			isOk = 1;
		}

		var yearForProperty = this.findMinValueForYear( this.data );
		var inDrawerControl = this.$.drawer2.controls[1].controls[1].controls[0];
		console.log("================== PROPERTY CALCULATION ===============");
		
		var housePrice = inDrawerControl.controls[0].getValue();
		var houseLoan = (100-inDrawerControl.controls[1].getValue())/100;
		var houseNeeded = housePrice*houseLoan*isOk;
		inDrawerControl.controls[2].setValue( houseNeeded );

		this.stressTest[2] = {type:"home",price:housePrice,loan:houseLoan,amount:houseNeeded, year:yearForProperty};
	},
	calculateForNewBorn:function() {
		var isOk;
		if (this.data[3].value == "No"){
			this.data[3].value = 0;
			isOk = 0;
		} else {
			isOk = 1;
		}

		var yearForBaby = this.findMinValueForYear( this.data );
		var inDrawerControl = this.$.drawer3.controls[1].controls[1].controls[0];
		console.log("================== NEW BORN CALCULATION ===============");
		
		var newBornExpenses = inDrawerControl.controls[0].getValue();
		var newBornNeeded = this.calculateFutureValue(newBornExpenses,this.inflationRate,yearForBaby)*isOk;

		inDrawerControl.controls[2].setValue(newBornNeeded);
		this.stressTest[3] = {type:"baby",price:newBornExpenses,amount:newBornNeeded, year:yearForBaby};
	},
	calculateForEducation:function() {
		var isOk;
		if (this.data[4].value == "No"){
			this.data[4].value = 0;
			isOk = 0;
		} else {
			isOk = 1;
		}

		var yearForEducation = this.findMinValueForYear( this.data );
		var inDrawerControl = this.$.drawer4.controls[1].controls[1].controls[0];
		console.log("================== EDUCATION CALCULATION ===============");
		
		var educationExpenses = inDrawerControl.controls[0].getValue();
		var educationNeeded = this.calculateFutureValue(educationExpenses,this.inflationRate,yearForEducation)*isOk;

		inDrawerControl.controls[2].setValue(educationNeeded);
		this.stressTest[4] = {type:"education",price:educationExpenses,amount:educationNeeded, year:yearForEducation};
	},
	handleValueUpdateEducation:function(inSender,inEvent) {
		this.calculateForEducation();
	},
	handleValueUpdateCar:function(inSender,inEvent) {
		this.calculateForCar();
	},
	handleValueUpdateProperty:function(inSender,inEvent) {
		this.calculateForProperty();
	},
	handleValueUpdateWedding:function(inSender,inEvent) {
		this.calculateForWedding();
	},
	handleValueUpdateBaby:function(inSender,inEvent) {
		this.calculateForNewBorn();
	},
	calculateFutureValue:function(PV,rate,period) {
		return PV*Math.pow((1+rate),period);
	},
	dataChanged: function() {
		for(var i=0;i < this.data.length;i++) {
			if (this.data[i].value != "No"){
				this.$["drawer"+i].setIsDisabled(false);
				this.$["drawer"+i].setIsOpen(true);
			} else {
				this.$["drawer"+i].setIsDisabled(true);	
			}
			this.$["drawer"+i].setQuestion( this.drawerQuestion[i] );
		}
		this.calculateForCar();
		this.calculateForWedding();
		this.calculateForProperty();
		this.calculateForNewBorn();
		this.calculateForEducation();
	},
	handleBackTapped:function(inSender,inEvent) {
		var mv = new MainView();
		mv.renderInto(document.body);
	},
	handleNextTapped:function(inSender,inEvent) {
		var sv = new StrengthView({data:this.data,stressTest:this.stressTest});
		sv.renderInto(document.body);
		//this.bubble("onPageChange",{data:null,view:"StrengthView"});
	}
});
