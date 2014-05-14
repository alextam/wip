enyo.kind({
    name: "ContactList",
    kind: "Control",
    components: [
        { kind:"SearchBox" },
		{
			name:"subMenuList",
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
    	this.bubble("onContactTapped",{index:inEvent.index});
    },
    dataChanged: function() {
    	this.$.subMenuList.setCount(this.data.length);
    },
    setupInnerMenuItem: function(inSender,inEvent) {
		switch(this.getSelectedIndex()){
			case 0:
				this.$.subItemMenu.setData(this.data[inEvent.index].name);
				this.$.subItemMenu.setSelected(inSender.isSelected(inEvent.index));
			break;

			case 1:

			break;

			case 2:

			break;

			case 3:

			break;

			case 4:

			break;
		}
	}
});