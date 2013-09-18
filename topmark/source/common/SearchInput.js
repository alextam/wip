enyo.kind({
	name: "SearchInput",
	kind: "Control",
	placeholder:"Insert value...",
	validation:"",
	value:"",
	search:true,
	maxlength: 100,
	decoratorClass:"",
	customWidth:0,
    resetButton:true,
	autoLock:true,
	title:"",
	type:"text",
	components: [
		{
			kind:"Signals", 
			onFormLock:"handleOnBusy"
		},
		{
			tag:"div",
			classes:"formInput",
			components:[
				{
					components:[
						{
							name:"txtLabel",
							classes:"formLabels truncate",
							content:"Title"
						},
						{
							name:"layoutContainer",
                            layoutKind: "FittableColumnsLayout",
                            components:[
                                {
                                    name:"inputDecorator",
                                    kind: "onyx.InputDecorator",
        							classes:"appInputForm setWidthFull",
         							components: [
                                            { kind:go.Focusable },
                                            {
                                            	name:"container",
                                                layoutKind: "FittableColumnsLayout",
                                                style:"width:100%",
                                            	components:[
                                            		{
                                            			kind: "onyx.Input",
                                            			name: "txtInput",
                                            			value: "Input Area",
                                                        fit:true,
                                                        onblur:"dismissResetter",
                                                        onfocus:"dismissError",
                                            			oninput:"inputChanged",
                                                        onchange:"valueChanged"
                                            		},
                                            		{
                                                        name:"inputSearch",
                                                        style:"color:#ffffff !important;font-size:1.4em;text-align:right;width:30px !important;",
                                                        classes: "formDecoratorButton icon-search"
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
    handlers: {
        onAppDisableInteraction: "disableInteraction",
        onAppEnableInteraction: "enableInteraction"
    },
    create:function(){
    	this.inherited(arguments);
    	this.setTitle(this.title);
        this.reset = this.placeholder;
        this.setAttributes(this.type, this.placeholder,this.maxlength,this.validation,this.value);
        this.$.inputSearch.canGenerate = this.search;
        if(this.customWidth > 0) {
            this.setInputWidth(this.customWidth);
        }
        if(this.decoratorClass != "") {
            this.setInputDecoratorClass(this.decoratorClass);
        }
    },
    rendered:function(){
        this.inherited(arguments);
        
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
        this.$.txtInput.setAttribute("autocapitalize","off");
        this.$.txtInput.setAttribute("autocorrect","off");
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
        } else {
    		this.$.txtInput.setAttribute("required",null); 
            //add in by nyiam to make it able to remove validation anytime.
        }
    },
    setDisabled:function(bDisabled){
        this.$.inputDecorator.addRemoveClass("disabled");
        this.$.txtInput.setDisabled(bDisabled); 
    },
    handleRemoveInput:function(inSender,inEvent) {
        inSender.parent.controls[(inSender.parent.controls.length - 2)].setValue("");    
        this.bubble("onReset",inSender.parent.controls[(inSender.parent.controls.length - 2)]);
    },
    disableInteraction:function(inSender,inEvent) {
        if (this.autoLock){
            this.$.inputDecorator.addClass("disabled");
            this.$.txtInput.setDisabled(true);
        }
    },
    enableInteraction:function(inSender,inEvent) {
        var _this = this;
        if (this.autoLock){
            _this.$.inputDecorator.removeClass("disabled");
            _this.$.txtInput.setDisabled(false); 
        }
    },
    dismissError:function(inSender,inEvent) {
        this.$.inputDecorator.controls[0].focus();
        this.setPlaceHolder(this.reset);
        this.$.container.removeClass("errorDecorator");
        return true;
    },
    dismissResetter:function(inSender,inEvent) {
        this.$.btnInputResetter.addClass("opaque");
    },
    inputChanged:function(inSender,inEvent) {
        this.bubble("onInput",inSender);
       
    },
    valueChanged:function(inSender,inEvent) {
        this.bubble("onChange", {value: this.$.txtInput.getValue()});
    }
});