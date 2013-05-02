enyo.kind({
    name: "HeaderControl",
    kind: "onyx.Toolbar",
	layoutKind: "FittableColumnsLayout",
    components: [
        {
        	name:"btnMain",
        	kind:"go.StateButton",
        	ontap:"handleBtnMainTapped",
        	content:"Menu"
        },
        {
        	tag:"h5",
        	classes:"txtAlignCenter truncate",
        	content:"Great Eastern",
        	fit:true
        },
        {
        	name:"btnSide",
        	kind:"go.StateButton",
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
    handleChangeToMainPage:function(inSender,inEvent){
        this.$.btnSide.setContent("Exit");
        this.reflow();
    },
    handleChangeToInnerPage:function(inSender,inEvent) {
        this.$.btnSide.setContent("Back");
        this.reflow();
    }
});