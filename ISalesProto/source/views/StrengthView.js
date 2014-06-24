enyo.kind({
    name: "StrengthView",
    components: [
        {
			kind:"Header",
			readOnly:true,
			onBackButtonTapped:"handleBackTapped",
			onNextButtonTapped:"handleNextTapped"
		},
		{
			fit:true,
			components:[
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							style:"width:35%;",
							classes:"inflatePadding",
							components:[
								{
									tag:"h1",
									content:"Strength Test"
								},
								{ 
									style:"inflatePadding",
									components:[
										{
											classes:"finalTank"
										}
									]
								}
							]
						},
						{
							style:"width:65%;height:718px;background:#f2f2f2;",
							layoutKind: "FittableRowsLayout",
							components:[
								{   	
									kind: "Scroller",
									name: "scrollerControl",
									style:"height:718px",
									touch:true, 
									thumb:true,
									components:[
										{
											kind:"CategorySTRDrawer",
											title:"Savings Account (Current)",
											name:"drawer0",
											onUpdateSlider0:"handleValueUpdateSaving0",
											isDisabled:false,
											classes:"car"
										},
										{
											kind:"CategorySTRDrawer",
											title:"Savings Account (Average Annual Contribution)",
											name:"drawer1",
											onUpdateSlider0:"handleValueUpdateSaving1",
											isDisabled:true,
											classes:"car"
										},
										{
											kind:"CategorySTRDrawer",
											title:"Fixed Deposit (Current)",
											name:"drawer2",
											onUpdateSlider0:"handleValueUpdateFD0",
											isDisabled:true,
											classes:"wedding"
										},
										{
											kind:"CategorySTRDrawer",
											title:"Fixed Deposit (Average Annual Contribution)",
											name:"drawer3",
											onUpdateSlider0:"handleValueUpdateFD1",
											isDisabled:true,
											classes:"wedding"
										},
										{
											kind:"CategorySTRDrawer",
											title:"Current Investment Scheme (e.g. Shares, Commodities, UT etc)",
											name:"drawer4",
											onUpdateSlider0:"handleValueUpdateINV0",
											isDisabled:true,
											classes:"newborn"
										},
										{
											kind:"CategorySTRDrawer",
											title:"Regular Investment Scheme (e.g. Shares, Commodities, UT etc)",
											name:"drawer5",
											onUpdateSlider0:"handleValueUpdateINV1",
											isDisabled:true,
											classes:"newborn"
										}
									]
								}
							]
						}
					]
				},
				{

				}
			]		
		}
    ],
    published:{
        data:null,
        inflationRate:0.04,
       	savingsRate:0.01,
       	fdRate:0.03,
       	invRate:0.05,
        stressTest:null,
	    drawerQuestion:[
    		{
	    		label:"",
	    		increment:10,
	    		value:100
	    	}
		]			
    },
    create:function() {
    	this.inherited(arguments);
    	this.dataChanged();
		this.stressTestChanged();    	
    },
    dataChanged:function() {
    	console.log(this.data[0].value);
    	this.loadValueToControls(0,this.savingsRate);
    },
    stressTestChanged:function() {
    	this.setStressTest(this.stressTest);
    },
    calculateCarryForward:function(capital,pointofneed) {
		console.log("capital : "+capital);
    	console.log("pointofneed : "+pointofneed);
    	return (capital + (pointofneed * -1));
    },
    handleValueUpdateSaving0:function(inSender,inEvent) {
    	var drawerInput = {};
    	//BECAUSE THIS IS THE FIRST IT HAS TO BE SAVINGS
		var capitalRequired = inEvent.maxAmount;
		var pointOfNeed = this.calcFutureValue(inEvent.amount,this.savingsRate,this.stressTest[0].year);
		var carryForward = this.calculateCarryForward(capitalRequired,pointOfNeed);
    	console.log("carryForward : "+carryForward);
    	console.log(this.stressTest[0]);
    	
    	drawerInput.increment = 10;
    	drawerInput.value = 100;
    	drawerInput.maxAmount = carryForward;
    	this.$.drawer1.setQuestion(drawerInput);

   		if (inEvent.value != 100) {
    		this.$.drawer1.setIsDisabled(false);
    	}
    },

    handleValueUpdateSaving1:function(inSender,inEvent) {
    	var drawerInput = {};
    	//BECAUSE THIS IS THE FIRST IT HAS TO BE SAVINGS02
    	var capitalRequired = inEvent.maxAmount;
    	var pointOfNeed = this.calcFutureValue(inEvent.amount,this.savingsRate,this.stressTest[0].year);
    	var carryForward = this.calculateCarryForward(capitalRequired,pointOfNeed);

    	drawerInput.increment = 10;
    	drawerInput.value = 100;
    	drawerInput.maxAmount = carryForward;
    	this.$.drawer2.setQuestion(drawerInput);

    	if (inEvent.value != 100) {
    		this.$.drawer2.setIsDisabled(false);
    	}
    },
    handleValueUpdateFD0:function(inSender,inEvent) {
    	var drawerInput = {};

    	var capitalRequired = inEvent.maxAmount;
    	var pointOfNeed = this.calcFutureValue(inEvent.amount,this.fdRate,this.stressTest[1].year);
    	var carryForward = this.calculateCarryForward(capitalRequired,pointOfNeed);

    	drawerInput.increment = 10;
    	drawerInput.value = 100;
    	drawerInput.maxAmount = carryForward;
    	this.$.drawer3.setQuestion(drawerInput);

    	if (inEvent.value != 100) {
    		this.$.drawer3.setIsDisabled(false);
    	}
    },
    handleValueUpdateFD1:function(inSender,inEvent) {
    	var drawerInput = {};

    	var capitalRequired = inEvent.maxAmount;
    	var pointOfNeed = this.calcFutureValue(inEvent.amount,this.fdRate,this.stressTest[1].year);
    	var carryForward = this.calculateCarryForward(capitalRequired,pointOfNeed);

    	drawerInput.increment = 10;
    	drawerInput.value = 100;
    	drawerInput.maxAmount = carryForward;
    	this.$.drawer4.setQuestion(drawerInput);

    	if (inEvent.value != 100) {
    		this.$.drawer4.setIsDisabled(false);
    	}
    },
    handleValueUpdateINV0:function(inSender,inEvent) {
    	var drawerInput = {};

    	var capitalRequired = inEvent.maxAmount;
    	var pointOfNeed = this.calcFutureValue(inEvent.amount,this.invRate,this.stressTest[2].year);
    	var carryForward = this.calculateCarryForward(capitalRequired,pointOfNeed);

    	drawerInput.increment = 10;
    	drawerInput.value = 100;
    	drawerInput.maxAmount = carryForward;
    	this.$.drawer5.setQuestion(drawerInput);

    	if (inEvent.value != 100) {
    		this.$.drawer5.setIsDisabled(false);
    	}
    },
    handleValueUpdateINV1:function(inSender,inEvent) {
    	var drawerInput = {};

    	var capitalRequired = inEvent.maxAmount;
    	var pointOfNeed = this.calcFutureValue(inEvent.amount,this.fdRate,this.stressTest[2].year);
    	var carryForward = this.calculateCarryForward(capitalRequired,pointOfNeed);

    	drawerInput.increment = 10;
    	drawerInput.value = 100;
    	drawerInput.maxAmount = carryForward;
    	this.$.drawer6.setQuestion(drawerInput);

    	if (inEvent.value != 100) {
    		this.$.drawer6.setIsDisabled(false);
    	}
    },
    combineSum:function(stressTestResult){
    	var combineSum = 0;
    	for(var i =0;i < stressTestResult.length;i++) {
    		console.log(stressTestResult[i].amount);
    		combineSum += stressTestResult[i].amount;
    	}
    	return combineSum;
    },
    loadValueToControls:function(i,rate){
    	this.drawerQuestion[0].maxAmount = this.calcPresentValue( this.combineSum(this.stressTest), rate,i );
    	this.$["drawer"+i].setQuestion(this.drawerQuestion[0]);
    },
    calcFutureValue:function(PV,rate,period) {
		return PV*Math.pow((1+rate),period);
	},	
    calcPresentValue:function(value, rate, i) {
    	var investmentRate = 1+rate;
    	var year = this.stressTest[i].year;
    	var capitalRequired = value;
    	
    	return (capitalRequired/Math.pow(investmentRate,year));
    },
    handleBackTapped:function(inSender,inEvent) {
    	var sv = new StrTestView({data:this.data});
		sv.renderInto(document.body);
    }
});