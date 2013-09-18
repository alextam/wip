enyo.kind({
	name: "Step3Form",
	kind: "FittableRows",
	components:[
		{ style:"height:15px" },
		{
			tag:"h2",
			classes:"standardH2",
			content:"Step 3"	
		},
		{
			tag:"h1",
			classes:"standardH1",
			content:"Other Information"
		},
		{ style:"height:10px" },
		{
			layoutKind: "FittableColumnsLayout",
			components:[
				{
					tag:"h2",
					classes:"appForms",
					content:"Body Colour"
				},
				{ 
					name:"txtValuerPrice",
					kind:"InputItemControl",
					classes:"appFormDeco",
					placeholder:"Enter Body Colour...",
					type:"number",
					fit:true,
					maxlength:100
				},
				{
					kind:"onyx.Button",
					content:"Photo"
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
					name:"txtAppraisalNo",
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
		{ style:"height:20px" },
		{
			classes:"txtAlignCenter",
			layoutKind: "FittableColumnsLayout",										
			components:[
				{
					kind:"onyx.Button",
					content:"Back",
					ontap:"handleBack"
				},
				{
					style:"width:5px"
				},
				{
					kind:"onyx.Button",
					content:"Next",
					ontap:"handleNext"
				}
			]
		},
		{ style:"height:20px" }
	],
	handleNext:function(inSender,inEvent) {
		this.bubble("onChangePage");
	},
	handleBack: function(inSender,inEvent) {
		this.bubble("onBackPage");
	}
});