enyo.kind({
    name: "Page",
    label:"",
    global: go.Global,
    phoneGap: go.PhoneGapSuit,
    kind: "FittableRows", 
    classes: "enyo-fit enyo-unselectable",
    
    create:function() {
    	this.inherited(arguments);
        this.setLabel(this.label);
    },
    rendered:function(){
    	this.inherited(arguments);	
    },
    setLabel:function(value){
    	this.label = value;
    },
    getLabel:function(){
    	return this.label;
    },
    refreshPage:function(){
    	this.reflow();
    },
    destroy:function(){

    }
});