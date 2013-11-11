enyo.kind({
    name: "SimpleColorPicker",
    kind: "Control",
    style:"width:40px !important;height:40px !important",
    classes:"borderless",
    components: [
        {
        	components:[
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
        			kind: "onyx.PickerDecorator",
					onSelect: "pickerHandler",
            		name:"parentPicker",
            		classes:"",
                    components:[
                        {
                            name:"pickerButton",
                            kind: "onyx.PickerButton",
                            classes:"colorPicker",
                            onChange: "pickerDisplayChange",
                            components:[
                                {
                                    name:"indicatorColor",
                                    classes:"colorSelector"
                                }
                            ]
                        },
                        {
                            kind: "onyx.Picker", 
                            classes:"stdPickerMenu",
                            name:"pickerMenuControl"
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
    published: {
        data: [],
        disabled:false,
        preventEnabled: false,
        preventDisabled: false
    },
    inPopup: false,
    events: {
        onChangeItem: ""    
    },
    create:function(){
        this.inherited(arguments);
        this.dataChanged();
        this.disabledChanged();
        this.$.hiddenInput.value = "";
    },
    dataChanged:function() {
        this.setupItem(this.data);
        this.setDisabled(false);
    },
    setupItem:function(items){
        var i;
        var selected = false;
        this.items = items;
        //this.$.indicatorColor.setStyle("background:"+this.data[0].content);
        this.$.pickerMenuControl.destroyClientControls();
        this.$.pickerMenuControl.selected = null;
        for(i = 0; i < items.length;i++){
            if (items[i].active === true) {
                selected = true;
            }
            this.$.pickerMenuControl.createComponent({
                style:"height:40px !important;margin:0px;padding:0px",
                code:items[i].content,
                components:[
                    {
                        classes:"colorSelector",
                        style:"background:rgba("+items[i].content+",1);"
                    }
                ]
            });   
        }
        this.render();
    },
    pickerDisplayChange:function(inSender,inEvent) {
        this.bubble("onItemSelected",{selected:inEvent.selected.code});
    },
    pickerHandler: function(inSender,inEvent) {
        console.log(inEvent.selected.code);
        this.$.indicatorColor.setStyle("background:rgba("+inEvent.selected.code+",1);");

    },
    disableInteraction: function() {
        if (this.inPopup) {
            return;
        }
        this.setDisabled(true);
    },
    enableInteraction: function() {
        if(this.preventEnabled) {
            return;
        }
        this.setDisabled(false);
    },
    
    disabledChanged:function(){
        if (this.data.length == 0) {
            this.disabled = true;
        }
        this.setDisabled(this.disabled);      
    },
    rendered:function(){
        this.inherited(arguments);
        
    }
});