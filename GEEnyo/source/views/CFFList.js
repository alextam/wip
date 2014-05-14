enyo.kind({
    name: "CFFList",
    kind: "Control",
    components: [
        {
			name:"subMenuCFFList",
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
    	this.bubble("onCFFTapped",{index:inEvent.index});
    },
    dataChanged: function() {
    	this.$.subMenuCFFList.setCount(this.data.length);
    },
    setupInnerMenuItem: function(inSender,inEvent) {
		this.$.subItemMenu.setData(this.data[inEvent.index]);
		this.$.subItemMenu.setSelected(inSender.isSelected(inEvent.index));
	}
});