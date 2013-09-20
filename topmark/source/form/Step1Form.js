enyo.kind({
	name: "Step1Form",
	kind: "FittableRows",
	global:go.Global,
	components:[
		{
            kind:"Header",
            title:"Appraisal",
            buttons:[
            	{
			    	name:"btnNext",
			    	visible:true,
			    	position:"right",
			    	content:"Next",
			    	page:"Step1Form",
			    	event:"onBtnNext"
		    	}
            ],
            onBtnNext:"handleBtnNext"
        },
        { kind:"BannerHeader" },	
        {
        	layoutKind: "FittableColumnsLayout",
        	style:"margin:1px",
        	components:[
        		{
        			tag:"div",
        			classes:"breadCrumb1",
        			content:"Step 1"
        		},
        		{
        			tag:"div",
        			classes:"breadCrumb2",
        			content:"Appraisal"
        		},
        		{ fit:true }
        	]
        },
		{ style:"height:15px" },
		{
			classes:"setWidthFull inflatePadding",
			components:[
				{ style:"height:10px" },
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms",
							content:"Owner Name"
						},
						{ 
							name:"txtOwnerName",
							kind:"InputItemControl",
							classes:"appFormDeco",
							placeholder:"Enter Owner Name...",
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
							content:"Contact Number"
						},
						{ 
							name:"txtContactNo",
							kind:"InputItemControl",
							classes:"appFormDeco",
							placeholder:"Enter Contact Number...",
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
							content:"Appraisal Date"
						},
						{ 
							name:"txtAppraisalDateNo",
							kind:"InputDateTimeControl",
							type:"date",
							classes:"appFormDeco last",
							fit:true,
							maxlength:15
						}
					]
				},
				{ style:"height:20px" }
			]
		}
	],
	create: function() {
	    this.inherited(arguments);
	    this.bubble("onSubPageShow",{subActiveIndex:0});
	    this.$.txtAppraisalDateNo.setValue(moment(new Date()).format("YYYY-MM-DD"));

	},
	destroy:function() {
		var payLoad = {};
		payLoad.contactNo = this.$.txtContactNo.getValue();
		payLoad.ownerName = this.$.txtOwnerName.getValue();
		payLoad.appraisalDate = this.$.txtAppraisalDateNo.getValue();
		console.log(payLoad);
		//this.global.storeLocal("TOPMARK.FORMDATA",payLoad);
		this.inherited(arguments);
	},
	handleBtnNext:function(inSender,inEvent) {
		console.log("Submitting form...");
		this.bubble("onChangePage");
	}
});