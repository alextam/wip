enyo.kind({
    name: "ContactMenu",
    kind: "Control",
    components: [
        {   
        	name: "repeaterMenu", 
        	kind: "Repeater", 
        	multiSelect: false, 
        	fit:true, 
        	count:0, 
        	touch:true, 
        	onSetupItem: "setupItem", 
        	components: [
        		{
        			name: "menuItem", 
        			classes:"extraMenuItem", 
        			ontap:'listItemTapped', 
        			components: [
    					{
    						name: "itemDiv",
    						kind:"IconicMenuButton",
    						classes:"panels-main-menuitem-dll"
    					}
        			]
        		}
        	]
        }
    ],
    published:{
        data:[
        	{ name:"Add Contact", icon:"icon-plus" },
        	{ name:"Settings", icon:"icon-cog" },
        	{ name:"Logout System", icon:"icon-off" }
        ]		
    },
    create: function() {
        this.inherited(arguments);
        this.dataChanged();
    },
    dataChanged: function() {
    	this.$.repeaterMenu.setCount(this.data.length);
    },
    setupItem: function(inSender,inEvent) {
    	inEvent.item.$.itemDiv.setData(this.data[inEvent.index]);
    }
});