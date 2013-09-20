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
        			/*
        			components:[
        				{
							kind:"Image",
							src:"assets/img/toyotaExterior.png",
							style:"width:576px;"
						}
        			]
        			*/
        			components:[
        				{
        					name:"canvasControl",
        					kind:"Canvas",
            				style:"width:576px;height:334px;",
            				//ontap:"handleTap",
            				attributes: {width: 576, height: 334},
            				components:[
            					{ kind: "enyo.canvas.Image", bounds:{t:0, l:0, h:334, w:576}, src:"assets/img/toyotaExterior.png", attributes: {width: 576, height: 334} }
            				]

        				}
        			]
        		}
        	]
        }
	],
	create:function() {
		this.inherited(arguments);
		this.$.txtAreaNote.hide();
		var img = new Image();
		img.src = this.$.image.src;
		img.onload = enyo.bind(this, function() {
			this.$.canvasControl.update();
		});
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
		alert("Adding Note - Work in Progress");
	}
});