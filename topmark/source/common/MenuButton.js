enyo.kind({
    name: "MenuButton",
    style:"height:45px",
    layoutKind: "FittableColumnsLayout",
    components: [
        {
        	tag:"div",
            style:"width:52px;",
            components:[
                {
                    name:"iconItem",
                    style:"margin-left:8px;line-height:30px;font-size:1.4em;text-align:center !important",
                    classes:"icon"
                }
            ]
        },
        {
        	tag:"h1",
        	name:"txtMenuItem",
        	style:"line-height:28px",
        	allowHtml:true,
        	content: "Set Title..."
        }
    ],
    setSelected: function(inSelected) {
        this.addRemoveClass("selected",inSelected);
    },
    setTitle:function(value){
        this.$.txtMenuItem.setContent(value);
    },
    setIcon:function(value){
    	this.$.iconItem.setClasses("icon "+value);
        //this.$.iconItem.addClass(value);
    }
});