enyo.kind({
	name: "SearchableContactList",
    kind: "FittableRows",
    classes:"searchableContactBox",
    components:[
    	{
    		classes:"searchingBoxControl",
    		components:[
    			{
    				kind:"SearchInput",
    				onInput:"handleSearch",
		        	onReset:"handleSearch",
    				placeholder:"Search Filter..."
    			},
    			{
    				name:"sortByButtonSet",
    				onChange:"handleOrderChange",
    				kind:"SortBy"    				
    			}
    		]
    	},
    	{
    		kind: "List", 
		    name:"contactList",
		    multiSelect: false, 
		    fit:true, 
		    count:0, 
		    touch:true,
		    onSetupItem: "setupItem", 
		    components: [
		        {
		            name: "item", 
		            classes:"cardHolder",
		            ontap:'listItemTapped', 
		            components: [
	                    {
	                        name: "itemTitle",
	                        kind: "BusinessCard"
	                    }
		            ]
		        }
		    ]
    	}
    ],
    published:{
        data:null,
        filteredData:null,
        keyboardInput:""		
    },
    create: function() {
        this.inherited(arguments);
        this.loadContacts();
    },
    rendered: function() {
        this.inherited(arguments);
    },
    handleSearch: function(inSender,inEvent) {
    	this.setKeyboardInput( inEvent.getValue() );
 		this.refreshList();
    },
    handleOrderChange: function() {
    	if(this.data != null) {
    		this.refreshList();	
    	}
    },
    listItemTapped: function(inSender,inEvent) {
        this.bubble("onDataTap",{index:inEvent.index,data:this.filteredData[inEvent.index]});
    },
    loadContacts: function() {
    	var _this = this;
    	this.service = new Service().getClientele()
        .done(function(result){
            console.log(result);
            _this.setData(TAFFY(result));
	    });
    },
    dataChanged: function() {
    	this.refreshList();
    },
    generateFilteredData:function(searchValue){
		var returnedObject;
		var query = {};
		query.name = {likenocase:searchValue};
		if (this.$.sortByButtonSet.getActiveIndex() == 0){
			returnedObject = this.getData()(query).order("rating desc").get();			
		} else if (this.$.sortByButtonSet.getActiveIndex() == 1){
			returnedObject = this.getData()(query).order("income desc").get();
		} else {
			returnedObject = this.getData()(query).order("name").get();
		} 
		return returnedObject;
	},
    refreshList: function() {
    	this.$.contactList.reset();
    	this.setFilteredData( this.generateFilteredData(this.keyboardInput) );
    	this.$.contactList.setCount(this.getFilteredData().length);
    	this.$.contactList.render();
    },
    setupItem: function(inSender,inEvent){
    	this.$.itemTitle.setSelected(inSender.isSelected(inEvent.index));
    	this.$.itemTitle.setData(this.getFilteredData()[inEvent.index]);
    }
    
});