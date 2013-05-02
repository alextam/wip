enyo.kind({
	name: "GreatMaxiProtectorForm",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
	components:[
		{   
			classes:"setWidthFull",
			components:[
				{
					classes:"inflatePadding",
					components:[
						{
							kind:"PickerItemControl",
							title:"Title",
							classes:"roundedTop",
							items:[
								{content: "Dr."},
								{content: "Mr."},
								{content: "Ms."}
							]
						},
						{
							kind:"InputItemControl",
							title:"Name",
							placeholder:"Client's Name",
							validation:"required",
							maxlength: 80,
							value:""
						},
						{
							kind:"InputItemControl",
							title:"DOB",
							type:"date",
							placeholder:"DOB (DD/MM/YYYY)",
							validation:"xor",
							maxlength: 10,
							value:""
						},
						{
							kind:"InputItemControl",
							title:"Age Next Birthday",
							type:"number",
							placeholder:"Min = 1, Max = 55",
							validation:"xor",
							maxlength: 3,
							value:""
						}, 
						{
							kind:"PickerItemControl",
							title:"Gender",
 							items:[
								{
									content: "Male", active:true
								},
								{
									content: "Female"
								}
							]
						},
						{
							kind:"CheckboxItemControl",
							title:"Smoker"
 							
						},
						{
							kind:"PickerItemControl",
							title:"Occupation",
 							items:[
								{content: "Architect"},
								{content: "Doctor"},
								{content: "Engineer"},
								{content: "Sales"},
								{content: "Technical"}
							]
						},
						{
							kind:"PickerItemControl",
							title:"Occupation Class",
							classes:"roundedBottom",
 							items:[
								{content: "Creative, Art & Performance"},
								{content: "Vetianiary, Doctor & Medical"},
								{content: "Engineer and Technical"},
								{content: "Sales and Marketing"},
								{content: "Executive and Management"}
							]
						}
					]
				},
				{
					classes:"setWidthFull txtAlignCenter",
					components:[
						{
							classes:"inflatePadding",
							style:"height:45px",
							kind:"onyx.Button",
							content:"Submit"
						}
					]
				},
				{
					style:"height:50px"
				}
			]
		} 

	],
	create: function(inSender,inEvent){
		this.inherited(arguments);
		//Do stuff onCreate
	},
	rendered : function(inSender,inEvent){
		this.inherited(arguments);
		//Do stuff afterRendered
	}

});