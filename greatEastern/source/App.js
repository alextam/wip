enyo.kind({
	name: "App",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
	components: [
		{   
			kind:"onyx.Button",
			content:"Launch Panel",
			ontap:"handleLaunchPanel" 
		},
		{
			fit:true 	
		} 		
	],
	create: function(inSender,inEvent){
		this.inherited(arguments);
	},
	handleLaunchPanel: function(inSender,inEvent) {
		new MasterPanel().renderInto(document.body);		
	},

	rendered : function(inSender,inEvent){
		this.inherited(arguments);
		//Do stuff afterRendered
	} 
});