enyo.kind({
	name: "SettingsForm",
	kind: "FittableRows",
	global:go.Global,
	components:[
		{
            kind:"Header",
            title:"Settings"
        },
      	{
			classes:"setWidthFull inflatePadding",
			components:[
				{ style:"height:15px" },
				{
					classes:"setWidth60 centerDiv",
					components:[
						{
							classes:"txtAlignCenter",							
							components:[
								{
									name:"btnReset",
									kind:"onyx.Button",
									style:"width:250px",
									classes:"blackButton",
									content:"Reset Data",
									ontap:"handleBtnReset"
								}
							]
						}		 
					]
				},
				{ style:"height:15px" }
			]
		}
				
	],
	create: function() {
		this.inherited(arguments);
		this.bubble("onSubPageHide");
	},
	rendered: function() {
		this.inherited(arguments);
	},
	handleBtnReset: function(inSender,inEvent) {
		go.PhoneGapSuit.alert("Resetting Data...");
		this.global.resetLocal("TOPMARK.TOYOTA");
		this.global.resetLocal("TOPMARK.TOYOTA.TAGS");
		this.service = new Service().initData();
	}
});