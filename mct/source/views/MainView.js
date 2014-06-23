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
		{ kind:"Header" },
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
				{kind:"Question3",onHandleButtonTapped:"handleButtonTapped"}
			]
		}
	],
	handleCountrySelected:function(inSender,inEvent) {
		console.log(inEvent);
		this.global.setObject("NationalitySelected",inEvent.label);
		this.$.countryNation.setData(this.global.getObject("NationalitySelected"));
		this.$.myPanel.setIndex(3);	
	},
	handleNationTapped:function(inSender,inEvent) {
		this.$.myPanel.setIndex(4);
	},
	handleAgeGroupTapped:function(inSender,inEvent) {
		this.$.myPanel.setIndex(8);
	},
	handleAgeGroupSelected:function(inSender,inEvent) {
		this.global.setObject("AgeGroupSelected",inEvent.label);
		this.$.miscForm.setDataAge(this.global.getObject("AgeGroupSelected"));
		this.$.myPanel.setIndex(7);
	},
	handleButtonSkipTapped:function(inSender,inEvent) {
		this.$.myPanel.setIndex(6);
	},
	handleButtonTapped: function(inSender, inEvent) {
		this.$.myPanel.setIndex(this.$.myPanel.getIndex()+1);
	}
});
