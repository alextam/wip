enyo.kind({
    name: "TapChangeButton",
    kind: "Button",
    classes:"tapButtonControl reset borderless",
    allowHtml:true,
    style:"padding:10px",
    content:"Tap Me",
    published:{
    	activeIndex:0,
        data:null		
    },
    handlers:{
    	ontap:"handleTapped"
    },
    create: function() {
        this.inherited(arguments);
        if (this.data != null) {
           this.dataChanged();
        }       
    },
    dataChanged:function() {
    	this.setContent(this.data[this.activeIndex].content);	
    },
    activeIndexChanged:function() {
    	this.setContent(this.data[this.activeIndex].content);
    	//console.log(this.data[this.getActiveIndex()].content);
    	this.bubble("onChanged",{data:this.data[this.getActiveIndex()].content});
    },
    getValue:function() {
        return this.data[this.getActiveIndex()].content;
    },
    handleTapped:function(inSender,inEvent) {
    	if(this.data != null){
    		//Start Bubbling.
    		if (this.activeIndex >= this.data.length -1) {
    			this.setActiveIndex(0);
    		} else {
    			this.setActiveIndex(this.getActiveIndex()+1);
    		}
    	}
    }
});