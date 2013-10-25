enyo.kind({
	name: "App",
	kind: "FittableRows",
    classes:"enyo-fit enyo-unselectable",
	nav: Navigator,
	components:[
		{ kind:"AnimMenuAreaView" }
    ],		
	create: function() {
		this.inherited(arguments);
	},
	rendered: function() {
		this.inherited(arguments);
	}
    
});