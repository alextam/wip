enyo.kind({
    name: "SmallNumVerticalStepper",
    kind: "Control",
    classes:"numStepper",
    components: [
        {
        	kind:"Button",
            ontap:"handlePlus",
        	classes:"numStepperButton",
        	content:"+"
        },
        {
        	name:"txtValue",
            classes:"valueBox",
            content:"No"
        },
        {
        	kind:"Button",
            ontap:"handleMinus",
        	classes:"numStepperButton",
        	content:"-"
        }
    ],
    published:{
        selectedIndex:0,
        labelSuffix:null,
        valueArray:["No",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]        
    },
    create: function() {
        this.inherited(arguments);
        this.labelSuffixChanged();
    },
    getValue:function(){
        return this.valueArray[this.selectedIndex];
    },
    labelSuffixChanged:function(){
        this.setLabelSuffix(this.labelSuffix);
    },
    selectedIndexChanged:function(){
        console.log(this.selectedIndex);
        this.bubble("onActivateValue");
        this.$.txtValue.setContent(this.valueArray[this.selectedIndex]+" "+this.getLabelSuffix());
    },
    handlePlus:function(inSender,inEvent) {
        var index = this.getSelectedIndex() + 1;
        this.setSelectedIndex(index);
        
        if (this.getSelectedIndex() > this.valueArray.length-1) {
            this.setSelectedIndex(this.valueArray.length-1);    
        }    
    },
    handleMinus:function(inSender,inEvent) {
        var index = this.getSelectedIndex() - 1;
        this.setSelectedIndex(index);
        
        if (this.getSelectedIndex() <= 0) {
            this.setSelectedIndex(0);    
        }
    }
    
});