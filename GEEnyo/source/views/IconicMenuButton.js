enyo.kind({
    name: "IconicMenuButton",
    layoutKind: "FittableColumnsLayout",
    components: [
        {
            tag:"div",
            classes:"specialIcon",
            name:"txtIcon",
            components:[
                {
                    name:"iconDiv",
                    classes:"icon-plus"
                }
            ]
        },
        {
        	tag:"div",
        	name:"txtButton",
        	content: "Click Me"
        }
    ],
    published:{
        data:null		
    },
    create: function() {
        this.inherited(arguments);
    },
    dataChanged:function(){
        this.$.txtButton.setContent(this.data.name);
        this.$.iconDiv.setClasses("");
        this.$.iconDiv.setClasses(this.data.icon);
    },
    setSelected: function(inSelected) {
        this.addRemoveClass("selected",inSelected);
    }
});