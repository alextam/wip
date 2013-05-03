enyo.kind({
    name: "PickerItemShortControl",
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
							classes:"formLabelsAutoWidth formLabels truncate",
                            style:"padding-top:13px !important;",
							content:"Set Title"
						},
                        {
                            name:"standardPicker",
                            kind:"StandardPicker",
                            fit:true,
                            classes:"pickerMenuItem" 
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