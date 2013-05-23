enyo.kind({
    name: "LocationSelectorMenu",
    kind: "Control",
    title: "Select one...",
    datasource: [],
    components: [
    	{
        	layoutKind: "FittableRowsLayout",
        	classes:"inflatePadding",
        	components:[
        		{
        			classes:"centerDiv floatingMenuDiv",
					components:[
	        			{ style:"height:25px" },
	        			{
				        	tag:"h1",
				        	classes:"headerFloatingMenuText",
				        	name:"labelSelectTitleControl",
				        	content:"Select one..."
				        },
				        {
 							style:"height:5px"
 						},
				        {
				        	components:[
				        	   {
									name:"locationMenuControl",
									classes:"floatingMenu",
									components:[
										{
											name: "repeater", 
											kind: "Repeater", 
											fit:true, 
											count:0, 
											touch:true, 
											onSetupItem: "setupItem", 
											components: [
												{ // Repeater
													name: "repeaterItem", 
													classes:"inflatePadding menuItemList drawerLine",
								 					components: [
														{
															name: "itemContentControl",
															tag:"h1",
															classes:"truncate",
 															content:"---",
								 							ontap:'listItemTapped',
								 							onclick:'listItemTappedAndroid'
														}
													]
												} // End Repeater
											]
										}	
									] 
 							   },
 							   {
 							   		name:"noRecord",
 							   		classes:"floatingMenu",
 							   		components:[
 							   			{
 							   				tag:"h1",
 							   				classes:"txtAlignCenter headerFloatingMenuText",
 							   				content:"No Record Found"
 							   			}
 							   		]
 							   		
 							   }
				        	] // Repeater Component
				        },
				        { style:"height:30px" }
	        		]
        		}

        	]
        }
    ],
    create:function(){
    	this.inherited(arguments);
    	this.setTitle(this.title);
    	this.refreshList();
    },

    refreshList:function(){
    	if (this.datasource.length){
    		this.$.noRecord.hide();
    		this.$.repeater.setCount(this.datasource.length);
    	} else {
    		this.$.noRecord.show();
    	}
    },
    
    setupItem:function(inSender,inEvent){
    	var repeaterItem = inEvent.item;
    	repeaterItem.$.itemContentControl.setContent(this.datasource[inEvent.index].content);
    },
    setTitle:function(value){
    	this.$.labelSelectTitleControl.setContent(value);
    }
});