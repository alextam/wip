enyo.kind({
    name: "QuotationItemTotal",
    kind: "Control",
    components: [
       {
        	layoutKind: "FittableColumnsLayout",
        	classes:"gridContent",
        	components:[
        		{
        			style:"width:50px;text-align:center;",
        			classes:"cell"
        		},
        		{
        			fit:true,
        			classes:"cell",
                    name:"txtLabel",
        			allowHtml:true,
        			content:"<strong>TOTAL</strong>"
        		},
        		{
        			style:"width:100px",
        			classes:"cell alignCenter"
        		},
        		{
        			style:"width:100px",
        			classes:"cell alignCenter",
        			allowHtml:true
        		},
        		{
        			style:"width:120px",
        			classes:"cell alignCenter",
        			content:""
        		},
        		{
        			name:"txtTotal",
                    style:"width:120px",
        			classes:"cell alignCenter",
        			allowHtml:true,
        			content:"1,000.00"
        		}
        	]
        }
    ],
    published:{
        data:null        
    },
    dataChanged: function() {
        this.$.txtLabel.setContent("<strong>"+this.data.label+"</strong>");
        this.$.txtTotal.setContent(this.data.total);
    }
});