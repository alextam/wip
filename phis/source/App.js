enyo.kind({
	name: "App",
	version: "0.0.1",
	create: function(){
		this.inherited(arguments);
		console.log("App Launching...");
		
	},
	rendered:function(){
		this.inherited(arguments);
		new DashboardPage().renderInto(document.body);
	}
});