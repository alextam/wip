enyo.kind({
	name: "Footer",
	kind: "onyx.Toolbar",
	phoneGap:go.PhoneGapSuit,
	layoutKind: "FittableColumnsLayout",
	classes:"std45px reset",
	components: [
		{ fit:true }
	],
	create:function(){
		this.inherited(arguments);
	}
	
});