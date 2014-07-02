enyo.kind({
    name: "StandardPicker",
    kind: "Select",
    classes:"pickerButton",
    published: {
        multiple:false,
        datasource: null,
        validation:"none"
    },
    /*
    handlers: {
        onAppDisableInteraction: "disableInteraction",
        onAppEnableInteraction: "enableInteraction"
    },
    events: {
        onChangeItem: ""    
    },
    */
    create:function(){
    	this.inherited(arguments);
        this.datasourceChanged();
    },
    setValue:function(value) {
        var selected = null;
        console.log(this.controls);
        for (var i=0; i<this.controls.length; i++) {
            var control = this.controls[i];
            if (control.content == value) {
                selected = i;
                break;
            }
            if (control.value == value) {
                selected = i;
                break;
            }
        }

        if (!selected) {
            return;
        }

        this.setSelected(selected);
        this.render();
    },
    datasourceChanged:function() {
        //console.log(this.datasource);
        this.destroyClientControls();
        for(var i = 0; i < this.datasource.length;i++) {
            this.createComponent(this.datasource[i]);
        }
        this.render();
    }
    
});