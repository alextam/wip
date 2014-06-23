enyo.kind({
	name: "go.StateButton",
	kind: "onyx.Button", 
	isBusy : false,
	allowHtml:true,
	style:"margin:0px !important;padding:4px !important;overflow:hidden !important;",
 	components: [
		{
			tag:"div",
			style:"min-height:20px;margin-top:2px;border:none !important;",
			classes:"centerDiv setWidthFull",
			components : [
				{kind: "Signals", onBusy: "handleOnBusy"},
				{kind: "Signals", onRelease: "handleOnRelease"},
				{
					name:"label",
					style:"font-size:0.95em !important;",
					classes:"centerDiv setWidthFull",
					allowHtml:true,
					content:"Button"
				} 
			]
		}
	],
	handlers: {
		ontap:"handleEvent",
		onclick:"handleEvent"
	},
	create: function(inSender,inEvent){
		this.inherited(arguments);
		this.$.label.setContent( this.content );
		//Do stuff onCreate
	},
	setContent: function(title){
		this.content = title;
		this.$.label.setContent( this.content );
	},
	handleOnBusy: function(){
		this.isBusy = true;
		this.setDisabled( true );
	},
	handleOnRelease: function(){
		this.isBusy = false;
		this.setDisabled( false );
	},
	rendered : function(inSender,inEvent){
		this.inherited(arguments);
		//Do stuff afterRendered
	},
	handleEvent: function(inSender,inEvent){
		if(this.isBusy){
			try {
				inEvent.preventDefault();
			} catch(e) {
				//Do nothing
			}
			return true;
		} 
	}
});