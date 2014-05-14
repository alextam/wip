enyo.kind({
    name: "SwitchButton",
    kind: "Control",
    components: [
        {
        	tag:"div",
        	layoutKind: "FittableColumnsLayout",
        	components:[
        		{
        			name:"txtField",
        			content:"Field Label",
        			classes:"labelField",
                    allowHtml:true,
        			style:"width:140px;font-weight:bold;line-height:35px;"
        		},
        		{
        			components:[
        				{
        					kind:"onyx.ToggleButton",
        					onContent: "Yes",
							offContent: "No"
        				}
        			]
        		}
        	]
        }
    ],
    published:{
    	label:null,
    	value:null,
    	maxlength:null
    },
     create: function() {
        this.inherited(arguments);
        this.labelChanged();
    },
    labelChanged:function(){
    	this.$.txtField.setContent(this.label);
    }
});