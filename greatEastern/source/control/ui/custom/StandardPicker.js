enyo.kind({
    name: "StandardPicker",
    kind: "Control",
    items:[],
    components: [
		{
			kind: "onyx.PickerDecorator",
			onSelect: "pickerHandler",
            classes:"appIcon down insetShadow",
			components: [
				{
					kind: "onyx.PickerButton", 
					onChange: "pickerDisplayChange",
 					classes: "pickerButton",
                    components:[
 						{
 							content:"Select One...",
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
     
    create:function(){
    	this.inherited(arguments);
    	if(this.items.length){
    		this.setupItem(this.items);
    	}
    },
    pickerDisplayChange:function(inSender,inEvent) {
    	this.$.labelPickerButtonControl.setContent(this.$.pickerMenuControl.selected.content);
    },
    pickerHandler:function(inSender,inEvent) {
        this.bubble('onChangeItem',this.$.pickerMenuControl.selected);
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