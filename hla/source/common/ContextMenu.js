enyo.kind({
	name:"ContextMenu",
	kind: "onyx.MenuDecorator", 
	style:"",
	components: [
		{
            kind:"Button",
            classes:"contextButton",
            components:[
                {
                    tag:"i",
                    classes:"icon-ellipsis-vertical contextIcon"
                }
            ]
        },
		{
			kind: "onyx.Menu", 
			floating: true,
			onSelect: "itemSelected",
			classes:"contextMenuPopup",
			components: [
				{content: "Conversion Chart"},
				{content: "Misc"}
			]
		}
	],
	itemSelected:function(inSender,inEvent) {
		this.bubble("onContextMenuSelected",{page:inEvent.selected.content,title:inEvent.selected.content});
	}

});