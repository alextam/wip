enyo.kind({
    name: "CoreButton",
    kind: "Control",
    classes:"containerForCore",
    components: [
        {
        	tag:"div",
        	name:"divCoreButton",
        	classes:"coreButton"
        }
    ],
    published:{
        icon:null		
    },
    create: function() {
        this.inherited(arguments);
        this.iconChanged();
    },
    iconChanged:function(inSender,inEvent) {
    	this.$.divCoreButton.setClasses("coreButton "+this.icon);
    }
});