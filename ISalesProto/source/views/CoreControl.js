enyo.kind({
    name: "CoreControl",
    kind: "Control",
    layoutKind: "FittableColumnsLayout",
    components: [
        {
        	name:"coreButtonDiv",
        	kind:"CoreButton"
        },
        {
        	onActivateValue:"handleCoreButton",
            name:"stepper",
            labelSuffix:"yrs",
            kind:"SmallNumVerticalStepper"
        }
    ],
    published:{
        icon:null		
    },
    create: function() {
        this.inherited(arguments);
        this.iconChanged();
    },
    getValue:function(){
        return this.$.stepper.getValue();
    },
    handleCoreButton:function(inSender,inEvent) {
        if (this.$.stepper.getValue()!="No"){
            this.$.coreButtonDiv.controls[0].addClass("selected");    
        } else {
            this.$.coreButtonDiv.controls[0].removeClass("selected");
        }
        
    },
    iconChanged:function(inSender,inEvent) {
    	this.$.coreButtonDiv.setIcon(this.icon);
    }
});