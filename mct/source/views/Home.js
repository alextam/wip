enyo.kind({
    name: "Home",
    kind: "Control",
    classes:"panel-view",
    components: [
        { style:"height:20px" },
        {
        	tag:"div",
        	classes:"mctLogo"
        },
        { style:"height:30px" },
        {
        	tag:"h1",
        	content:"Welcome"
        },
        {
        	tag:"h2",
        	content:"Help us by registering your interest"
        },
        { style:"height:20px" },
        {
        	kind:"Button",
        	classes:"blueButton",
            content:"Start",
            ontap:"handleButtonTapped"
        }
    ],
    handleButtonTapped:function(inSender,inEvent) {
    	this.bubble("onHandleButtonTapped");
    }
});