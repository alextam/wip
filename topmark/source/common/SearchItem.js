enyo.kind({
    name: "SearchItem",
    kind: "Control",
    global:go.Global,
    classes:"menuSearchItem",
    layoutKind: "FittableColumnsLayout",
    components: [
        {
        	style:"width:70%",
        	layoutKind: "FittableRowsLayout",
        	components:[
        		{
        			tag:"h2",
        			name:"txtCarTitle",
        			style:"margin-top:5px",
        			classes:"standardH2 truncate",
        			content:"Set Title..." 
        		},
        		{
        			tag:"h2",
        			classes:"standardH2 truncate",
        			style:"color:#999;font-size:0.9em",
        			name:"txtCarDescrption",
        			content:"Set Description..."
        		}
        	]
        },
        {
        	name:"buttonContainer",
        	style:"width:30%;",
        	components:[
        		{
        			kind:"Button",
        			classes:"menuSearchDelButton",
        			components:[
        				{
        					style:"font-size:1.2em",
        					classes:"icon-remove-sign"
        				}
        			]
        		},
        		{
        			kind:"Button",
        			classes:"menuSearchButton",
                    ontap:"handleButtonAppraise",
        			components:[
        				{
        					style:"font-size:1.2em",
        					classes:"icon-edit"
        				}
        			]
        		}
        	]
        }
    ],
    published:{
        data:null		
    },
    create: function() {
        this.inherited(arguments);
        if(this.data != null) {
        	this.dataChanged();
        }
    },
    dataChanged: function() {
    	this.$.txtCarTitle.setContent(this.data.model + " (" +this.data.vehicleno+ ")");
    	this.$.txtCarDescrption.setContent("Year "+this.data.year+", Chassis No : "+this.data.chassis);
    },
    handleButtonAppraise: function(inSender,inEvent) {
        //console.log(this.data.___id);
        this.global.storeLocal("TOYOTA.SESSION",this.data);
        //console.log(this.global.getLocal("TOYOTA.SESSION"));
        this.bubble("onChangePage",{page:"Step1Form"});
        inEvent.preventDefault();
    }
});