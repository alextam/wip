enyo.kind({
    name: "SigList",
    kind: "Control",
    components: [
        {
			name:"subMenuSigList",
			kind: "List", 
			touch: true, 
			count: 0, 
			onSetupItem: "setupInnerMenuItem", 
			components: [
				{
					name: "subItemMenu", 
					kind:"MenuButton", 
					ontap:"handleSubMenuItemTapped",
					classes: "panels-inner-menuitem"
				}
			]
		}
    ],
    published:{
    	selectedIndex:-1,
        data:null		
    },
    handleSubMenuItemTapped:function(inSender,inEvent) {
    	console.log(inEvent.index +" Selected...");
    	this.bubble("onSigTapped",{index:inEvent.index});
    },
    dataChanged: function() {
    	this.$.subMenuSigList.setCount(this.data.length);
    },
    setupInnerMenuItem: function(inSender,inEvent) {
		this.$.subItemMenu.setData(this.data[inEvent.index]);
		this.$.subItemMenu.setSelected(inSender.isSelected(inEvent.index));
	}
});