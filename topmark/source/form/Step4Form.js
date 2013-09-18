enyo.kind({
	name: "Step4Form",
	kind: "FittableRows",
	components:[
		{ style:"height:15px" },
		{
			tag:"h2",
			classes:"standardH2",
			content:"Step 4"	
		},
		{
			tag:"h1",
			classes:"standardH1",
			content:"Exterior"
		},
		{
			classes:"txtAlignCenter",
			components:[
				{
					kind:"Image",
					src:"assets/img/toyotaExterior.png",
					style:"width:576px;"
				}
			]
			
		},
		{
			tag:"h5",
			classes:"smallNote",
			content:"Note: To add note to the diagram, tap Add Tag and tap the vehicle diagram surface. To edit a tag, just tap on any tag available on the screen."
		},
		{
			name:"txtRemark",
			style:"border:1px solid #ccc !important",
			classes:"appTextAreaFormDeco",
			placeholder:"Enter Tag Remarks Here...",
			kind:"InputTextAreaControl",
			maxlength:255
		},
		{ style:"height:5px" },
		{
			classes:"txtAlignCenter",
			components:[
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