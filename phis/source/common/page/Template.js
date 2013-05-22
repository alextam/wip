enyo.kind({
    name: "Template",
    kind: "Page",
    headerFooterComponent:[
	    {
    		name:"headerControl",
    		classes:"headerControl",
    		kind:"Header"
	    },
	    {
	    	name:"footerControl",
    		classes:"footerControl",
    		kind:"Footer"
	    }
    ],
    create:function(){
    	this.inherited(arguments);
     },
    attachHeader:function(){
     	console.log("Attaching Header...");
      this.createComponent(this.headerFooterComponent[0]);
    	this.render();
    },
    attachFooter:function(){
     	console.log("Attaching Footer...");
      	console.log(this.headerFooterComponent[1]);
      	this.createComponent(this.headerFooterComponent[1]);
    	this.render();
    }
});