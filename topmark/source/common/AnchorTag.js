enyo.kind({
    name: "AnchorTag",
    kind: "Control",
    classes:"tagNote",
    components: [
        {
        
    		classes:"icon icon-tag",
    		style:"font-size:3em;color:#cc3333 !important;text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3) !important;"
        }
    ],
    handlers:{
		ondrag:"handleDrag"
    },
    top:0,
    left:0,
    
    published:{
        uniqueId:null,
        note:null        
    },		
    create:function(){
    	this.inherited(arguments);
     	this.setCoordinate();
    },
    handleDrag:function(inSender,inEvent) {
    	//alert("!");
    	//console.log(inEvent);
    	this.left += inEvent.ddx;
    	this.top += inEvent.ddy;
    	this.setCoordinate();
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