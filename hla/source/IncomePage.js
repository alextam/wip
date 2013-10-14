enyo.kind({
    name: "IncomePage",
    kind: "FittableRows",
	classes:"enyo-fit enyo-unselectable",
	nav: Navigator,
	components:[
		{ kind:"IncomePageView" }
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