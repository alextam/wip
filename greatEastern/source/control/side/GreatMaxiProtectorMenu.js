enyo.kind({
    name: "GreatMaxiProtectorMenu",
    kind: "SideMenu",
    components: [
        {
        	kind:"go.StateButton",
            classes:"setWidthFull menuButton",
        	content:"Client Details",
            index:0,
            ontap:"handleActivateDetailPage"
        },
        {
        	kind:"go.StateButton",
            classes:"setWidthFull menuButton",
        	content:"Product Entry",
            index:1,
            ontap:"handleActivateDetailPage"
        },
        {
        	kind:"go.StateButton",
            classes:"setWidthFull menuButton",
        	content:"Compute Premium",
            index:2,
            ontap:"handleActivateDetailPage"
        }
    ],  
    handleActivateDetailPage:function(inSender,inEvent) {
       this.setSelectedIndex(inSender.index); 
       switch(inSender.index) {
            case 0:
                this.bubble("onUpdatePanel");

            break; 

            case 1:
            	
            break;
       }
       return true;
    }  

});