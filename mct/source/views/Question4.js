enyo.kind({
    name: "Question4",
    kind: "Control",
    classes:"panel-view",
    components: [
        { style:"height:35px" },
        {
        	tag:"h2",
            classes:'note-text',
        	content:"Please specify your race"
        },
        {
            classes:"mct-inputBoxGroup",
            kind:"Group",
            components:[
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    active:true,
                    content:"Malay"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Chinese"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Indian"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Others"
                }
            ]
        },
        { style:"height:30px" },
        {
            classes:"mct-inputBoxGroup align-right",
            components:[
                {
                    kind:"Button",
                    classes:"blueButton",
                    ontap:"handleButtonTapped",
                    content:"Next"
                }
            ]
        }
        
    ],
    handleButtonTapped:function(inSender,inEvent) {
    	this.bubble("onHandleButtonTapped");
    }
});