enyo.kind({
	name: "Step2Form",
	kind: "FittableRows",
	components:[
		{ style:"height:15px" },
		{
			tag:"h2",
			classes:"standardH2",
			content:"Step 2"	
		},
		{
			tag:"h1",
			classes:"standardH1",
			content:"Pricing Information"
		},
		{ style:"height:10px" },
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
					placeholder:"Enter Customer Asking Price...",
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
					name:"txtType",
					content:"&nbsp;",
					style:"height:52px",
					allowHtml:true,
					classes:"appFormDeco last",
					fit:true
				}
			]
		},
		{
			style:"height:20px"
		},
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
		{
			style:"height:20px"
		}
	],
	handleNext: function(inSender,inEvent) {
		this.bubble("onChangePage");
	},
	handleBack: function(inSender,inEvent) {
		this.bubble("onBackPage");
	}
});