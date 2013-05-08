enyo.kind({
	name: "App",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
	components: [
		{   	
			kind: "Scroller",
			name: "contentControl",
			fit:true,
			touch:true, 
			thumb:true,
			strategyKind:"TransitionScrollStrategy",
			components:[
				{ kind:"LoginForm" }
			]
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