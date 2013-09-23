enyo.kind({
    name: "AnchorTag",
    kind: "Control",
    style:"width:50px;height:50px;position:absolute",
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
    	id:null,
    	note:null		
	},		
    create:function(){
    	this.inherited(arguments);
     	this.setCoordinate();
     	this.idChanged();
    },
    handleDrag:function(inSender,inEvent) {
    	//console.log(inEvent);
    	this.left = this.left+inEvent.ddx;
    	this.top = this.top+inEvent.ddy;
    	//console.log(this.left);
    	this.setCoordinate();
    },
    setCoordinate:function() {
    	if(this.top <= 0){
    		this.top = 15;
    	} 
    	if (this.top >= (334 - 30)){
    		this.top = (334 - 30);
    	}
    	
    	if(this.left <= 0){
    		this.left = 15;
    	}
    	if(this.left >= (576 - 30)){
    		this.left = (576 - 30);
    	}
    	//this.left = (this.left-15);
    	//this.top = (this.top-15);
    	console.log("top:"+this.top+"px;left:"+this.left+"px;");
    	this.setStyle("top:"+this.top+"px;left:"+this.left+"px;");
    },
    getData:function() {
    	return {top:this.top,left:this.left,id:this.id,note:this.note};
    }
});