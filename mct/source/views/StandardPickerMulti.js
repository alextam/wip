enyo.kind({
    name: "StandardPickerMulti",
    components:[
        {       
            kind: "Scroller",
            name: "contentControl",
            style:"height:130px",
            fit:true,
            touch:true, 
            thumb:true,
            strategyKind:"TransitionScrollStrategy",
            components:[
                {
                    name:"checkBoxGroup",
                    kind:"Group",
                    highlander: false,
                    defaultKind:"SelectorCheck"
                }
            ]
        }
    ],
    create:function(){
    	this.inherited(arguments);
        this.datasourceChanged();
    },
    datasourceChanged:function() {
        //console.log(this.datasource);
        this.destroyClientControls();
        for(var i = 0; i < this.datasource.length;i++) {
            this.$.checkBoxGroup.createComponent(this.datasource[i]);
        }
        this.render();
    },
    reset:function() {
        for(var i = 0; i < this.$.checkBoxGroup.controls.length;i++){
            this.$.checkBoxGroup.controls[i].resetValue();
        }  
    },
    getValue:function(){
        var valueStr = "";
        for(var i = 0; i < this.$.checkBoxGroup.controls.length;i++){
            if (this.$.checkBoxGroup.controls[i].getValue()) {
                valueStr +=  this.$.checkBoxGroup.controls[i].getValue() + ",";
            }
        }
        if (valueStr.length) {
            return ( valueStr.slice(0,valueStr.length-1) );
        } else {
            return "0";
        }
    }
});