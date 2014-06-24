enyo.kind({
    name: "MoreContent",
    kind: "Control",
    components: [
        {
        	tag:"div",
            layoutKind: "FittableColumnsLayout",
        	components:[
        		{
        			name:"categorySlider0",
                    kind:"JamesSlider",
                    onUpdateSlider:"handleSlider0"
        		},
                {
                    name:"categorySlider1",
                    kind:"JamesSlider",
                    onUpdateSlider:"handleSlider1"
                },
                {
                    name:"categoryLabel",
                    kind:"JamesLabeller"
                }
        	]
        }
    ],
    published:{
        sliderData:null        
    },
    handleSlider0:function(inSender,inEvent) {
        this.bubble("onUpdateSlider0",{value:this.$.categorySlider0.getValue(),category:this.$.categorySlider0.getCategory()});
    },
    handleSlider1:function(inSender,inEvent) {
        this.bubble("onUpdateSlider1",{value:this.$.categorySlider1.getValue(),category:this.$.categorySlider1.getCategory()});
    },
    sliderDataChanged:function() {
        this.$.categorySlider0.setData(this.sliderData.label[0].question);
        this.$.categorySlider0.setSliderData(this.sliderData.label[0]);
        
        if (this.sliderData.label[1].increment != null) {
            this.$.categorySlider1.setData(this.sliderData.label[1].question);
            this.$.categorySlider1.setSliderData(this.sliderData.label[1]);
            if ( this.sliderData.label.length > 2) {
                this.$.categoryLabel.show();
                this.$.categoryLabel.setData(this.sliderData.label[2].question);    
            }
        } else {
            this.$.categorySlider1.hide();
            this.$.categoryLabel.setData(this.sliderData.label[1].question);
        }
        /*
        if (this.sliderData.label.length > 1) {
            this.$.categorySlider1.show();
            this.$.categorySlider1.setData(this.sliderData.label[1].question);
        }
        */
        /* 
        if (this.sliderData.label.length > 2) {
            this.$.categorySlider2.setData(this.sliderData.label[2].question);
        } else {
            this.$.categorySlider2.hide();
            this.$.categorySlider2.setData("");
        }
        */
        console.log(this.sliderData.label);
    }
});