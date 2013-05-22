enyo.kind({
    name: "InputItemControl",
    kind: "Control",
    placeholder:"Insert value...",
	validation:"",
	value:"",
	maxlength: 100,
    title:"",
    type:"text",
    components: [
        {
			tag:"div",
			classes:"formInput",
			components:[
				{
					components:[
						{
							name:"txtLabel",
							classes:"formLabels truncate",
                            fit:true,
							content:"Title"

						},
						{
							layoutKind: "FittableColumnsLayout",
                            components:[
                            {
                                kind: "onyx.InputDecorator",
    							classes:"appInputForm",
                                fit:true,
    							components: [
    								{
    									layoutKind: "FittableColumnsLayout",
    									classes:"setWidthFull",
    									style:"margin-top:5px;",
    									components:[
    										{
    											kind: "onyx.Input",
    											name: "txtInput",
     											value: "Input Area",
    											fit:true,
    											onchange:"inputChanged"
    										},
    										{
    											name:"btnInputResetter",
                                                ontap:"handleRemoveInput",
    											classes: "formDecoratorButton icon icon-remove whiteLabel"
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
    },
    setTitle:function(text){
    	this.title = text;
    	this.$.txtLabel.setContent(this.title);
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
    handleRemoveInput:function(inSender,inEvent) {
    	inSender.parent.controls[0].setValue("");
        this.$.btnInputResetter.addClass("whiteLabel");
    },
    inputChanged:function(inSender,inEvent) {
        if(this.$.txtInput.getValue() != ""){
            this.$.btnInputResetter.removeClass("whiteLabel");
        } else {
            this.$.btnInputResetter.addClass("whiteLabel");
        }
    }
});