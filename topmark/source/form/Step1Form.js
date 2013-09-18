enyo.kind({
	name: "Step1Form",
	kind: "FittableRows",
	components:[
		{ style:"height:15px" },
		{
			tag:"h2",
			classes:"standardH2",
			content:"Step 1"	
		},
		{
			tag:"h1",
			classes:"standardH1",
			content:"Appraisal"
		},
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
		{
			layoutKind: "FittableColumnsLayout",
			components:[
				{
					tag:"h2",
					classes:"appForms last",
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
		{
			style:"height:20px"
		},
		{
			classes:"txtAlignCenter",							
			components:[
				{
					kind:"onyx.Button",
					content:"Submit",
					ontap:"handleBtnSubmit"
				}
			]
		},
		{
			style:"height:20px"
		}
	],
	handleBtnSubmit:function(inSender,inEvent) {
		console.log("Submitting form...");
		this.bubble("onChangePage");
	}
});