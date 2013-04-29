enyo.kind({
    name: "StandardPicker",
    kind: "Control",
    items:[],
    style:"overflow:hidden",
    components: [
	    {
	        name:"iconPickerDecorator",
			classes:"pickerButton",
			onSelect: "pickerHandler",
			components: [
				{
					content: "",
					name:"pickerButtonControl",
					components:[
						{
							name:"actualDisplayControl",
							classes:"setWidth90 truncate",
							onChange: "pickerDisplayChange",
							content:"Pick One..." 
						}
					]
				},
				{
					kind: "onyx.Picker",
					name: "pickerMenuControl"
				}
			]
		}
    ],
    create:function(){
    	this.inherited(arguments);
    	if(this.items.length){
    		this.setupItem(this.items);
    	}
    },
    pickerDisplayChange:function(inSender,inEvent) {
    	alert("!");
    },
    setupItem:function(items){
    	this.items = items;
    	this.$.pickerMenuControl.destroyClientControls();
    	this.$.pickerMenuControl.createComponent(items);
    	this.$.pickerMenuControl.render();
    }
});