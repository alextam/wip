enyo.kind({
    name: "PriceGuideForm",
    kind: "Control",
    components: [
    	{   
    		name: "repeaterControl", 
    		kind: "Repeater", 
    		multiSelect: false, 
    		fit:true, 
    		count:0, 
    		touch:true, 
    		onSetupItem: "setupItem", 
    		components: [
    			{
    				name: "item", 
    				style:'padding:10px;height:30px;', 
    				classes:'drawerLine',
    				ontap:'listItemTapped',
    				layoutKind: "FittableColumnsLayout", 
    				components: [
						{
							tag:"h2",
							classes:"standardH2",
							name: "txtModel",
                            style:"line-height:30px;width:420px",
							content:"Set Model"
						},
						{
							tag:"h2",
							classes:"standardH2",
							name:"txtYear",
							style:"line-height:30px;width:100px",
							content:"Year"
						},
						{
							tag:"h2",
							fit:true,
							classes:"standardH2 txtAlignRight",
							name:"txtPrice",
                            style:"line-height:30px;",
							content:"Price"
						}
    				]
    			}
    		]
    	}
    ],
    published:{
        data:null		
    },
    create: function() {
        this.inherited(arguments);
        var _this = this;
        this.service = new Service().loadPriceGuide()
		.done(function(result){
			_this.setData(result);
		});
    },
    dataChanged: function() {
    	console.log(this.data);
    	this.$.repeaterControl.setCount(this.data.length);
    },
    setupItem:function(inSender,inEvent) {
    	inEvent.item.$.txtModel.setContent(this.data[inEvent.index].model);
    	inEvent.item.$.txtYear.setContent(this.data[inEvent.index].year);
    	inEvent.item.$.txtPrice.setContent(this.data[inEvent.index].price);
    }

});