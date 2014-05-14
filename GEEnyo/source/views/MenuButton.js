enyo.kind({
    name: "MenuButton",
    components: [
        {
        	tag:"div",
        	name:"txtButton",
        	content: "Click Me"
        }
    ],
    published:{
        data:null		
    },
    dataChanged:function(){
    	this.$.txtButton.setContent(this.data);
    },
    setSelected: function(inSelected) {
        this.addRemoveClass("selected",inSelected);
    }
});