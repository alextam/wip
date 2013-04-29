enyo.kind({
    name: "SideMenu",
    selected: 0,
    create:function(){
        this.inherited(arguments);
        this.setSelectedIndex(this.selected);
    },

    setSelectedIndex:function(index){
        this.selected = index;
        this.setActiveButton();
    },

    getSelectedIndex:function(){
    	return this.selected;
    },
    setActiveButton:function(){
    	this.resetButton();
        this.controls[this.selected].addClass("active");
    },
	resetButton:function(){
		var i;
		if (this.controls != null){
			for (i = 0; i < this.controls.length; i++ ){
				this.controls[i].removeClass("active");
			}				
		}
    }    
});