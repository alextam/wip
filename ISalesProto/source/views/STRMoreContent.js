enyo.kind({
    name: "STRMoreContent",
    kind: "Control",
    components: [
        {
        	tag:"div",
            layoutKind: "FittableColumnsLayout",
        	components:[
        		{
        			name:"categorySlider0",
                    kind:"JamesSliderTank",
                    tankMode:true,
                    onUpdateSlider:"handleSlider0"
        		},
                {
                    name:"categoryLabel",
                    classes:"special",
                    kind:"JamesLabeller"
                }
        	]
        }
    ],
    published:{
        sliderData:null        
    },
    handleSlider0:function(inSender,inEvent) {
        var calcAmount = this.sliderData.maxAmount*(this.$.categorySlider0.getValue()/100);
        this.$.categoryLabel.setValue(calcAmount);
        this.bubble("onUpdateSlider0",{value:this.$.categorySlider0.getValue(),amount:calcAmount,maxAmount:this.sliderData.maxAmount});
    },
   
    sliderDataChanged:function() {
        var minValue = numeral(this.sliderData.maxAmount).format("0,0");
        this.$.categorySlider0.setData("Do you have Minimum value MYR "+minValue+" TODAY?");
        this.$.categorySlider0.setValue(100);
        this.$.categorySlider0.updatePosition(100);
        this.$.categoryLabel.setData("Amount available TODAY");
        this.$.categoryLabel.setValue(this.sliderData.maxAmount); 
    }
});