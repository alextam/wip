enyo.kind({
	name: "CEOMessagePage",
	kind: "FittableRows",
	classes:"enyo-fit enyo-unselectable",
	nav: Navigator,
	components:[
		{ kind:"PageView" }
	],
	create: function() {
		this.inherited(arguments);
	},
	rendered: function() {
		this.inherited(arguments);
	},
	handleBtnBack: function(inSender,inEvent) {
		this.nav.gotoPage("App");
	}
});