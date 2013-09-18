enyo.kind({
    name: "MenuButton",
    style:"height:45px",
    layoutKind: "FittableColumnsLayout",
    components: [
        {
        	tag:"div",
            style:"width:60px;",
            components:[
                {
                    name:"iconItem",
                    style:"margin-left:8px;line-height:30px;font-size:1.4em",
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
    setTitle:function(value){
        this.$.txtMenuItem.setContent(value);
    },
    setIcon:function(value){
    	this.$.iconItem.setClasses("icon "+value);
        //this.$.iconItem.addClass(value);
    }
});