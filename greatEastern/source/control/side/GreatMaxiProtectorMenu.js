enyo.kind({
    name: "GreatMaxiProtectorMenu",
    kind: "SideMenu",
    selected:0,
    components: [
        {
        	kind:"go.StateButton",
            index:0,
            classes:"setWidthFull menuButton",
        	content:"Client Details",
            menu:"greatmaxiprotector.clientdetailsform",
            ontap:"handleActivateDetailPage"
        },
        {
        	kind:"go.StateButton",
            index:1,
            classes:"setWidthFull menuButton",
        	content:"Product Entry",
            menu:"greatmaxiprotector.productentryform",
            ontap:"handleActivateDetailPage"
        },
        {
        	kind:"go.StateButton",
            index:2,
            classes:"setWidthFull menuButton",
        	content:"Compute Premium",
            menu:"greatmaxiprotector.computepremiumform",
            ontap:"handleActivateDetailPage"
        }
    ],  
    handleActivateDetailPage:function(inSender,inEvent) {
       //console.log("menu");
       //console.log(inSender.menuonUpdatePanel); 
       this.setSelectedIndex(inSender.index); 
       switch(inSender.index) {
            case 0:
                this.bubble("onUpdatePanel",inSender);
            break; 

            case 1:
                this.bubble("onUpdatePanel",inSender);            	
            break;

            case 2:
                this.bubble("onUpdatePanel",inSender);
            break;
       }
       return true;
    }  

});