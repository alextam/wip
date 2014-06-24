enyo.kind({
    name: "Header",
    kind: "Control",
    components: [
        {
			kind:"onyx.Toolbar",
			layoutKind: "FittableColumnsLayout",
			classes:"standardToolBar",
			components:[
				{
					components:[
                        {
                            style:"width:150px",
                            layoutKind: "FittableColumnsLayout",
                            components:[
                                {
                                    tag:"div",
                                    classes:"navButton",
                                    ontap:"handleBackPanel",
                                    components:[
                                        { content:"Back" }
                                    ]
                                }
                            ]
                        }
                    ]
                    
				},
				{
					fit:true,
					name:"txtTitle",
					classes:"centerText",
					content:"Protoype Savings"
				},
                {
                    style:"width:150px;text-align:right;",
                    layoutKind: "FittableColumnsLayout",
                    components:[
                        {
                            tag:"div",
                            name:"savingsButton",
                            classes:"navButton",
                            ontap:"handleAssumptionPanel",
                            components:[
                                { content:"Settings" }
                            ]
                        },
                        {
                            style:"width:10px"
                        },
                        {
                            tag:"div",
                            classes:"navButton",
                            ontap:"handleNextPanel",
                            components:[
                                { content:"Next" }
                            ]
                        }
                    ]                    
                }
			]
		}
    ],
    published:{
    	readOnly:false,
        data:null		
    },
    create: function() {
        this.inherited(arguments);
        this.readOnlyChanged();
    },
    handleClosePanel:function(inSender,inEvent) {
    	this.bubble("onClosePanel");
    },
    dataChanged: function() {
    	this.$.txtTitle.setContent(this.data.name);
    	if (this.readOnly) {
    		this.$.savingsButton.hide();	
    	}
    },
    handleNextPanel:function(inSender,inEvent) {
        this.bubble("onNextButtonTapped");
    },
    handleBackPanel:function(inSender,inEvent) {
        this.bubble("onBackButtonTapped");
    },
    readOnlyChanged:function(){
    	if (this.readOnly) {
    		this.$.savingsButton.hide();	
    	} else {
    		this.$.savingsButton.show();
    	}	
    }
});