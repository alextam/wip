enyo.kind({
    name: "InputItemControl",
    kind: "Control",
    placeholder:"Insert value...",
	validation:"",
	value:"",
	maxlength: 100,
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
							classes:"setWidth25 formLabels truncate",
							content:"Title"
						},
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
											ontap:"handleRemoveInput",
											classes: "formDecoratorButton icon icon-remove"
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
    	this.setAttributes(this.placeholder,this.maxlength,this.validation,this.value);
    },
    setTitle:function(text){
    	this.title = text;
    	this.$.txtLabel.setContent(this.title);
    },
    setAttributes:function(placeholder,maxlength,validation,value){
    	this.setValue(value);
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
    resetStyle:function(){

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
    }
});