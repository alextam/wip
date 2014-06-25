/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/

enyo.kind({
	name: "MainView",
	kind:"Control",
	classes:"enyo-fit",
	global:go.Global,
	components:[
		{
			name:"myPanel",
			kind: "Panels",
			fit: true,
			global:go.Global,
			draggable:false,
			classes:"main-view",
			arrangerKind: "CardSlideInArranger",
			components:[
				{name:"question1",kind:"Question1",onHandleButtonTapped:"handleButtonTapped"},
				{name:"question2",kind:"Question2",onHandleButtonTapped:"handleButtonTapped",onBackTapped:"handleBackTapped"},
				{name:"question3",kind:"Question3",onHandleButtonTapped:"handleButtonTapped",onBackTapped:"handleBackTapped"},
				{kind:"EndPage",onResetForm:"handleFormReset"}
			]
		}
	],
	create: function() {
	    this.inherited(arguments);
	    if (cordova != null){
	    	document.addEventListener("hidekeyboard", this.keyboardHide, false);
	    }
	},
	keyboardHide:function() {
		this.$.question1.scrollToTop();
	},
	handleFormReset:function(inSender,inEvent) {
		if (this.global.getObject("PAYLOAD") != null){
			this.global.setObject("PAYLOAD",null);
		}
		this.$.question1.resetForm();
		this.$.question2.resetForm();
		this.$.question3.resetForm();
		this.$.myPanel.setIndex(0);
	},
	handleBackTapped:function(inSender,inEvent) {
		this.$.myPanel.setIndex(this.$.myPanel.getIndex()-1);
	},
	handleButtonTapped: function(inSender, inEvent) {
		this.$.myPanel.setIndex(this.$.myPanel.getIndex()+1);
	}

});
