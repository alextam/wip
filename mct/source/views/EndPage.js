enyo.kind({
    name: "EndPage",
    kind: "Control",
    classes:"panel-view",
    components: [
        { kind:"Header" },
        { style:"height:75px" },
        {
        	style:"width:62%;margin-left:auto;margin-right:auto;",
        	components:[
        		{
					tag:"h1",
        			classes:"checkBoxGroup big-text",
        			content: "Congratulation, your registration is complete."
        		}
        	]
        },
        { style:"height:245px" },
       	{
            classes:"mct-inputBoxGroup align-center",
            components:[
                {
                    kind:"Button",
                    name:"submitButton",
                    classes:"blueButton endButton",
                    onclick:"handleButtonTapped",
                    content:"New Registration"
                }
            ]
        }
    ],
    handleButtonTapped:function(inSender,inEvent) {
    	this.bubble("onResetForm");
        return false;
    }
});