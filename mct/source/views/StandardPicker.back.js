enyo.kind({
    name: "StandardPicker",
    kind: "Control",
    published: {
        datasource: [],
        disabledText:"N/A",
        defaultText:"Select one...",
        disabled:false,
        singleRender:false,
        preventEnabled: false,
        preventDisabled: false,
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
                    style:"width:100%",
 					classes: "appInputForm pickerButton",
                    layoutKind: "FittableColumnsLayout",
                    components:[
 						{
 							content:"Select One...",
 							name:"labelPickerButtonControl",
 							classes:"truncate",
                            style:"width:88%"
 						},
                        {
                            tag:"i",
                            style:"width:12%;height:25px;margin-top:3px !important;margin-right:0px !important",
                            classes:"icon-chevron-down txtAlignRight"
                        }
 					]
				},
                {
                    kind: "onyx.Picker",
                    modal: true,
                    classes:"stdPickerMenu",
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
        this.datasourceChanged();
        this.disabledChanged();
        this.$.hiddenInput.value = "";

    },
    forceRender:function() {
        //this.$.stdPickerMenu.render();
        //this.setupItem(this.datasource);
        this.$.parentPicker.render();
    },
    reborn:function() {
        this.setupItem(this.datasource);
    },

    rendered:function(){
        this.inherited(arguments);
        if(this.datasource.length == 0){
            this.$.labelPickerButtonControl.setContent(this.disabledText);
        } else {
            if (this.$.pickerMenuControl.selected != null){
               return; 
            } else {
                this.$.labelPickerButtonControl.setContent(this.defaultText);
            }
        }
    },
    datasourceChanged: function() {
        if(this.datasource.length) {
            this.$.labelPickerButtonControl.setContent(this.defaultText);
        }
        this.setupItem(this.datasource);
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
        if(!this.singleRender) {
            this.$.pickerMenuControl.render();
        }
        this.$.pickerMenuControl.selected = null;
    	for(i = 0; i < items.length;i++){
            if (items[i].active === true) {
                selected = true;
            }
    		this.$.pickerMenuControl.createComponent( items[i] );	
    	}
        if(!this.singleRender) {
            this.$.pickerMenuControl.render();
        }
        // what ever callbacks should be called explicitly as this is not a
        // real change event
        /*
        if (selected) {
            this.doChangeItem(this.$.pickerMenuControl.selected);
        }
        */
    },

    setError:function(){
        this.$.parentPicker.addClass("errorDecorator");
    },
    disableInteraction: function() {
        if (this.inPopup) {
            return;
        }
        this.$.inputDecorator.setDisabled(true);
    },
    enableInteraction: function() {
        if(this.preventEnabled) {
            return;
        }
        this.disabledChanged();
    },
    
    disabledChanged:function(){
        if (this.disabled === true) {
            if (this.datasource.length == 0) {
                this.$.inputDecorator.setDisabled(true);
            }
        }
        this.$.inputDecorator.setDisabled(this.disabled);
    },
    removeError:function(){
        this.$.parentPicker.removeClass("errorDecorator");
    },
    getValue:function(){
        if (this.$.pickerMenuControl.selected != null) {
            var value = this.$.pickerMenuControl.selected.value;
            if (typeof value == 'undefined') {
                value = this.$.pickerMenuControl.selected.content;
            }
            return value;
        } else {
            return null;
        }
    },
    setValue: function(value) {
        // console.log("setValue");
        var selected = null;
        for (var i=0; i<this.$.pickerMenuControl.controls.length; i++) {
            var control = this.$.pickerMenuControl.controls[i];
            if (""+control.content == ""+value) {
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
        this.$.pickerMenuControl.render();
    },
    getSelected: function() {
        if (this.$.pickerMenuControl.selected != null) {
            return this.$.pickerMenuControl.selected;
        } else {
            return "";
        }
    }
});