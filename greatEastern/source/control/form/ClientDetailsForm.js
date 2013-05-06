enyo.kind({
    name: "ClientDetailsForm",
    kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
    components:[
		{   
			classes:"setWidthFull inflatePadding marginTop-5px",
			components:[
				{
					tag:"h1",
					content:"Client Details",
					classes:"formLabelHeader"
				},
				{
					classes:"roundedCorner formContainer",
 					components:[
						{
							kind:"PickerItemControl",
							title:"Title",
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
							tag:"h4",
							content:"or",
							classes:"greatEasternRed"
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
 							items:[
								{content: "Creative, Art & Performance"},
								{content: "Vetianiary, Doctor & Medical"},
								{content: "Engineer and Technical"},
								{content: "Sales and Marketing"},
								{content: "Executive and Management"}
							]
						},
						{
							style:"height:5px"
						}
					]
				},
				
				{
					classes:"setWidthFull txtAlignCenter",
					components:[
						{
							classes:"inflatePadding geButton marginTop-30px roundedCorner",
							style:"height:45px",
							kind:"onyx.Button",
							content:"Submit"
						}
					]
				},
				{
					style:"height:30px;"
				}
			]
		} 

	]
});