enyo.kind({
    name: "MoreContent",
    kind: "Control",
    components: [
        {
        	layoutKind: "FittableColumnsLayout",
        	style:"width:680px",
        	components:[
        		{
        			content:"Monthly",
        			classes:"headerCell"
        		},
        		{
        			content:"Quarterly",
        			classes:"headerCell"
        		},
        		{
        			content:"Half Yearly",
        			classes:"headerCell"
        		},
        		{
        			content:"Annually",
        			classes:"headerCell"
        		}
        	]
        },
        {
        	layoutKind: "FittableColumnsLayout",
        	style:"width:680px",
        	components:[
        		{
        			name:"txtMonthly",
        			content:"---",
        			classes:"headerCellValue"
        		},
        		{
        			name:"txtQuarterly",
        			content:"---",
        			classes:"headerCellValue"
        		},
        		{
        			name:"txtHalfYearly",
        			content:"---",
        			classes:"headerCellValue"
        		},
        		{
        			name:"txtAnnually",
        			content:"---",
        			classes:"headerCellValue"
        		}
        	]
        }
    ],
    published:{
        data:null		
    },
    create: function() {
        this.inherited(arguments);
        //TODO
    },
    dataChanged: function() {
    	this.$.txtMonthly.setContent(this.data.month);
    	this.$.txtQuarterly.setContent(this.data.quarter);
    	this.$.txtAnnually.setContent(this.data.annual);
    	this.$.txtHalfYearly.setContent(this.data.halfyear);
    }

});