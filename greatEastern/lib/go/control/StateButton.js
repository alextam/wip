enyo.kind({
	name: "go.StateButton",
	kind: "onyx.Button", 
	isBusy : false,
	style:"margin:0px !important;",
 	components: [
		{
			tag:"div",
			style:"height:20px;margin-top:2px;",
			classes:"centerDiv setWidthFull",
			components : [
				{kind: "Signals", onBusy: "handleOnBusy"},
				{kind: "Signals", onRelease: "handleOnRelease"},
				{
					name:"label",
					style:"font-size:1.0em !important;",
					classes:"centerDiv setWidthFull",
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
			return true;
		} 
	}
});