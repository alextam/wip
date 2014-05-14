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
					tag:"div",
					classes:"navButton",
					ontap:"handleClosePanel",
					components:[
						{ classes:"icon icon-reorder" }
					]
				},
				{
					fit:true,
					name:"txtTitle",
					classes:"centerText",
					content:"Welcome To Great Eastern"
				},
				{
					tag:"div",
					name:"functionButtons",
					layoutKind: "FittableColumnsLayout",
					components:[
						{ 
							tag:"div",
							classes:"navButton",
							components:[
								{
									name:"btnFunction",
									classes:"icon-remove"
								}
							]
							
					 	},
						{ 
							tag:"div",
							classes:"navButton",
							components:[
								{
									name:"btnFunction",
									classes:"icon-ok"
								}
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
    handleClosePanel:function(inSender,inEvent) {
    	this.bubble("onClosePanel");
    },
    dataChanged: function() {
    	this.$.txtTitle.setContent(this.data.name);
    	if (this.readOnly) {
    		this.$.functionButtons.hide();	
    	}
    },
    readOnlyChanged:function(){
    	if (this.readOnly) {
    		this.$.functionButtons.hide();	
    	} else {
    		this.$.functionButtons.show();
    	}	
    }
});