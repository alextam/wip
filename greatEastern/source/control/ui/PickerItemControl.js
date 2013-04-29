enyo.kind({
    name: "PickerItemControl",
    kind: "Control",
    title:"",
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
							classes:"setWidth30 formLabels truncate",
							content:"Set Title"
						},
						{
							kind:"StandardPicker",
							fit:true
						}
					]
				}
			]
		}
    ],
    create:function(){
    	this.inherited(arguments);
    	this.setTitle(this.title);
    },
    setTitle:function(text){
    	this.title = text;
    	this.$.txtLabel.setContent(this.title);
    }
});