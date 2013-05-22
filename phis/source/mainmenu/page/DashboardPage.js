enyo.kind({
    name: "DashboardPage",
    kind:"Template",
    label:"dashboard",
    classes:"dashboardBg",
    initComponent:[
    	{
			fit:true,
            classes:"contentControl",
			kind:"DashboardView"
    	}
    ],
    create:function() {
        console.log(this.components);
    	this.inherited(arguments);
    	this.attachHeader();
        this.attachContent();
    	this.attachFooter();
        console.log( "CurrentPage : "+this.getLabel() );
    },
    attachContent:function(){
    	console.log("Attaching Content...");
     	this.createComponent(this.initComponent[0]);
     	this.render();
    } 

});