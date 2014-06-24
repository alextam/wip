enyo.kind({
    name: "JamesSlider",
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
                    classes:"valueTank small"
        		},
        		{ 
                    name:"sliderControl", 
                    kind:"onyx.VSlider", 
                    onChange:"handleSlideChange" 
                }
        	]
        }
    ],
    published:{
    	index:0,
        max:0,
        value:null,
        type:null,
        category:null,
        sliderData:null,
        data:null,
        tankMode:false		
    },
    create: function() {
        this.inherited(arguments);
        this.dataChanged();
        this.tankModeChanged();
    },
    handleSlideChange:function(inSender,inEvent) {
        //console.log(inEvent.value/this.$.sliderControl.getIncrement());
        this.setIndex(inEvent.value);
        this.setValue(this.sliderData.data[this.getIndex()]);
        this.bubble("onUpdateSlider");
    },
    indexChanged:function() {
        if (this.sliderData.type == "currency"){
            //numeral(1000).format('0,0');
            this.$.valueTankControl.setContent(numeral(this.sliderData.data[this.getIndex()]).format('0,0'));    
        } else {
            this.$.valueTankControl.setContent(this.sliderData.data[this.getIndex()] + "%");
        }
    },
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
    tankModeChanged:function() {
        if(this.tankMode) {
            //console.log(this.$.valueTankControl);
            this.$.valueTankControl.removeClass("small");   
        }     
    },
    dataChanged: function() {
    	this.$.txtLabel.setContent(this.data);
    }

});