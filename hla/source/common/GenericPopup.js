enyo.kind({
    name:"GenericPopup",
    kind: "onyx.Popup",
    centered: true, 
    floating: true,
    scrim:true,
    onShow: "popupShown", 
    onHide: "popupHidden",
    layoutKind: "FittableRowsLayout",
    style:"width:950px;",
    components:[
        {
       		classes:"contextPopupHeader",
			name:"contextPopupHeader",
			layoutKind: "FittableColumnsLayout",
			components:[
				{
					style:"min-width:138px;text-align:left;",
					components:[
						{
							classes:"headerButton",
							kind:"Button",
							name:"btnLeft",
							allowHtml:true,
							ontap:"handleBtnLeft",
							content:""
						}
					]
				},
				{
					tag:"h1",
					name:"title", 
					fit:true
				},
				{
					style:"min-width:138px;text-align:right;",
					components:[
						{
							classes:"headerButton",
							kind:"Button",
							name:"btnRight",
							allowHtml:true,
							ontap:"handleBtnRight",
							content:""
						}
					]
				}
			]    
        },
        { style:"height:8px" },
        { 
			name:"client",
			kind: "enyo.Scroller", 
			vertical:"auto", 
			classes:"enyo-unselectable roundedBottom",
			thumb:true,
			style:"height:555px",
			touch:true,
			horizontal:"hidden",
 			components:[
				{
					//kind:"FormulaGroupButton"
					name:"actualContent",
					allowHtml:true
				}
			]
		}
    ],
    published:{
    	title:"",
    	contentPage:"",
    	shortHeight:false,
    	contentClass:"selectorBg",
    	btnLeft:"",
    	btnRight:"",
    	//Origin : Used to store the control that calls popup.show();
    	//might be handy. 
    	origin:"",
    	contentPageControl:null,
    	data:null,
    	metaData:null,
    	readOnlyButtonIndex:null
    },
    create: function() {
		this.inherited(arguments);
		this.titleChanged();
		this.contentClassChanged();
		this.contentPageChanged();
		this.shortHeightChanged();
		this.initControlButtons(this.btnLeft,this.btnRight);
	},
	shortHeightChanged:function(){
		if(this.shortHeight){
			this.$.client.addStyles("height:175px !important");
			this.addStyles("height:220px !important");
		} else {
			this.$.client.addStyles("height:555px !important");			
			this.addStyles("height:600px !important");
		}
	},
	readOnlyButtonIndexChanged:function(){
		if (this.readOnlyButtonIndex != null){
			if (this.readOnlyButtonIndex){
				this.$.contextPopupHeader.controls[2].hide();
			} else {
				this.$.contextPopupHeader.controls[0].hide();
			} 
		} else {
			this.$.contextPopupHeader.controls[0].show();
			this.$.contextPopupHeader.controls[2].show();
					
			this.initControlButtons(this.btnLeft,this.btnRight);
		}
	},
	contentClassChanged:function(){
		this.$.client.addClass(this.contentClass);
	},
	metaDataChanged:function(){
		this.$.actualContent.controls[0].setMetaData(this.metaData);
	},
	directInsertData:function(data){
		if(this.data != null){
			this.$.actualContent.controls[0].setData(data);
		}
	},
	updateDataToContent:function(){
		if(this.metaData != null){
			this.metaDataChanged();
		}
		if(this.data != null){
			this.dataChanged();
		}
	},
	dataChanged:function(){
		this.$.actualContent.controls[0].setData(this.data);
	},
	resetControls:function(){
		this.btnLeft = this.resetLeft;
		this.btnRight = this.resetRight;
		this.initControlButtons(this.btnLeft,this.btnRight);
		this.bubble("onResetControls");
	},
	initControlButtons:function(btnLeft,btnRight){
		this.btnLeft = btnLeft;
		this.btnRight = btnRight;
		if (this.btnLeft == ""){
			this.$.btnLeft.hide();
		} else {
			this.$.btnLeft.setContent(this.btnLeft);
			this.$.btnLeft.show();
		}

		if (this.btnRight == ""){
			this.$.btnRight.hide();
		} else {
			this.$.btnRight.setContent(this.btnRight);
			this.$.btnRight.show();
		}
		this.$.contextPopupHeader.reflow();
	},
	titleChanged: function(){
		this.$.title.setContent(this.title);
	},
	contentPageChanged:function() {
		if (this.contentPage != ""){
			this.$.actualContent.destroyClientControls();
			this.$.actualContent.createComponent({kind:this.contentPage});
			this.$.actualContent.render();
			this.setContentPageControl(this.$.actualContent.controls[0]);
		}
	},
	getContentControl:function(){
		return this.$.actualContent.controls[0];
	},
	btnLeftChanged:function(){
		this.initControlButtons(this.btnLeft,this.btnRight);
	},
    btnRightChanged:function(){
    	this.initControlButtons(this.btnLeft,this.btnRight);
    },
	handleBtnLeft:function(inSender,inEvent) {
		this.bubble("onControlButtonTapped",inEvent);
		return true;
	},
	handleBtnRight:function(inSender,inEvent) {
		this.bubble("onControlButtonTapped",inEvent);
		return true;
	}
});