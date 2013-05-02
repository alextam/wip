enyo.kind({
    name: "PickerItemControl",
    kind: "Control",
    title:"",
    items:[],
    components: [
        {
			tag:"div",
			classes:"formPicker",
			components:[
				{
					layoutKind: "FittableColumnsLayout",
					components:[
						{
							name:"txtLabel",
							classes:"setWidth25 formLabels truncate",
							content:"Set Title"
						},
						{
							name:"standardPicker",
                            kind:"StandardPicker",
                            classes:"pickerMenuItem",
							fit:true
							
						}
					]
				}
			]
		}
    ],
    create:function(){
        var i;
    	this.inherited(arguments);
    	this.setTitle(this.title);
    	if ( this.items.length ){
            this.setupItem(this.items);
    	}
    },
    setTitle:function(text){
    	this.title = text;
    	this.$.txtLabel.setContent(this.title);
    },
    setupItem:function(items){
    	var i;
    	this.items = items;
        this.$.standardPicker.setupItem(this.items);
    }	
});