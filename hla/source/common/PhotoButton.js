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
    create: function() {
        this.inherited(arguments);
        
    }
});