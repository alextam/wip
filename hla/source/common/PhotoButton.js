enyo.kind({
    name: "PhotoButton",
    kind: "Control",
    classes:"photoButtonBase",
    components: [
        {
        	tag:"div",
        	name:"picFrame",
        	classes:"pictureFrame"
        },
        {
        	tag:"h1",
        	name:"txtPhotoTitle",
        	classes:"photoH1",
        	content:"Set Title..."
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
    	console.log("data is set!");
    }
});