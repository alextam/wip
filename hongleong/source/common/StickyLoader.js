enyo.kind({
    name: "StickyLoader",
    kind: "Control",
    content:"Loading...",
    retry:false,
    norecord:"No Record.",
    layoutKind:"FittableRowsLayout",
    retryMessage:"Unable to connect to server.",
    retryIcon: "icon-rotate-left",
    components: [
		{
			name:"loaderButton",
			ontap:"handleLoaderButton",
			classes:"stickyLoader centerDiv",
			kind:"Button",
			layoutKind:"FittableColumnsLayout",
			components:[
				{
                    style:"width:15px"
                },
                {
					tag:"i",
					name:"spinnerControl",
					classes:"icon-spinner icon-spin" 
				},
				{
					tag:"h1",
					name:"labelStatus",
                    classes:"stickyLoaderTxt",
					content:"Loading Data..."
				}
			]
		}
    ],
    create:function() {
    	this.inherited(arguments);
    	this.changeMode("loading");
    },
    changeMode:function(mode){
    	switch(mode){
    		case "retry":
    			this.$.labelStatus.setContent(this.retryMessage);
    			this.$.spinnerControl.removeClass("icon-spinner icon-spin");
    			this.$.spinnerControl.addClass(this.retryIcon);
    			this.$.loaderButton.setDisabled(false);
    		break;
            
            case "norecord":
                this.$.labelStatus.setContent(this.norecord);
                this.$.spinnerControl.removeClass("icon-spinner icon-spin");
                this.$.spinnerControl.addClass("icon-info-sign");
                this.$.loaderButton.setDisabled(false);
            break;

            case "loading":
                this.$.labelStatus.setContent(this.content);
                this.$.spinnerControl.removeClass(this.retryIcon);
                this.$.spinnerControl.addClass("icon-spinner icon-spin");
                this.$.loaderButton.setDisabled(true);
            break;

            default:
    			this.$.labelStatus.setContent(mode);
    			this.$.spinnerControl.removeClass(this.retryIcon);
    			this.$.spinnerControl.setClasses("");
    			this.$.loaderButton.setDisabled(true);
    		break;
    	}
    },
    handleLoaderButton:function(inSender,inEvent) {
    	this.bubble("onRetryTapped");
    }
});