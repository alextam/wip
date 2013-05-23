enyo.kind({
    name: "LocationSelectorView",
    classes:"setWidthFull",
    layoutKind: "FittableRowsLayout",
    components: [
        {
        	kind:"PageScrollView",
        	vertical:"true",
        	components:[
        		{
        			name:"locationSelectorMenu",
        			kind:"LocationSelectorMenu",
        			onActivate:"handleSelect",
        			title:"Select One..."
	        	}
        	]
        }
    ],
    create:function(){
    	this.inherited(arguments);
    } 

});