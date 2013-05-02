enyo.kind({
    name: "StandardPicker",
    kind: "Control",
    items:[],
    components: [
		{
			kind: "onyx.PickerDecorator",
			onSelect: "pickerHandler",
            classes:"appIcon down",
			components: [
				{
					kind: "onyx.PickerButton", 
					onChange: "pickerDisplayChange",
 					classes: "pickerButton",
 					components:[
 						{
 							content:"Select...",
 							name:"labelPickerButtonControl",
 							classes:"setWidth90 truncate" 
 						}
 					]
				},
				{
					kind: "onyx.Picker", 
					name:"pickerMenuControl" 
				}
		]} 

    ],
    events: {
		onchange: ''
	},
    create:function(){
    	this.inherited(arguments);
    	if(this.items.length){
    		this.setupItem(this.items);
    	}
    },
    pickerDisplayChange:function(inSender,inEvent) {
    	this.doChange(this.$.pickerMenuControl.selected);
    	this.$.labelPickerButtonControl.setContent(this.$.pickerMenuControl.selected.content);
    },
    setupItem:function(items){
     	var i;
     	this.items = items;
     	this.$.pickerMenuControl.destroyClientControls();
    	for(i = 0; i < items.length;i++){
    		this.$.pickerMenuControl.createComponent( items[i] );	
    	}

    	this.$.pickerMenuControl.render();
    }
});