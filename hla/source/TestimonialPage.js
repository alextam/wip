enyo.kind({
	name: "TestimonialPage",
	kind: "FittableRows",
	classes:"enyo-fit enyo-unselectable",
	nav: Navigator,
	components:[
		{ kind:"TestimonialPageView" }
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