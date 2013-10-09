enyo.kind({
	name: "Master",
	kind: "FittableRows",
	nav: Navigator,
	components:[
		{ 
			kind:"Header",
			title:"Search Vehicle"
			/*
			buttons:[
				{
			    	name:"btn1",
			    	visible:true,
			    	content:"Main Menu",
			    	event:"onHandleBtnBack",
			    	page:"App"
		    	}
			],
			onHandleBtnBack:"handleBtnBack"
			*/	
		},
		{
			fit:true,
			components:[
				{
					classes:"inflatePadding",
					kind:"MasterForm"
				}
			]
		},
		{ kind:"Footer" }
	],
	create: function() {
		this.inherited(arguments);
	},
	rendered: function() {
		this.inherited(arguments);
	},
	handleBtnBack: function(inSender,inEvent) {
		//console.log(this.nav);
		this.nav.gotoPage("App");
	}
});