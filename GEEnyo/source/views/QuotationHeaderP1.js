enyo.kind({
    name: "QuotationHeaderP1",
    kind: "Control",
    components: [
        {
        	layoutKind: "FittableColumnsLayout",
        	classes:"gridHeader",
        	components:[
        		{
        			style:"width:50px",
        			classes:"cell",
        			allowHtml:true,
        			content:"&nbsp;"	
        		},
        		{
        			fit:true,
        			classes:"cell",
        			content:"Item"
        		},
        		{
        			style:"width:100px",
        			classes:"cell alignCenter",
        			content:"Terms"
        		},
        		{
        			style:"width:100px",
        			classes:"cell alignCenter",
        			content:"Type"
        		},
        		{
        			style:"width:120px",
        			classes:"cell alignCenter",
        			content:"Sum Covered"
        		},
        		{
        			style:"width:120px",
        			classes:"cell alignCenter",
        			allowHtml:true,
        			content:"Annually"
        		}
        	]
        }
    ]
});