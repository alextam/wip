enyo.kind({
    name: "FormItemSmaller",
    kind: "Control",
    classes:"dataBoxSmaller",        	
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
        			style:"width:155px;font-weight:bold;line-height:55px;"
        		},
        		{
        			name:"txtInput",
        			kind:"Input",        	
        			placeholder:"Insert Value Here...",
        			style:"width:195px;padding:10px;border-bottom:1px solid #ccc"
        		}
        	]
        }
    ],
    published:{
    	label:null,
    	value:"",
        maxlength:null,
        placeholder:null		
    },
    create: function() {
        this.inherited(arguments);
        this.labelChanged();  
      	this.valueChanged();
      	this.maxlengthChanged();
      	this.placeholderChanged();
    },
    maxlengthChanged:function(){
    	this.$.txtInput.setAttribute("maxlength",this.getMaxlength());
    },
    valueChanged:function() {
    	this.$.txtInput.setValue(this.value);
    },
    reset:function() {
    	this.setValue("");
    },
    placeholderChanged:function(){
    	this.$.txtInput.setPlaceholder(this.placeholder);
    },
    labelChanged:function(){
    	this.$.txtField.setContent(this.label);
    }
});