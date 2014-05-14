enyo.kind({
    name: "VerticalSlider",
    kind: "Control",
    components: [
        {
			style:"width:118px;",
			components:[
				{
					name:"txtValueLabel",
					content:"Low",
					classes:"valueLabel"
				},
				{
					classes:"alignCenter",
                 	kind:"onyx.VSlider",
					onChange:"sliderChanged",
					increment:50
				},
                {
                    style:"height:15px"
                },
				{
					name:"txtLabel",
					classes:"descriptionLabel",
					content:"Label Here"
				}
			]
		}
    ],
    published:{
        label:null		
    },
    create: function() {
        this.inherited(arguments);
        this.labelChanged();
    },
    labelChanged:function(){
    	this.$.txtLabel.setContent(this.label);
    },
    sliderChanged:function(inSender,inEvent) {
    	console.log(inEvent.value);
    	if(inEvent.value == 0) {
    		this.$.txtValueLabel.setContent("Low");
    	} else if (inEvent.value == 50) {
    		this.$.txtValueLabel.setContent("Medium");
    	} else {
    		this.$.txtValueLabel.setContent("High");
    	}
    }
});