enyo.kind({
    name: "QuotationItem",
    kind: "Control",
    components: [
       {
        	name:"gridRow",
            layoutKind: "FittableColumnsLayout",
        	classes:"gridContent",
            ontap:"handleQuotationDrawerOpen",
        	components:[
        		{
        			style:"width:50px;text-align:center;",
        			classes:"cell",
        			components:[
        				{name:"chkBox", kind:"onyx.Checkbox", onchange:"checkboxChanged"}
					]
        		},
        		{
        			fit:true,
                    name:"txtTitle",
                    allowHtml:true,
        			classes:"cell",
        			content:"Title"
        		},
        		{
        			style:"width:100px",
                    name:"txtTerms",
        			classes:"cell alignCenter",
        			content:"0 yrs"
        		},
        		{
        			style:"width:100px",
                    name:"txtType",
        			classes:"cell alignCenter",
        			allowHtml:true,
        			content:"&mdash;"
        		},
        		{
        			style:"width:120px",
                    name:"txtSumInsured",
        			classes:"cell alignCenter",
        			content:"100,000"
        		},
        		{
        			style:"width:120px",
                    name:"txtAnnual",
        			classes:"cell alignCenter",
        			allowHtml:true,
        			content:"1,000.00"
        		}
        	]
        },
        {
            name:"itemDrawer",
            kind: "enyo.Drawer",
            open:false, 
            animated: true, 
            components: [
                {
                    name:"slideMoreContent",
                    classes:"smallPaddingSupport",
                    kind:"MoreContent"
                }
            ]
        }
    ],
    published:{
        data:null        
    },
    dataChanged: function() {
        if(this.data.select != null) {
            this.$.chkBox.checked = this.data.select;    
        }
        this.$.txtTitle.setContent(this.data.title);
        this.$.txtTerms.setContent(this.data.terms);
        this.$.txtType.setContent(this.data.type);
        this.$.txtSumInsured.setContent(this.data.sum);
        this.$.txtAnnual.setContent(this.data.annual);

        this.$.slideMoreContent.setData(this.data);
    },
    handleQuotationDrawerOpen:function(inSender,inEvent) {
       this.$.itemDrawer.setOpen(!this.$.itemDrawer.open);
       if(this.$.itemDrawer.open){
            this.$.gridRow.setClasses("gridContent selected");
        } else {
            this.$.gridRow.setClasses("gridContent");
        }
    }
});