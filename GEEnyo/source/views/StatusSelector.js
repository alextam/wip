enyo.kind({
    name: "StatusSelector",
    kind: "Control",
    classes:"dataBox",
   
    components: [
        {
        	tag:"div",
        	layoutKind: "FittableColumnsLayout",
        	components:[
        		{
        			name:"txtField",
        			content:"Field Label",
        			classes:"labelField",
        			style:"width:155px;font-weight:bold;line-height:45px;"
        		},
        		{
        			style:"width:544px;height:40px;",
        			components:[
        				{
        					name:"pillBox",
        					classes:"pillBoxSelector",
        					kind:"Group",
        					components:[
        						{
        							kind:"Button",
        							classes:"selectButton",
        							ontap:"handleButtonTapped",
        							index:0,
        							content:"Hot"
        						},
        						{
        							kind:"Button",
        							classes:"selectButton",
        							ontap:"handleButtonTapped",
        							index:1,
        							content:"Warm"
        						},
        						{
        							kind:"Button",
        							classes:"selectButton",
        							ontap:"handleButtonTapped",
        							index:2,
        							content:"Cold"
        						},
        						{
        							kind:"Button",
        							classes:"selectButton",
        							ontap:"handleButtonTapped",
        							index:3,
        							content:"Customer"
        						}
        					]
        				}
        			]
        		}
        	]
        }
    ],
    published:{
    	label:null,
    	value:null,
    	maxlength:null
    },
     create: function() {
        this.inherited(arguments);
        this.labelChanged();
    },
    labelChanged:function(){
    	this.$.txtField.setContent(this.label);
    },
    handleButtonTapped:function(inSender,inEvent) {
    	this.resetAll();
    	this.setValue(inSender.index);
    },
    valueChanged:function(){
    	this.$.pillBox.controls[this.value].setClasses("selectButton active");
    },
    resetAll:function() {
    	for(var i = 0;i <= this.$.pillBox.controls.length;i++){
    		console.log(this.$.pillBox.controls.length);
    		this.$.pillBox.controls[i].setClasses("selectButton");		
    	}
    },
    reset:function() {
    	
    }
});