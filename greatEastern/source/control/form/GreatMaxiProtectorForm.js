enyo.kind({
	name: "GreatMaxiProtectorForm",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
	components: [
		{   
			classes:"inflatePadding setWidthFull",
			components:[
				{
					components:[
						{
							kind:"PickerItemControl",
							title:"Title",
							classes:"roundedTop"
						},
						{
							
							kind:"onyx.InputDecorator" 
						}
					]
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