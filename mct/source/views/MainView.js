/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/

enyo.kind({
	name: "MainView",
	kind:"Control",
	classes:"enyo-fit",
	components:[
		{ withBack:false,name:"header",kind:"Header", onBackTapped:"handleBackTapped" },
		{
			name:"myPanel",
			kind: "Panels",
			fit: true,
			global:go.Global,
			draggable:false,
			classes:"main-view",
			arrangerKind: "CardSlideInArranger",
			components:[
				{kind:"Question1",onHandleButtonTapped:"handleButtonTapped"},
				{kind:"Question2",onHandleButtonTapped:"handleButtonTapped"},
				{kind:"Question3",onHandleButtonTapped:"handleButtonTapped",onGotoMainPage:"handleGotoMainPage"}
			]
		}
	],
	handleBackTapped:function(inSender,inEvent) {
		this.$.myPanel.setIndex(this.$.myPanel.getIndex()-1);
		if (this.$.myPanel.getIndex() > 0) {
			this.$.header.setWithBack(true);
		} else {
			this.$.header.setWithBack(false);
		}
	},
	handleButtonTapped: function(inSender, inEvent) {
		this.$.myPanel.setIndex(this.$.myPanel.getIndex()+1);
		if (this.$.myPanel.getIndex() > 0) {
			this.$.header.setWithBack(true);
		} else {
			this.$.header.setWithBack(false);
		}
	}
});
