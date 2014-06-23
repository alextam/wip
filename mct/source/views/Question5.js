enyo.kind({
    name: "Question5",
    kind: "Control",
    classes:"panel-view",
    components: [
        { style:"height:30px" },
        {
        	tag:"h2",
            classes:'note-text',
        	content:"Please specify your maritial status"
        },
        {
            classes:"mct-inputBoxGroup",
            kind:"Group",
            components:[
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    active:true,
                    content:"Single"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Married"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Others"
                }
            ]
        },
        { style:"height:20px" },
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