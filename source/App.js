enyo.kind ({
	name : "App",
	version : "1.0.0",
	style:"margin:15px;",
	components: [
		{
			tag:"h3",
			content: "Welcome to Enyo BootPlate Setup",
		}, 
		{
			tag:"h4",
			content: "1. Store all your app source inside [source] folder. Modify the package.js in [source] folder to link up your js",
		},
		{
			tag:"h4",
			content: "2. All assets like [css], [img] are stored in [assets] folder",
		},
		{
			tag:"h4",
			content: "3. Store all [components] and [controls] seperately. Within [assets] folder"
		},
		{
			tag:"h5",
			content: "Note : API folder is for reference of jsDoc"
		},
		{
			tag:"h5",
			content: "Note : onDeploy - Build command will take all the [lib], [enyo], [source] to minify and copy [assets] files into [build]"
		}
	],
	create:function(inSender,inEvent){
		console.log("Component App Loaded");
		this.inherited(arguments);
	}
});
