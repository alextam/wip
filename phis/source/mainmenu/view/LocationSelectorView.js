enyo.kind({
    name: "LocationSelectorView",
    classes:"setWidthFull",
    components: [
        {
        	layoutKind: "FittableRowsLayout",
        	classes:"inflatePadding",
        	components:[
        		{
        			classes:"centerDiv floatingMenuDiv",
					components:[
	        			{
	        				style:"height:25px"
	        			},
	        			{
				        	tag:"h1",
				        	name:"labelSelectTitleControl",
				        	content:"Select one..."
				        },
				        {
				        	components:[
				        	   {
									classes:"floatingMenu",
 									components:[
										{
											tag:"h1",
											content:"ahahaha"		
										}
									]
				        	   }
				        	]
				        }
	        		]
        		}

        	]
        		
        }
    ],
    create:function(){
    	this.inherited(arguments);
    },
    setTitle:function(title){
    	console.log(title);
    }

});