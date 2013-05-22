enyo.kind({
	name: "Footer",
	kind: "onyx.Toolbar",
	layoutKind: "FittableColumnsLayout",
	classes:"std45px",
	components: [
		{
			content:"Footer",
			fit:true
		}
	],
	create:function(){
		this.inherited(arguments);
		console.log("Footer Loaded...");
	}
});