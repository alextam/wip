enyo.kind({
    name: "GridRepeater",
    kind: "Control",
    components: [
        {
    		name: "actualGrid", 
    		kind: "Repeater", 
    		multiSelect: false, 
    		fit:true, 
    		count:0, 
    		touch:true, 
    		onSetupItem: "setupItem", 
    		components: [
    			{
    				name: "item", 
                    classes:"gridRow",
    				ontap:'listItemTapped', 
    				components: [
    						{
    							name: "itemTitle",
    							kind:"GridItem"
    						}
    				]
    			}
    		]
        }
       
    ],
    published:{
        data:null		
    },
    handlers:{
        onCloseAllDrawer:"handleCloseAll"
    },
    dataChanged: function() {
    	this.$.actualGrid.setCount(this.data.length);
    },
    handleCloseAll:function(inSender,inEvent) {

        for(var i = 0; i < this.$.actualGrid.controls.length;i++){
            //console.log(this.$.actualGrid.controls[i].controls[0].controls[0]);
            this.$.actualGrid.controls[i].controls[0].controls[0].closeDrawer();
        }
        
    },
    setupItem: function(inSender,inEvent) {
    	inEvent.item.$.itemTitle.setData(this.data[inEvent.index]);
    }
});