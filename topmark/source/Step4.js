enyo.kind({
	name: "Step4",
	kind: "FittableRows",
	nav: Navigator,
	components:[
		{ 
			kind:"Header",	
			buttons:[
				{
			    	name:"btn5",
			    	visible:true,
			    	position:"right",
			    	content:"Add Tag",
			    	event:"onHandleBtnAdd"
				}
			],
			onHandleBtnAdd:"handleBtnAdd"	
		},
		{
			 fit:true,
			components:[
				{
					classes:"inflatePadding",
					kind:"Step4Form",
					onChangePage:"handleBtnNext",
					onBackPage:"handleBtnBack"
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
	handleBtnNext: function(inSender,inEvent){
		this.nav.gotoPage("Step5");
	},
	handleBtnBack: function(inSender,inEvent) {
		this.nav.gotoPage("Step3");
	},
	handleBtnAdd: function(inSender,inEvent) {
		alert("!");
	}
});