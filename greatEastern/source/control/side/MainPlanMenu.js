enyo.kind({
    name: "MainPlanMenu",
    kind: "SideMenu",
    selected:0,
    components: [
        {
        	kind:"go.StateButton",
            classes:"setWidthFull menuButton",
        	content:"Traditional Plan",
            index:0,
            menu:"home0",
            ontap:"handleActivateDetailPage"
        },
        {
        	kind:"go.StateButton",
            classes:"setWidthFull menuButton",
        	content:"Investment-Linked Insurance",
            index:1,
            menu:"home1",
            ontap:"handleActivateDetailPage"
        }
    ],  
    handleActivateDetailPage:function(inSender,inEvent) {
       this.setSelectedIndex(inSender.index); 
       this.selected = inSender.index;
       switch(inSender.index) {
            case 0:
                this.bubble("onUpdatePanel",inSender);
            break; 

            case 1:
                this.bubble("onUpdatePanel",inSender);
            break;
       }
       return true;
    }  

});