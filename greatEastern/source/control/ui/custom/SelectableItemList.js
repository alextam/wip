enyo.kind({
    name: "SelectableItemList", 
	classes:'listSelector', 
	ontap:'itemTap',
	code:-1, 
	selected:null,
    components: [
		{
			name: "itemTitle",
			tag:"h1",
			content:"Item List"
		}
	],
	create:function(){
		this.inherited(arguments);
		this.setSelected(this.selected);
	},
	setContent:function(value){
		this.$.itemTitle.setContent(value);
	},
	setSelected:function(inSelected){
		this.selected = inSelected;
		if (inSelected != null){
			this.addClass("active", inSelected);
		} else {
			this.removeClass("active");
		}
	}
});