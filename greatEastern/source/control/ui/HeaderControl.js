enyo.kind({
    name: "HeaderControl",
    kind: "onyx.Toolbar",
	layoutKind: "FittableColumnsLayout",
    components: [
        {
        	name:"btnMain",
        	kind:"go.StateButton",
            classes:"geButton",
        	ontap:"handleBtnMainTapped",
        	content:"Menu"
        },
        {
        	tag:"div",
            fit:true,
            style:"height:40px !important",
            layoutKind: "FittableRowsLayout",
            components:[
                {
                    tag:"h5",
                	classes:"txtAlignCenter truncate",
                	content:"Great Eastern",
                    name:"txtTitle",
                    style:"height:16px;margin-bottom:0px"
                } 
                
            ]
        	
        },
        {
            name:"btnLogout",
            kind:"onyx.Button",
            classes:"geLionButton",
            ontap:"handleBtnLogoutTapped",
            components:[
                {
                     tag:"div",
                     classes:"appIcon lion" 
                }
            ]
        },
        {
        	name:"btnSide",
        	kind:"go.StateButton",
            classes:"geButton",
            ontap:"handleBtnSideTapped",
        	content:"Side"
        },
        {
            kind:"Signals",
            onInnerPage:"handleChangeToInnerPage",
            onMainPage:"handleChangeToMainPage"  
        }
    ],
    handleBtnMainTapped:function(inSender,inEvent) {
    	this.bubble("onMainButtonTapped");
    	return true;
    },
    handleBtnSideTapped:function(inSender,inEvent) {
        this.bubble("onSideButtonTapped");
        return true;
    },
    handleBtnLogoutTapped:function(inSender,inEvent) {
         this.bubble("onLogoutButtonTapped");
        return true;
    },
    setTitle:function(title){
        this.$.txtTitle.setContent(title);
    },
    handleChangeToMainPage:function(inSender,inEvent){
        this.$.btnSide.hide();
        this.$.btnSide.setContent("Exit");
        this.$.btnLogout.show();
        this.reflow();
    },
    handleChangeToInnerPage:function(inSender,inEvent) {
        this.$.btnSide.show();
        this.$.btnSide.setContent("Back");
        this.$.btnLogout.hide();
        this.reflow();
    }
});