enyo.kind({
	name: "Step3Form",
	kind: "FittableRows",
	components:[
		{
            kind:"Header",
            title:"Other Info",
            buttons:[
            	{
			    	name:"btnBack",
			    	visible:true,
			    	content:"Back",
			    	page:"Step2Form",
			    	event:"onBtnBack"
		    	},
            	{
			    	name:"btnNext",
			    	visible:true,
			    	position:"right",
			    	content:"Next",
			    	page:"Step4Form",
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
        			content:"Step 3"
        		},
        		{
        			tag:"div",
        			classes:"breadCrumb2",
        			content:"Other Information"
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
							content:"Body Colour"
						},
						{ 
							name:"txtBodyColor",
							kind:"InputItemControl",
							classes:"appFormDeco",
							placeholder:"Enter Body Colour...",
 							fit:true,
							maxlength:100
						},
						{
							kind:"Button",
							style:"height:52px;width:90px",
							classes:"borderless breadCrumb2",
							content:"Photo",
							ontap:"handleBtnValidate"
						}
					]
				},
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms",
							content:"Number of Owners"
						},
						{ 
							name:"txtNoOfOwner",
							kind:"InputItemControl",
							classes:"appFormDeco",
							placeholder:"Enter Number of Owners...",
							type:"number",
							fit:true,
							maxlength:2
						}
					]
				},
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms",
							content:"Mileage (KM)"
						},
						{ 
							name:"txtMileage",
							kind:"InputItemControl",
							classes:"appFormDeco",
							placeholder:"Enter Mileage (KM)...",
							type:"number",
							fit:true,
							maxlength:12
						}
					]
				},
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms",
							content:"Estimated Repair Cost (RM)"
						},
						{ 
							name:"txtEstimatedRepairCost",
							kind:"InputItemControl",
							classes:"appFormDeco",
							placeholder:"Enter Estimated Repair Cost...",
							type:"number",
							fit:true,
							maxlength:12
						}
					]
				},
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							tag:"h2",
							classes:"appForms",
							content:"New Car Model"
						},
						{ 
							name:"txtNewCarModel",
							kind:"InputItemControl",
							classes:"appFormDeco",
							placeholder:"New Car Model...",
							fit:true,
							maxlength:12
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
		 					content:"Appraisal For Outlet"
						},
						{ 
							name:"txtNewCarBranch",
							kind:"InputItemControl",
							classes:"appFormDeco",
							placeholder:"New Car Branch...",
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
		 					content:"Sales Advisor"
						},
						{ 
							name:"txtSalesAdvisor",
							kind:"InputItemControl",
							classes:"appFormDeco",
							placeholder:"Enter Sales Advisor...",
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
							content:"Remarks"
						},
						{ 
							name:"txtRemarks",
							kind:"InputItemControl",
							placeholder:"Enter Remarks...",
		 					classes:"appFormDeco last",
							fit:true
						}
					]
				},
				{ style:"height:20px" }
			]
		}
	],
	create: function() {
	    this.inherited(arguments);
	    this.bubble("onSubPageShow",{subActiveIndex:2});
	},
	destroy:function() {
		var payLoad = {};
		payLoad.color = this.$.txtBodyColor.getValue();
		payLoad.noOfOwners = this.$.txtNoOfOwner.getValue();
		payLoad.mileage = this.$.txtMileage.getValue();
		payLoad.estimatedRepairCost = this.$.txtEstimatedRepairCost.getValue();
		payLoad.newCarModel = this.$.txtNewCarModel.getValue();
		payLoad.appraisalOutlet = this.$.txtNewCarBranch.getValue();
		payLoad.salesAdvisor = this.$.txtSalesAdvisor.getValue();
		payLoad.remarks = this.$.txtRemarks.getValue();
		console.log(payLoad);
		//this.global.storeLocal("TOPMARK.FORMDATA",payLoad);
		this.inherited(arguments);
	},
	handleNext:function(inSender,inEvent) {
		this.bubble("onChangePage",{page:"Step4Form"});
	},
	handleBack: function(inSender,inEvent) {
		this.bubble("onBackPage",{page:"Step2Form"});
	}
});