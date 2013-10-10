enyo.kind({
    name: "InputDisplayControl",
    kind: "Control",
    placeholder:"Insert value...",
	validation:"none",
	value:"",
    search:false,
	maxlength: 100,
    decoratorClass:"",
    customWidth:0,
    title:"",
    type:"text",
    components: [
        { 
            kind:"Signals", 
            onBusy:"handleOnBusy",
            onFormLock:"handleOnBusy",
            onRelease:"handleOnRelease"
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
							layoutKind: "FittableColumnsLayout",
                            components:[
                            {
                                kind: "onyx.InputDecorator",
                                name:"inputDecorator",
    							classes:"appInputForm readOnly",
                                fit:true,
    							components: [
    								{
    									classes:"setWidthFull",
     									components:[
    										{
    											kind: "onyx.Input",
    											name: "txtInput",
     											value: "Input Area",
                                                classes:"setWidthFull",
                                                style:"font-size:1em !important;background:none !important",
    											fit:true,
     											oninput:"inputChanged",
                                                attributes : {
                                                    readonly:true
                                                }

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
    create:function(){
    	this.inherited(arguments);
    	this.setTitle(this.title);
        this.setAttributes(this.type, this.placeholder,this.maxlength,this.validation,this.value);
         if(this.customWidth > 0) {
            this.setInputWidth(this.customWidth);
        }
        if(this.decoratorClass != "") {
            this.setInputDecoratorClass(this.decoratorClass);
        }
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
        this.$.txtInput.addStyles("width:"+this.customWidth+"px !important");
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
    	this.$.txtInput.setAttribute("required",this.validation);
    },
    setDisabled:function(bDisabled){
        this.$.txtInput.setDisabled(bDisabled); 
    },
    handleOnBusy:function(inSender,inEvent) {
        this.$.txtInput.setDisabled(true);
    },
    handleOnRelease:function(inSender,inEvent) {
        this.$.txtInput.setDisabled(false);
    },
    inputChanged:function(inSender,inEvent) {
        this.bubble("onInput",inSender);
        if(this.$.txtInput.getValue() != ""){
            this.$.btnInputResetter.removeClass("whiteLabel");
        } else {
            this.$.btnInputResetter.addClass("whiteLabel");
        }
     }
});