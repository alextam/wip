enyo.kind({
    name: "SearchResult",
	kind: "Scroller",
	touch:true, 
	thumb:true,
	strategyKind:"TransitionScrollStrategy",
    components:[
			{
				name:"listControl",
				kind: "Repeater", 
				multiSelect: false, 
				//style:"height:200px", 
				count:0,
				touch:true, 
				onSetupItem: "setupItem", 
				components: [
					{
						name: "item", 
						ontap:'listItemTapped', 
						kind:"SearchItem"
					}
				]
			}
	],
	published:{
	    data:null		
	},
	create:function() {
		this.inherited(arguments);
		if(this.data != null) {
			this.dataChanged();
		} else {
			this.$.listControl.setCount(0);	
		}
	},
	dataChanged:function() {
		this.$.listControl.setCount(0);
		if( this.data != null ) {
			this.$.listControl.setCount(this.data.length);
		}
	},
	setupItem:function(inSender,inEvent) {
		inEvent.item.$.item.setData(this.data[inEvent.index]);
	}    
});