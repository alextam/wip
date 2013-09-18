enyo.kind({
	name: "Step2",
	kind: "FittableRows",
	nav: Navigator,
	components:[
		{ kind:"Header"	},
		{
			 fit:true,
			components:[
				{
					classes:"inflatePadding",
					kind:"Step2Form",
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
		this.nav.gotoPage("Step3");
	},
	handleBtnBack: function(inSender,inEvent) {
		this.nav.gotoPage("Step1");
	}
});