enyo.kind({
	name: "MasterPanel",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable appBg",
	index: 0,
	navMatrix: NavigationMatrix,
	components: [
		{
			kind: "HeaderControl",
			onMainButtonTapped: "handleBtnMainTapped",
			onSideButtonTapped: "handleBtnSideTapped"
		},
		{
			name:"panelControl",
			kind: "Panels", 
			classes: "panelSlider", 
			arrangerKind: "CollapsingArranger",
			onTransitionStart:"handlePanelChanged", 
			fit: true, 
			wrap: false,
			components: [
				{
					kind: "Scroller",
					name:"masterViewScrollerContent",
					onUpdatePanel:"handleLeftButtonTapped",
					touch:false, 
					thumb:true
				},
				{
					kind: "Scroller",
					classes:"appBg",
					onUpdateDetail:"handleUpdateDetail",
					name: "detailViewScrollerControl",  
					touch:true, 
					thumb:true
				}
			]
		}	
	],
	create: function(inSender,inEvent){
		this.inherited(arguments);
		this.$.panelControl.setIndex(0);
		this.navMatrix.setContentIndex(0);
		this.setupContent( this.navMatrix.getContentPage(0) );
		enyo.Signals.send("onMainPage");
 	},
	rendered : function(inSender,inEvent){
		this.inherited(arguments);
 	},
 	
 	setupContent : function(matrix){
 		//This is how navigation works it replaces the controls of the small and the large panels
 		var i;
 		this.$.masterViewScrollerContent.destroyClientControls();
 		this.$.detailViewScrollerControl.destroyClientControls();
 		this.$.masterViewScrollerContent.createComponent(matrix.left);
 		this.$.masterViewScrollerContent.render();
 		for(i = 0; i < matrix.right.length; i++){
 			this.$.detailViewScrollerControl.createComponent(matrix.right[i]);
 			this.$.detailViewScrollerControl.render();	
 		}
 		
 	},
 	handleBtnMainTapped: function(inSender,inEvent){
 		this.handleSlidePanel();
 	},
 	handlePanelChanged : function(inSender,inEvent) {
 		
 	},
 	handleSlidePanel : function(inSender,inEvent) {
 		if ( enyo.Panels.isScreenNarrow() ){
 			if(this.$.panelControl.getIndex()){
  				this.$.panelControl.setIndex(0);
 			} else {
 				this.$.panelControl.setIndex(1);
 			}
 		}

 	},
 	handleUpdateDetail:function(inSender,inEvent) {
 		var matrix = this.navMatrix.gotoPlan(inEvent.plan);
 		if (matrix != null){
 			enyo.Signals.send("onInnerPage");

 			this.setupContent(matrix);
 		}	
 	},

 	handleLeftButtonTapped : function(inSender,inEvent) {
 		this.handleSlidePanel();
 		this.setupContent( this.navMatrix.getContentPage(inEvent.originator.selected) );
 	},
 	handleBtnSideTapped:function(inSender,inEvent){
 		enyo.Signals.send("onMainPage");
   		this.setupContent(this.navMatrix.goHome());
 	},
 	handleOnSelectMenu: function(inSender,inEvent) {
 		console.log(inEvent);
 	}
});