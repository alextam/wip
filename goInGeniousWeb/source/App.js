enyo.kind ({
	name : "App",
	version : "1.0.0",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
	components: [
		{
			kind: "onyx.Toolbar",
			classes:"header cyan reset",
			components:[
				{
					tag:"div",
 					components:[
						{
							tag:"div",
		 					classes:"centerDiv goLogo",
							style:"height:142px;margin-top:10px"
						},
						{
							tag:"div",
							classes:"goTabBar-belt",
							components: [
								{
									kind: "onyx.RadioGroup", 
									onActivate:"tabActivated", 
									controlClasses: "goTabBar", 
									components: [
										{content: "Home", index:0, active:true},
										{content: "About Us", index:1},
										{content: "Services", index:2},
										{content: "Our Work", index:3},
										{content: "Contact Us", index:4}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			kind: "Scroller",
			name: "mainScrollControl",
			fit:true,
			touch:true, 
			thumb:false,
			horizontal:false,
			vertical:true,
			touchOverscroll:false,
			components: [
				{name:"scrollableContentControl"}
			]
		}
	],
	create:function(inSender,inEvent){
 		this.inherited(arguments);
 		this.$.scrollableContentControl.addControl(new ContentControl());
	},
	tabActivated:function(inSender,inEvent){
		var originator = inEvent.originator;
		if (originator.getActive()) {

			this.$.mainScrollControl.scrollTo(0,originator.index*500);
		}
	}
});