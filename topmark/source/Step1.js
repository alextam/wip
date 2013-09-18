enyo.kind({
	name: "Step1",
	kind: "FittableRows",
	nav: Navigator,
	components:[
		{ 
			kind:"Header",
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
		},
		{
			fit:true,
			components:[
				{
					classes:"inflatePadding",
					kind:"Step1Form",
					onChangePage:"handleBtnSubmit"
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
	handleBtnSubmit: function(inSender,inEvent){
		this.nav.gotoPage("Step2");
	},
	handleBtnBack: function(inSender,inEvent) {
		//console.log(this.nav);
		this.nav.gotoPage("App");
	}
});