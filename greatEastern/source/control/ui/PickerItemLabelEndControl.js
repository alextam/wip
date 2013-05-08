enyo.kind({
    name: "PickerItemLabelEndControl",
    kind: "Control",
    title:"",
    endLabel:"Unit",
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
        							
        						},
                                {
                                    name:"txtLabelEnd",
                                    tag:"h1",
                                    classes:"labelFormEnd setWidth48 truncate",
                                    content:" "
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

        this.setupLabelEnd(this.endLabel);
    },
    setTitle:function(text){
    	this.title = text;
    	this.$.txtLabel.setContent(this.title);
    },
    setupLabelEnd:function(text){
        this.endLabel = text;
        this.$.txtLabelEnd.setContent(this.endLabel);   
    },
    setupItem:function(items){
    	var i;
    	this.items = items;
        this.$.standardPicker.setupItem(this.items);
    }	
});