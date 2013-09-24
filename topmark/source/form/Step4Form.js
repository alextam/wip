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
	published:{
	    tagMode:null,
        currentTag:null
	},
    handlers:{
        onSelectTag:"handleTagSelect"
    },
	create:function() {
		this.inherited(arguments);
		this.$.txtAreaNote.hide();
		this.tagModeChanged();
        this.loadData();
	},
    loadData:function() {
        var _this = this;
        this.$.drawBoard.destroyClientControls();
        console.log("Loading Existing Data...");
        this.service = new Service().getTags()
        .done(function(result){
            console.log(result);
            for(var i = 0;i < result.length;i++){
                _this.plotExistingTag(result[i].uniqueId,result[i].top,result[i].left,result[i].note);
            }
        });
    },
    plotExistingTag:function(id,aY,aX,note){
        console.log("Plot Tag:"+id);
        console.log("aX:"+aX);
        console.log("aY:"+aY);
        this.$.drawBoard.createComponent({
            kind:"AnchorTag",
            uniqueId:id,
            note:note,
            left:aX,
            top:aY
        });
        this.$.drawBoard.render();
    },
	plotNewTag:function(id,aY,aX) {
    	this.currentTag = this.$.drawBoard.createComponent({
    		kind:"AnchorTag",
            uniqueId:id,
    		left:(aX-60),
    		top:aY
    	});
    	this.setTagMode("save");
    	this.$.drawBoard.render();

    	console.log("ay:"+aY+",ax:"+(aX-60));
    },
    handlePlotTag:function(inSender,inEvent) {
    	if(this.getTagMode() == "add"){
    		//alert("PLOT");
    		var actualX = 0;
    		var actualY = 0;
    		if (String(inEvent.srcEvent.type).indexOf("mouse") == -1){
    			// Touch!
    			actualX = inEvent.screenX + inEvent.srcEvent.layerX;
    			actualY = inEvent.screenY + inEvent.srcEvent.layerY;
    		} else {
    			// Mouse
    			actualX = inEvent.srcEvent.layerX;
    			actualY = inEvent.srcEvent.layerY;
    		}
    		console.log("Actual X :" +actualX+", Actual Y :"+actualY);
    		this.plotNewTag(new Date().getTime(), actualY, actualX);
    	} else {
    		return true;
    	}
    },
    tagModeChanged:function() {
    	if(this.tagMode == null){
    		this.$.btnAddNote.setDisabled(false);
            this.$.txtAreaNote.setValue("");
            this.$.txtAreaNote.hide();
    		this.$.btnAddNote.setContent("Add Note Tag");
    	} else if (this.tagMode == "add") {
    		this.$.btnAddNote.setContent("Place Note Tag");
    		this.$.btnAddNote.setDisabled(true);
    	} else if (this.tagMode == "save"){	
            this.$.txtAreaNote.show();
    		this.$.btnAddNote.setContent("Save Note Tag");
            this.$.btnAddNote.setDisabled(false);
    	} else {
            this.$.txtAreaNote.show();
            this.$.btnAddNote.setContent("Update Note Tag");
            this.$.btnAddNote.setDisabled(false);
        }
    },
    handleTagSelect:function(inSender,inEvent) {
        this.setTagMode("edit");
        //console.log();
        this.currentTag = inEvent.selected;
        console.log(this.currentTag);
        this.$.txtAreaNote.setValue(this.currentTag.getNote());
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
        var _this = this;
        if(this.getTagMode() == null) {
            this.setTagMode("add");
            this.$.drawBoard.destroyClientControls();
        } else if(this.getTagMode() == "edit") {
            this.currentTag.setNote(this.$.txtAreaNote.getValue());
            console.log( this.currentTag.getData() );
            this.currentTag.deSelect();
            this.currentTag = null;
            this.setTagMode(null);
        } else {
            alert("?SAVE");
            this.currentTag.setNote(this.$.txtAreaNote.getValue());  
            console.log( this.currentTag.getData() );
            this.service = new Service().saveTagRecord(this.currentTag.getData())
            .done(function(result){
                //console.log(result);
                go.PhoneGapSuit.alert("Note Tag Saved.");
                _this.loadData();      
            });
            this.setTagMode(null);
            

        }
		
	}
});