enyo.kind({
	name: "Header",
	kind: "onyx.Toolbar",
	layoutKind: "FittableColumnsLayout",
	classes:"std45px",
	components: [
		{
			content:"Header",
			fit:true
		}
	],
	create:function(){
		this.inherited(arguments);
		console.log("Header Loaded...");
	}
});