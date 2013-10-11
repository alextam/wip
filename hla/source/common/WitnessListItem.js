enyo.kind({
    name: "WitnessListItem",
    kind: "Control",
    classes:"witnessListItem",
    layoutKind: "FittableColumnsLayout",
    components: [
        {
        	name:"photo",
        	kind:"PhotoButton",
        	classes:"photoListItem alt",
        	title:""
        },
        {
        	name:"dataDiv",
        	style:"width:252px",
        	FittableColumnsLayout:"FittableRowsLayout",
        	components:[
        		{
	        		tag:"h2",
	        		name:"headerTitle",
        			content:"Set Title...",
        			classes:"standardSeanH2"
        		},
        		{
        			kind:"Image",
        			style:"width:255px;",
        			src:"assets/img/lowerData.png"
        		}
        	]
        }
    ],
    published:{
        data:null		
    },
    create: function() {
        this.inherited(arguments);
        if (this.data != null) {
            this.dataChanged();
        }
    },
    dataChanged: function() {
    	if (this.data.alt) {
    		this.$.photo.setClasses("photoListItem0" + " " +this.data.photoClass);
    		this.$.dataDiv.setClasses("dataDiv0");
    	} else {
    		this.$.photo.setClasses("photoListItem1" + " " +this.data.photoClass);
    		this.$.dataDiv.setClasses("dataDiv1");
    	}
    	this.$.headerTitle.setContent(this.data.name);
    }
});