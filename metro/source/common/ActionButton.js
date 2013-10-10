enyo.kind({
    name: "ActionButton",
    kind: "Button",
    classes:"borderless",
    components: [
        {
        	tag:"i",
        	name:"appIcon",
        	style:'margin-right:8px',
        	classes: ""
        },
        {
        	name:"txtButtonTitle",
        	allowHtml:true,
        	content:"Title"
        }
    ],
    published:{
    	icon:"icon-add",
    	content:"Tap Me"
    },
    create: function() {
        this.inherited(arguments);
        this.iconChanged();
        this.contentChanged();
    },
    contentChanged:function() {
    	this.$.txtButtonTitle.setContent(this.content);
    },
    iconChanged:function() {
    	this.$.appIcon.setClasses(this.icon);
    }
});