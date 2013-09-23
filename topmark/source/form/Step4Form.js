enyo.kind({
	name: "Step4Form",
	kind: "FittableRows",
	components:[
		{
            kind:"Header",
            title:"Exterior",
            buttons:[
            	{
			    	name:"btnBack",
			    	visible:true,
			    	content:"Back",
			    	page:"Step4Form",
			    	event:"onBtnBack"
		    	}
            ],
            onBtnBack:"handleBack"
        },
		{ kind:"BannerHeader" },
		{
        	layoutKind: "FittableColumnsLayout",
        	style:"margin:1px",
        	components:[
        		{
        			tag:"div",
        			classes:"breadCrumb1",
        			content:"Step 4"
        		},
        		{
        			tag:"div",
        			classes:"breadCrumb2",
        			content:"Exterior"
        		},
        		{ fit:true }
        	]
        },
        { style:"height:10px" },
        {
			classes:"setWidthFull inflatePadding",
			layoutKind: "FittableColumnsLayout",
        	components:[
        		{
        			style:"width:35%;padding-right:15px;",
        			components:[
        				{
        					tag:"h5",
        					style:"text-align:justify;line-height:18px;",
							classes:"smallNote",
							content:"To add note to the diagram, tap Add Note Tag and tap the vehicle diagram surface. To view / edit a note tag, just tap on any tag available on the screen."
						},
						{ style:"height:10px" },
						{
							name:"btnAddNote",
							ontap:"handleAddNote",
							classes:"yellowButton", 
							kind:"ActionButton",
							content:"Add Note Tag",
							icon:"icon-tag"
						},
						{ style:"height:10px" },						
						{
							name:"txtAreaNote",
							classes:"whiteForm",
							placeholder:"Note Here...",
							style:"width:90% !important;border:1px solid #ccc !important",
							kind:"InputTextAreaControl"
						}
        			]
        		},
        		{
        			style:"width:65%;background:#f2f2f2;text-align:center !important",
        			components:[
        				{
        					name:"drawBoard",
        					style:"width:576px;height:334px;position:relative;overflow:hidden",
        					classes:"whiteboardBg",
        					ontap:"handlePlotTag"
        				}
        			]
        		}
        	]
        }
	],
	tagKind:{
		kind:"Button",
		style:"width:30px;height:30px"
	},
	published:{
	    tagMode:null,
	    plotNewData:null		
	},
	create:function() {
		this.inherited(arguments);
		this.$.txtAreaNote.hide();
		this.tagModeChanged();
		
	},

    plotTag:function(id,aY,aX) {
    	this.$.drawBoard.createComponent({
    		kind:"AnchorTag",
    		top:aY,
    		id:id,
    		left:(aX-60)
    	});
    	this.$.drawBoard.render();
    	this.setTagMode("save");
    	this.$.txtAreaNote.show();

    },
    handlePlotTag:function(inSender,inEvent) {
    	if(this.getTagMode() == "add"){
    		//alert("PLOT");
    		var actualX = 0;
    		var actualY = 0;
    		console.log(inEvent);
    		if (String(inEvent.srcEvent.type).indexOf("mouse") == -1){
    			// Touch!
    			actualX = inEvent.pageX + inEvent.srcEvent.layerX;
    			actualY = inEvent.pageY + inEvent.srcEvent.layerY;
    		} else {
    			// Mouse
    			actualX = inEvent.srcEvent.layerX;
    			actualY = inEvent.srcEvent.layerY;
    		}
    		this.plotTag(new Date().getTime(), actualY, actualX);
    	} 
    },
    tagModeChanged:function() {
    	if(this.tagMode == null){
    		this.$.btnAddNote.setDisabled(false);
    		this.$.btnAddNote.setContent("Add Note Tag");
    	} else if (this.tagMode == "add") {
    		this.$.btnAddNote.setContent("Place Note Tag");
    		this.$.btnAddNote.setDisabled(true);
		} else if (this.tagMode == "save") {
    		this.$.btnAddNote.setContent("Save Note and Tag");
    		this.$.btnAddNote.setDisabled(false);
    	} else {	
    		alert("Edit Mode...");
    	}
    },
	handleNext:function(inSender,inEvent) {
		this.bubble("onChangePage");
	},
	handleBack: function(inSender,inEvent) {
		this.bubble("onBackPage");
	},
	handleTap: function(inSender,inEvent) {
		console.log(inEvent);
	},
	handleAddNote: function(inSender,inEvent) {
		//alert("Adding Note - Work in Progress");
		//this.setTagMode("add");
		if (this.getTagMode() == "save") {
			console.log("what:"+this.$.txtAreaNote.getValue());
    		//this.plotNewData.setNote(this.$.txtAreaNote.getValue());
    		//this.$.btnAddNote.setDisabled(false);
    		this.setTagMode(null);
    		//console.log( this.plotNewData.getData() );
    		go.PhoneGapSuit.alert("Note Tag Saved...");
			this.$.txtAreaNote.setValue("");
    		this.$.txtAreaNote.hide();
    	} else if (this.getTagMode() == null) {
    		this.setTagMode("add");
    	}
		
	}
});