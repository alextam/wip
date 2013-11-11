enyo.kind({
    name: "StandardPicker",
    kind: "Control",
    published: {
        data: [],
        disabledText:"N/A",
        defaultText:"Select one...",
        disabled:true,
        validation:"none"
    },
    inPopup: false,
    components: [
		{
            kind: "onyx.PickerDecorator",
			onSelect: "pickerHandler",
            name:"parentPicker",
            classes:"appIcon down insetShadow",
			components: [
				{
                    name:"hiddenInput",
                    kind:"Input",
                    type:"hidden",
                    value:"",
                    placeholder:"",
                    attributes:{
                        required:"none"
                    }
                },
                {
					name:"inputDecorator",
                    kind: "onyx.PickerButton",
 					onChange: "pickerDisplayChange",
                    allowHtml:true,
                    style:"width:100%;padding-top:12px !important;padding-bottom:12px !important;",
 					classes: "appInputForm pickerButton",
                    layoutKind: "FittableColumnsLayout",
                    components:[
 						{
 							content:"Select One...",
 							name:"labelPickerButtonControl",
                            allowHtml:true,
 							classes:"truncate",
                            style:"width:88%;"
 						},
                        {
                            tag:"i",
                            style:"width:12%;height:25px;margin-top:3px !important;margin-right:0px !important",
                            classes:"icon-caret-down txtAlignRight"
                        }
 					]
				},
				{
					kind: "onyx.Picker", 
                    classes:"stdPickerMenu",
                    allowHtml:true,
					name:"pickerMenuControl"
				}
                
		]} 

    ],
    handlers: {
        onAppDisableInteraction: "disableInteraction",
        onAppEnableInteraction: "enableInteraction"
    },
    events: {
        onChangeItem: ""    
    },
    
    create:function(){
    	this.inherited(arguments);
        this.validationChanged();
        this.dataChanged();
        this.disabledChanged();
        this.$.hiddenInput.value = "";

    },
    rendered:function(){
        this.inherited(arguments);
        if(this.data.length == 0){
            this.$.labelPickerButtonControl.setContent(this.disabledText);
        } else {
            if (this.$.pickerMenuControl.selected != null){
               return; 
            } else {
                this.$.labelPickerButtonControl.setContent(this.defaultText);
            }
        }

    },
    dataChanged: function() {
        this.setupItem(this.data);
        this.setDisabled(false);
    },
    pickerDisplayChange:function(inSender,inEvent) {
        this.removeError();
        this.$.hiddenInput.setValue(this.$.pickerMenuControl.selected.content);
    	this.$.labelPickerButtonControl.setContent(this.$.pickerMenuControl.selected.content);
    },
    
    pickerHandler:function(inSender,inEvent) {
        this.removeError();
        this.doChangeItem(this.$.pickerMenuControl.selected);
        // this.$.labelPickerButtonControl.setContent(this.$.pickerMenuControl.selected.content);
    },
    validationChanged:function(){
        this.$.hiddenInput.setAttribute("required",this.validation);    
    },
    setupItem:function(items){
     	var i;
        var selected = false;
     	this.items = items;
        this.$.inputDecorator.setContent(this.defaultText);
     	this.$.pickerMenuControl.destroyClientControls();
        this.$.pickerMenuControl.selected = null;
    	for(i = 0; i < items.length;i++){
            if (items[i].active === true) {
                selected = true;
            }
            this.$.pickerMenuControl.createComponent( items[i] );	
    	}
    	this.render();

        // what ever callbacks should be called explicitly as this is not a
        // real change event
        /*if (selected) {
            this.doChangeItem(this.$.pickerMenuControl.selected);
        }*/
    },

    setError:function(){
        this.$.parentPicker.addClass("errorDecorator");
    },
    disableInteraction: function() {
        if (this.inPopup) {
            return;
        }
        this.setDisabled(true);
    },
    enableInteraction: function() {
        this.setDisabled(false);
    },
    
    disabledChanged:function(){
        if (this.data.length == 0) {
            this.disabled = true;
        }
        this.$.inputDecorator.setDisabled(this.disabled);      

    },
    removeError:function(){
        this.$.parentPicker.removeClass("errorDecorator");
    },
    getValue:function(){
        if (this.$.pickerMenuControl.selected != null) {
            return this.$.pickerMenuControl.selected.value ||
                this.$.pickerMenuControl.selected.content;
        } else {
            return null;
        }
    },
    setValue: function(value) {
        var selected = null;
        for (var i=0; i<this.$.pickerMenuControl.controls.length; i++) {
            var control = this.$.pickerMenuControl.controls[i];
            if (control.content == value) {
                selected = control;
                break;
            }
            if (control.value == value) {
                selected = control;
                break;
            }
        }

        if (!selected) {
            return;
        }

        this.$.pickerMenuControl.setSelected(selected);
        this.$.hiddenInput.setValue(selected.value);
        this.$.labelPickerButtonControl.setContent(selected.content);
        this.render();
    },
    getSelected: function() {
        if (this.$.pickerMenuControl.selected != null) {
            return this.$.pickerMenuControl.selected;
        } else {
            return "";
        }
    }
});