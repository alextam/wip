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
        	classes:"photoH1 seanFont",
        	content:"Set Title..."
        }
    ],
    published:{
        title:null		
    },
    create: function() {
        this.inherited(arguments);
      	if (this.title != null) {
      	    this.titleChanged();
      	}  
    },
    titleChanged: function() {
    	this.$.txtPhotoTitle.setContent(this.title);
    }
});