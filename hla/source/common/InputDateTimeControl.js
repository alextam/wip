enyo.kind({
	name: "InputDateTimeControl",
	kind: "Control",
	placeholder:"Insert value...",
	validation:"",
	value:"",
	search:false,
	maxlength: 100,
	decoratorClass:"",
	customWidth:0,
	autoLock:true,
	title:"",
	type:"text",
    inPopup: false,
	components: [
		{ 
			kind:"Signals", 
			onFormLock:"handleOnBusy" // @todo change to an app event
		},
        {
			tag:"div",
			classes:"formInputDateTime",
			components:[
				{
					components:[
						{
							name:"txtLabel",
							classes:"formLabels truncate",
							content:"Title",
                            allowHtml:true
						},
						{
							name:"layoutContainer",
                            layoutKind: "FittableColumnsLayout",
                            components:[
                                {
                                    name:"inputDecorator",
                                    kind: "onyx.InputDecorator",
        							classes:"appInputFormDateTime",
                                    fit:true,
        							components: [
        								{ kind:go.Focusable },
                                        {
        									layoutKind: "FittableColumnsLayout",
                                            classes:"setWidthFull appInputContainer",
         									components:[
                                                {
        											kind: "onyx.Input",
        											name: "txtInput",
         											value: "Input Area",
                                                    style:"font-size:1em !important",
        											fit:true,
                                                    onfocus:"dismissError",
         											oninput:"inputChanged"
        										}
        									]
                                        }
        							]
        						}
                            ]
                        }
					]
				}
			]
		}
    ],
    published: {
        disabled:false,
    },
    handlers: {
        onAppDisableInteraction: "disableInteraction",
        onAppEnableInteraction: "enableInteraction"
    },
    create:function(){
    	this.inherited(arguments);
    	this.setTitle(this.title);
        this.reset = this.placeholder;
        this.setAttributes(this.type, this.placeholder,this.maxlength,this.validation,this.value);
        
        if(this.customWidth > 0) {
            this.setInputWidth(this.customWidth);
        }
        if(this.decoratorClass != "") {
            this.setInputDecoratorClass(this.decoratorClass);
        }
        this.disabledChanged();
    },
    setTitle:function(text){
    	this.title = text;
    	this.$.txtLabel.setContent(this.title);
    },
    setInputDecoratorClass:function(css){
        this.decoratorClass = css;
        this.$.inputDecorator.addClass(this.decoratorClass);
    },
    setInputWidth:function(width){
        this.customWidth = width;
        this.$.txtInput.setStyle("width:"+this.customWidth+"px !important");
    },
    setAttributes:function(type,placeholder,maxlength,validation,value){
    	this.setValue(value);
        this.setType(type);
    	this.setPlaceHolder(placeholder);
    	this.setMaxLength(maxlength);
    	this.setRequired(validation);
    },
    setValue:function(value){
    	this.value = value;
    	this.$.txtInput.setValue(value);
    },
    getValue:function(value){
    	return this.$.txtInput.getValue();
    },
    setType:function(type){
        this.type = type;
        this.$.txtInput.setAttribute("type",this.type);
    },

    setError:function(){
        this.$.inputDecorator.addClass("errorDecorator");
    },
    removeError:function(){
        this.$.inputDecorator.removeClass("errorDecorator");
    },
    setPlaceHolder:function(placeholder){
    	this.placeholder = placeholder;
    	this.$.txtInput.setAttribute("placeholder",this.placeholder);
    },
    setMaxLength:function(maxlength){
    	this.maxlength = maxlength;
    	this.$.txtInput.setAttribute("maxlength",this.maxlength);
    },
    setRequired:function(validation){
        this.validation = validation;
    	if (validation != ""){
            this.$.txtInput.setAttribute("required",this.validation);
        }
    },
    disabledChanged:function(){
        this.$.inputDecorator.addRemoveClass("disabled");
        
        this.$.txtInput.setDisabled(this.disabled); 
    },
   
    disableInteraction:function(inSender,inEvent) {
        if (this.inPopup) {
            return;
        }

        this.currentDisabled = this.disabled;
        if (this.autoLock){
            //this.$.inputDecorator.addClass("disabled");
            this.$.txtInput.setDisabled(true);
        }
    },
    enableInteraction:function(inSender,inEvent) {
        if (this.autoLock){
            //this.$.inputDecorator.removeClass("disabled");

            if(!this.currentDisabled) {
                this.$.txtInput.setDisabled(false);
            }
        }
    },
    dismissError:function(inSender,inEvent) {
        this.$.inputDecorator.controls[0].focus();
        this.setPlaceHolder(this.reset);
        inSender.parent.removeClass("errorDecorator");
        return true;
    }
});