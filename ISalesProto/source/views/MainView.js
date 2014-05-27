/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/

enyo.kind({
	name: "MainView",
	kind: "FittableRows",
	fit: true,
	components:[
		{
			kind:"Header",
			readOnly:false,
			onNextButtonTapped:"handleNextTapped"
		},
		{
			fit:true,
			classes:"inflatePadding",
			components:[
				{
					tag:"h1",
					content:"CORE"
				},
				{
					tag:"h3",
					classes:"questionTxt",
					content:"What are your priorities for savings?"

				},
				{
					style:"height:180px"
				},
				{
					layoutKind: "FittableColumnsLayout",
					classes:"alignCenter",
					name:"choiceControl",
					components:[
						{
							kind:"CoreControl",
							classes:"car",
							icon:"Car"
						},
						{
							kind:"CoreControl",
							classes:"wedding",
							icon:"Wedding"
						},
						{
							kind:"CoreControl",
							icon:"Property"
						},
						{
							kind:"CoreControl",
							icon:"NewBorn"
						},
						{
							kind:"CoreControl",
							icon:"Education"
						}
					]
					
				}
			]
		}
	],
	
	handleNextTapped:function(inSender,inEvent) {
		//console.log(this.$.choiceControl.controls);
		var intentValue = [];
		for(var i = 0;i < this.$.choiceControl.controls.length;i++){
			intentValue.push({name:this.$.choiceControl.controls[i].icon,value:this.$.choiceControl.controls[i].getValue()});
		}
		var sv = new StrTestView({data:intentValue});
		sv.renderInto(document.body);
	}
});
