enyo.kind({
    name: "JamesSliderTank",
    kind: "Control",
    classes:"drawerContentBox",
    layoutKind: "FittableRowsLayout",
    components: [
        {
            tag:"div",
            classes:"questionBox",
            name:"txtLabel",
            allowHtml:true,
            content: "Set Question Here..."
        },
        {
        	layoutKind: "FittableColumnsLayout",
        	classes:"alignCenter",
        	components:[
        	    {
        			name:"valueTankControl",
                    classes:"valueTankHeighten",
                    components:[
                        {
                            name:"actualValue",
                            classes:'actualValueTank'
                        },
                        {
                            name:"percentageValue",
                            classes:"valueLabel",
                            content:"100%"
                        }
                    ]
        		},
        		{ 
                    name:"sliderControl",
                    classes:"scrollerTank", 
                    kind:"onyx.VSlider", 
                    onChange:"handleSlideChange" 
                }
        	]
        }
    ],
    published:{
    	index:0,
        max:0,
        increment:10,
        value:null,
        type:null,
        data:null,
        category:null,
        sliderData:null,
        label:null,
        tankMode:false		
    },
    create: function() {
        this.inherited(arguments);
        this.dataChanged();
    },
    valueChanged:function() {
        this.$.sliderControl.setValue(this.value);
        this.setValue(this.value);
        this.$.sliderControl.setIncrement(10);
    },
    handleSlideChange:function(inSender,inEvent) {
        this.setIndex(inEvent.value);
        this.setValue(inEvent.value);
        this.updatePosition(inEvent.value);
        this.bubble("onUpdateSlider");
    },
    updatePosition:function(value){
        this.$.percentageValue.setContent(value+"%");
        var strCSS = "top:"+(200-(value*2))+"px";
        this.$.actualValue.setStyle(strCSS);
    },
    labelChanged: function() {
        this.$.txtLabel.setContent(this.label);
    },
    /*
    sliderDataChanged:function(){
        console.log(this.sliderData);
        //this.$.sliderControl.setType(this.sliderData.type);
        this.$.sliderControl.setIncrement(this.sliderData.increment);
        this.setCategory(this.sliderData.category);
        this.$.sliderControl.setMax(this.sliderData.max - 1);
        if (this.sliderData.type == "currency"){
            this.$.valueTankControl.setContent(numeral(this.sliderData.data[0]).format('0,0'));    
        } else {
            this.$.valueTankControl.setContent(this.sliderData.data[0] + "%");
        }
        this.setValue(this.sliderData.data[0]);
    },
    */
    dataChanged: function() {
    	this.$.txtLabel.setContent(this.data);
    }
});