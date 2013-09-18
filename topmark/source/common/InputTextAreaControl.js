enyo.kind({
    name: "InputTextAreaControl",
    kind: "onyx.InputDecorator",
    classes:"setWidthFull appInputForm",
    style:"min-height:90px",
    components: [
        { kind:go.Focusable },
        {
        	kind:"onyx.TextArea",
        	name:"txtInput",
        	classes:"setWidthFull",
        	onfocus:"dismissError",
        	style:"min-height:58px"
        }
    ],
    published:{
    	placeholder:"Insert value...",
		validation:"",
		value:"",
		maxlength: 100,
		decoratorClass:"",
        readOnly:false,
		autoLock:true,
		disabled:false
    },
    create:function(){
        this.inherited(arguments); 
        this.reset = this.placeholder;
        this.placeholderChanged();
        this.maxlengthChanged();
        this.valueChanged();
        this.readOnlyChanged();
        this.disabledChanged();
        this.validationChanged();
        this.$.txtInput.setAttribute("autocapitalize","off");
        this.$.txtInput.setAttribute("autocorrect","off");
    },
    valueChanged:function(){
    	this.$.txtInput.setValue(this.value);
    },
    readOnlyChanged:function(){
        if (this.readOnly){
            this.addClass("readOnly");   
        }
        this.$.txtInput.setAttribute("readonly",this.readOnly);
    },
    disabledChanged:function(){
    	this.$.txtInput.setDisabled(this.disabled);
    },
    placeholderChanged:function(){
    	this.setPlaceHolder(this.placeholder);
    },
    validationChanged:function(){
    	if (this.validation != ""){
            this.$.txtInput.setAttribute("required",this.validation);
        }
    },
    dismissError:function(inSender,inEvent) {
        this.controls[0].focus();
        this.setPlaceHolder(this.reset);
        this.removeClass("errorDecorator");
        return true;
    },
    maxlengthChanged:function(){
    	this.setMaxLength(this.maxlength);
    },
    setPlaceHolder:function(placeholder){
    	this.placeholder = placeholder;
    	this.$.txtInput.setAttribute("placeholder",this.placeholder);
    },
    setMaxLength:function(maxlength){
    	this.maxlength = maxlength;
    	this.$.txtInput.setAttribute("maxlength",this.maxlength);
    }
});