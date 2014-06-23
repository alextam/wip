enyo.kind({
    name: "Header",
    kind: "onyx.Toolbar",
    classes:"myToolBar",
    components: [
        {
            tag:"div",
            name:"btnBack",
            ontap:'handleBtnBackTapped',
            classes:"mct-back"
        },
        {
        	tag:"div",
        	classes:"mct-logo"
        },
        {
        	tag:"div",
            classes:"e-registration"
        }
    ],
    published:{
        withBack:true        
    },
    create: function() {
        this.inherited(arguments);
        this.withBackChanged();
    },
    handleBtnBackTapped:function(inSender,inEvent) {
        this.bubble("onBackTapped");
    },
    withBackChanged:function() {
        if (this.withBack) {
            this.$.btnBack.show();
        } else {
            this.$.btnBack.hide();
        }  
    }

});