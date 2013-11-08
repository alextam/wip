enyo.kind({
    name: "BusinessCard",
    kind: "Control",
    classes:"businessCardBox",
    components: [
        {
        	layoutKind: "FittableColumnsLayout",
        	components:[
        		{
        			name:"businessCardPhoto",
        			kind:"Image",
        			classes:"businessCardPhoto"
        		},
        		{
        			layoutKind: "FittableRowsLayout",
                    classes:"businessCardContentArea",
        			components:[
		        		{
				        	classes:"businessCardName truncate",
				        	name:'txtName',
				        	content:'Set Name...'				 
				        },
				        {
				        	style:"height:2px"
				        },
				        {
        					tag:"div",
        					classes:"standardContent",
        					layoutKind: "FittableColumnsLayout",	
        					components:[
				        		{
				        			name:"txtOccupation",
				        			classes:"headerOccupation",
				        			content:"Set Occupation..."
				        		}
				        	]
        					//content:"Set Phone..."		
        				},
        				{
				        	style:"height:2px"
				        },
		        		{
        					tag:"div",
        					classes:"standardContent",
        					layoutKind: "FittableColumnsLayout",	
        					components:[
				        		{
				        			classes:"icon-phone",
				        			style:"margin:2px"
				        		},
				        		{
				        			name:"txtPhone",
				        			style:"text-indent:2px;line-height:20px;font-size:1em",
				        			content:"Mobile No..."
				        		}
				        	]
        					//content:"Set Phone..."		
        				},
        				{
        					tag:"div",
        					classes:"standardContent",
        					layoutKind: "FittableColumnsLayout",	
        					components:[
				        		{
				        			classes:"icon-envelope",
				        			style:"margin:2px"
				        		},
				        		{
				        			name:"txtEmail",
				        			classes:"truncate",
				        			style:"width:90%;text-indent:2px;line-height:20px;font-size:1em",
				        			content:"Set Email..."
				        		}
				        	]		
        				}
        			]
        		},
        		{
        			name:"statusRate",
                    style:"width:15px;height:100px;"
        		}
        	]
        }
    ],
    published:{
        data:null		
    },
    create: function() {
        this.inherited(arguments);
        if (this.data != null) {
            this.dataChanged();
        }
    },
    dataChanged: function() {
    	this.$.businessCardPhoto.setSrc("assets/img/samples/"+this.data.photo);
    	this.$.txtName.setContent(this.data.name);
    	this.$.txtPhone.setContent(this.data.contactno);
    	this.$.txtEmail.setContent(this.data.email);
    	this.$.txtOccupation.setContent(this.data.occupation);
        this.$.statusRate.setClasses("rate"+this.data.rating);
    },
    setSelected:function(inSelected){
        this.selected = inSelected;
        if (inSelected != null){
            this.addClass("active", inSelected);
        } else {
            this.removeClass("active");
        }
    }
});