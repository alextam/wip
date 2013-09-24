enyo.kind({
	name:"BannerHeader",
	kind: "Control",
	layoutKind: "FittableColumnsLayout",
	classes:"drawerLine whiteBg",
	style:"height:133px",
	global:go.Global,
	components:[
		{
			kind:"Image",
			src:"./assets/img/showCase01.png",
			style:"width:200px;margin-right:5px;height:133px"
		},
		{
			fit:true,
			style:"padding:12px",
			components:[
				{
					tag:"h1",
					classes:"standardH1 truncate",
					name:"txtModelRegNo",
					style:"font-size:1.2em;",
					content:"Vehicle Title Here... (CAR NO)"
				},
				{
					style:"height:10px"
				},
				/*
				{
					tag:"h2",
					name:"txtType",
					classes:"standardH2",
					style:"color:#777;font-size:0.9em;",
					content:"Year "
				},
				*/
				{
					tag:"h2",
					name:"txtChassisNo",
					classes:"standardH2",
					style:"color:#777;font-size:0.9em;",
					content:"Chassis No. : "
				},
				{
					tag:"h2",
					name:"txtEngineNo",
					classes:"standardH2",
					style:"color:#777;font-size:0.9em;",
					content:"Engine No. : "
				},
				{
					tag:"h2",
					name:"txtYearAndDescription",
					classes:"standardH2 truncate",
					style:"color:#777;font-size:0.9em;",
					content:"Description..."
				}

			]
		},
		{
			classes:"logoPadding",
			components:[
				{
					kind:"Image",
					src:"./assets/img/logo.png",
					style:"width:133px;"
				}
			]
		}
	],
	published:{
	    data:null		
	},
	create:function() {
		this.inherited( arguments );
		this.setData( this.global.getLocal("TOYOTA.SESSION") );	
	},
	dataChanged: function() {
		this.$.txtModelRegNo.setContent(this.data.model + " ("+this.data.vehicleno+")");
		this.$.txtYearAndDescription.setContent(this.data.type+" Vehicle ("+this.data.year+"), "+this.data.description);
		this.$.txtChassisNo.setContent("Chassis No.: "+this.data.chassis);
		this.$.txtEngineNo.setContent("Engine No. : "+this.data.engineno);
	}
});