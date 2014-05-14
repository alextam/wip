enyo.kind({
    name: "GridItem",
    kind: "Control",
    components: [
    	{
	        ontap:"handleOpenCloseDrawer",
	        layoutKind: "FittableColumnsLayout",
	        components:[
		        {
					fit:true,
					classes:"cellData",
					name:"txtPolicy",
					content:"Policy Type"
				},
				{
					style:"width:135px",
					classes:"cellData alignRight",
					name:"txtAnnualPremium",
					content:"Annual Premium"
				},
				{
					style:"width:135px",
					classes:"cellData alignRight",
					name:"txtSumInsured",
					content:"Sum Insured"
				},
				{
					style:"width:125px",
					classes:"cellData alignRight",
					name:"txtMaturityDate",
					content:"Maturity Date"
				},
				{
					style:"width:125px",
					classes:"cellData alignRight",
					name:"txtLifeInsured",
					content:"Life Insured"
				}
			]
		},
		{
			name: "inputDrawer", 
			kind: "enyo.Drawer",
			open:false, 
			animated: true, 
			components: [
				{
					classes:"paddingSupport",
					components:[
						{
							kind:"DrawerInputControl"
						}
					]	
				}
			]
		}
    ],
    published:{
        data:null		
    },
    closeDrawer:function() {
    	this.$.inputDrawer.setOpen(false);
    	this.parent.setClasses("gridRow");
    },
    handleOpenCloseDrawer:function(inSender,inEvent) {
    	this.bubble("onCloseAllDrawer",{selectedRecord:inEvent.index});
    	this.$.inputDrawer.setOpen(!this.$.inputDrawer.open);
    	if(this.$.inputDrawer.open){
    		this.parent.setClasses("gridRow selected");
    	} else {
    		this.parent.setClasses("gridRow");
    	}
    },
    dataChanged: function() {
    	this.$.txtPolicy.setContent(this.data.name);
    	this.$.txtAnnualPremium.setContent(this.data.annual);
    	this.$.txtSumInsured.setContent(this.data.sum);
    	this.$.txtMaturityDate.setContent(this.data.maturity);
    	this.$.txtLifeInsured.setContent(this.data.age);
    }
});