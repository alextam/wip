enyo.kind({
    name: "IconTextButton",
    text:"Click Me",
    icon:"",
    badge:0,
    layoutKind: "FittableRowsLayout",
    components: [
        {
        	name:"btnIcon",
        	kind:"onyx.Button",
        	classes:"iconTextButtonClass",
        	ontap:"handleButtonTapped",
        	style:"position:relative !important",
        	components:[
        		{
        			name:"badgeControl",
        			content:"0",
        			style:"",
        			classes:"badge"
        		}
        	]
        },
        {
        	name:"btnText",
        	tag:"h5",
        	style:"margin:0px !important;text-align:center !important;font-size:1.1em;",
        	content:"Click Me",
        	allowHtml:true,
        	classes:"iconTextButtonLabel",
        	ontap:"handleButtonTapped"
        }
    ],
    create:function() {
    	this.inherited(arguments);
    	if (this.icon != ""){
    		this.setIcon(this.icon);
    	} 
    	if (this.badge <= 0){
    		this.setBadge(this.badge,false);	
    	} else {
    		this.setBadge(this.badge,true);
    	}
    	this.setText(this.text);
    },
    setIcon:function(icon){
    	this.icon = icon;
    	this.$.btnIcon.addClass(icon);
    },
    setText:function(text){
    	this.text = text;
    	this.$.btnText.setContent(text);
    },
    setBadge:function(badge,bAppear){
    	this.$.badgeControl.setContent(badge);
    	if(bAppear){
    		this.$.badgeControl.show();
	    } else {
	    	this.$.badgeControl.hide();
	    }
    }
});