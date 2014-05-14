enyo.kind({
    name: "SwitchBox",
    kind: "Control",
    classes:"dataBox",
    components: [
        {
        	tag:"div",
        	layoutKind: "FittableColumnsLayout",
        	components:[
        		{
        			name:"txtField",
        			content:"",
        			classes:"labelField",
        			style:"width:155px;font-weight:bold;line-height:45px;"
        		},
        		{
        			style:"width:544px;height:40px;",
        			layoutKind: "FittableColumnsLayout",
        			components:[
        				{
        					name:"txtMuslim",
        					kind:"SwitchButton",
        					label:"Muslim",
        					value:false
        				},
        				{ fit:true },
        				{
        					name:"txtMarried",
        					kind:"SwitchButton",
        					label:"Married",
        					value:false
        				}
        			]
        		}
        	]
        },
        {
        	style:"height:5px"
        },
        {
        	tag:"div",
        	layoutKind: "FittableColumnsLayout",
        	components:[
        		{
        			name:"txtField",
        			content:"",
        			classes:"labelField",
        			style:"width:155px;font-weight:bold;line-height:45px;"
        		},
        		{
        			style:"width:544px;height:40px;",
        			layoutKind: "FittableColumnsLayout",
        			components:[
        				{
        					name:"txtSmoker",
        					kind:"SwitchButton",
        					label:"Smoker",
        					value:false
        				},
        				{ fit:true },
        				{
        					name:"txtExtreme",
        					kind:"SwitchButton",
        					label:"Extreme",
        					value:false
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
    },
    dataChanged:function(){
    		
    },
    reset:function() {
    	
    }
});