enyo.kind({
    name: "AnchorTag",
    kind: "Control",
    classes:"tagNote",
    components: [
        {kind: "Signals", onSelected: "handleSelected"},
        {
        
    		name:"iconControl",
            classes:"icon icon-tag iconControl"
        }
    ],
    handlers:{
        ondrag:"handleDrag",
        ontap:"handleTap"
    },
    top:0,
    left:0,
    
    published:{
        uniqueId:null,
        note:null,
        addMode:false
    },
    create:function(){
    	this.inherited(arguments);
     	this.setCoordinate();
    },
   
    handleSelected:function(inSender,inEvent) {
        //console.log("Reset");
        this.$.iconControl.removeClass("tagNoteSelected");
    },
    handleTap: function(inSender,inEvent) {
        if (!this.addMode) {
            enyo.Signals.send("onSelected");
            this.bubble("onSelectTag",{selected:this});
            this.$.iconControl.addClass("tagNoteSelected");
            this.$.iconControl.render();
        }
    },
    handleDrag:function(inSender,inEvent) {
    	this.left += inEvent.ddx;
    	this.top += inEvent.ddy;
    	this.setCoordinate();
    },
    deSelect:function() {
        this.$.iconControl.removeClass("tagNoteSelected");
    },
    setCoordinate:function() {
    	if(this.top <= 0){
    		this.top = 25;
    	} 
    	if (this.top >= (334 - 30)){
    		this.top = (334 - 30);
    	}
    	
    	if(this.left <= 0){
    		this.left = 25;
    	}
    	if(this.left >= (576 - 30)){
    		this.left = (576 - 30);
    	}
    	//this.left = this.left-15;
    	//this.top = this.top-15;
    	this.setStyle("top:"+(this.top - 15)+"px !important;left:"+(this.left -15)+"px !important");
    },
    getData:function() {
    	return {top:this.top,left:this.left,uniqueId:this.uniqueId,note:this.note};
    }
});