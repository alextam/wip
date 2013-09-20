enyo.kind({
	name: "Step2Form",
	kind: "FittableRows",
	components:[
		{
            kind:"Header",
            title:"Pricing Info",
            buttons:[
            	{
			    	name:"btnBack",
			    	visible:true,
			    	content:"Back",
			    	page:"Step1Form",
			    	event:"onBtnBack"
		    	},
            	{
			    	name:"btnNext",
			    	visible:true,
			    	position:"right",
			    	content:"Next",
			    	page:"Step1Form",
			    	event:"onBtnNext"
		    	}
            ],
            onBtnBack:"handleBack",
            onBtnNext:"handleNext"
        },
        { kind:"BannerHeader" },	
        {
        	layoutKind: "FittableColumnsLayout",
        	style:"margin:1px",
        	components:[
        		{
        			tag:"div",
        			classes:"breadCrumb1",
        			content:"Step 2"
        		},
        		{
        			tag:"div",
        			classes:"breadCrumb2",
        			content:"Pricing Information"
        		},
        		{ fit:true }
        	]
        },
		{ style:"height:10px" },
		{
			classes:"setWidthFull inflatePadding",
			components:[
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms",
							content:"Valuer Price"
						},
						{ 
							name:"txtValuerPrice",
							kind:"InputItemControl",
							classes:"appFormDeco",
							placeholder:"Enter Valuer Price (RM)...",
							type:"number",
							fit:true,
							maxlength:100
						}
					]
				},
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms",
							content:"Customer Asking Price"
						},
						{ 
							name:"txtAskingPrice",
							kind:"InputItemControl",
							classes:"appFormDeco",
							type:"number",
							placeholder:"Enter Customer Asking Price...",
							fit:true,
							maxlength:15
						}
					]
				},
				/*
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms",
							content:"Appraisal Number"
						},
						{ 
							name:"txtAppraisalNo",
							kind:"InputItemControl",
							classes:"appFormDeco",
							placeholder:"Enter Appraisal Number...",
							fit:true,
							maxlength:15
						}
					]
				},
				*/
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms",
							content:"Validity Date"
						},
						{
							tag:"h2",
							classes:"appFormMid",
							content:"From"
						},
						{ 
							name:"txtValidityDateFrom",
							kind:"InputDateTimeControl",
							type:"date",
							classes:"appFormDeco",
							fit:true,
							maxlength:15
						}
					]
				},
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms",
							allowHtml:true,
							style:"border-top:none",
							content:"&nbsp;"
						},
						{
							tag:"h2",
							classes:"appFormMid",
							content:"To"
						},
						{ 
							name:"txtValidityDateTo",
							kind:"InputDateTimeControl",
							type:"date",
							classes:"appFormDeco",
							fit:true,
							maxlength:15
						}
					]
				},
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms last",
							content:"Type"
						},
						{ 
							name:"pckType",
							kind:"StandardPicker",
							classes:"whiteForm last",
							fit:true,
							data:[
								{content:"Trade-in",active:true},
								{content:"Direct Purchase"}
							]
						}
					]
				}
			]
		},
		{
			style:"height:20px"
		}
	],
	create: function() {
	    this.inherited(arguments);
	    this.bubble("onSubPageShow",{subActiveIndex:1});
	},
	destroy:function() {
		var payLoad = {};
		payLoad.valuerPrice = this.$.txtValuerPrice.getValue();
		payLoad.askingPrice = this.$.txtAskingPrice.getValue();
		payLoad.validDateFrom = this.$.txtValidityDateFrom.getValue();
		payLoad.validDateTo = this.$.txtValidityDateTo.getValue();
		payLoad.type = this.$.pckType.getValue();
		console.log(payLoad);
		//this.global.storeLocal("TOPMARK.FORMDATA",payLoad);
		this.inherited(arguments);
	},
	handleNext: function(inSender,inEvent) {
		this.bubble("onChangePage");
	},
	handleBack: function(inSender,inEvent) {
		this.bubble("onBackPage");
	}
});