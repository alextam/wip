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
					components:[
						{
							name:"txtLabel",
							classes:"formLabelsAutoWidth formLabels truncate",
							content:"Set Title"
						},
                        {
                            layoutKind: "FittableColumnsLayout",
                            components:[
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