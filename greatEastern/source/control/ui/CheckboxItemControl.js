enyo.kind({
    name: "CheckboxItemControl",
    kind: "Control",
    title:"",
    checked:false,
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
							tag:"div",
                            fit:true,
                            components:[
                                {name:"chkboxControl", kind:"onyx.Checkbox",style:"margin-top:5px;"} 
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
    	this.setChecked(this.checked);
    	
    },
    setTitle:function(text){
    	this.title = text;
    	this.$.txtLabel.setContent(this.title);
    },
    setChecked:function(value){
        this.checked = value;
        this.$.chkboxControl.checked = value;
    }
});