enyo.kind({
	name: "MasterForm",
	kind: "FittableRows",
	components:[
		{
            kind:"Header",
            title:"Search Vehicle"
        },
		{
			classes:"setWidthFull inflatePadding",
			components:[
				{ style:"height:10px" },
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{ fit:true },
						{
							kind:"Image",
							src:"./assets/img/logo.png",
							style:"width:133px;"
						}

					]
				},
				{ style:"height:15px" },
				{
					classes:"setWidth60 centerDiv",
					components:[
						{
							tag:"h2",
							classes:"standardH2",
							content:"Search By"
						},
						{ style:"height:10px" },
						{
							kind:"StandardPicker",
							data:[
								{ content:"Vehicle Registration No.", active:true },
								{ content:"Chassis No." },
								{ content:"Engine No." },
								{ content:"Make" },
								{ content:"Year" }
							]
						},
						{
							kind:"SearchInput",
							classes:"searchBox",
							placeholder:"Enter Search...",
							maxlength:50
						}
					]
				},
				{ style:"height:20px" },
				{
					classes:"txtAlignCenter",							
					components:[
						{
							name:"btnSearch",
							kind:"onyx.Button",
							style:"width:220px",
							classes:"blackButton",
							content:"Search"
						}
					]
				},
				{ style:"height:20px" }

			]
		}
	],
	create: function() {
		this.inherited(arguments);
	},
	rendered: function() {
		this.inherited(arguments);
	}
});