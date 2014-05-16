enyo.kind({
    name: "Quotation",
    kind: "Control",
    components: [
        {
        	tag:"h1",
        	classes:"headerRed",
        	content:"Quotation"
        },
        {
        	kind: "Scroller",
			classes:"gridScroller extended",
			name: "contentControl",
			touch:true, 
			thumb:true,
			components:[
			{	
				tag:"div",
	        	components:[
	        		{
	        			kind:"QuotationHeaderP1"
	        		},
			        {
			        	name:"item0",
			        	kind:"QuotationItem"
			        },
			        {
			        	name:"item1",
			        	kind:"QuotationItem"
			        },
			        {
			        	name:"item2",
			        	kind:"QuotationItemTotal"
			        },
			        {
			        	style:"height:25px;"
			        },
			        {
	        			kind:"QuotationHeaderP2"
	        		},
	        		{
			        	name:"item3",
			        	kind:"QuotationItem"
			        },
			        {
			        	name:"item4",
			        	kind:"QuotationItem"
			        },
			        {
			        	name:"item5",
			        	kind:"QuotationItem"
			        },
			        {
			        	name:"item6",
			        	kind:"QuotationItem"
			        },
			        {
			        	name:"item7",
			        	kind:"QuotationItem"
			        },
			        {
			        	name:"item8",
			        	kind:"QuotationItem"
			        },
			        {
			        	name:"item9",
			        	kind:"QuotationItem"
			        },
			        {
			        	name:"item10",
			        	kind:"QuotationItemTotal"
			        },
			        {
			        	name:"item11",
			        	kind:"QuotationItemTotal"
			        }
			    ]
			}
			]
        }
    ],
    published:{
        data:[
        	{
				select:true,
				title:"Basic Plan",
				terms:"15 yrs",
				sum:"100,000",
				type:"&mdash;",
				halfyear:"1,267.50",
				quarter:"633.90",
				month:"211.30",
				annual:"2,535.50"
        	},
        	{
				select:true,
				title:"Cash Payment",
				terms:"10 yrs",
				sum:"6,000",
				type:"&mdash;",
				halfyear:"2,887.80",
				quarter:"1,443.90",
				month:"481.30",
				annual:"5,775.50"
        	},
        	{
        		label:"Total",
        		total:"8,311.00"
        	},
        	{
				select:true,
				title:"Accidental Death &amp; Dismemberment",
				terms:"20 yrs",
				sum:"10,000",
				type:"&mdash;",
				halfyear:"10.00",
				quarter:"5.00",
				month:"1.67",
				annual:"20.00"
        	},
        	{
				title:"Term Rider (Participant)",
				terms:"20 yrs",
				sum:"10,000",
				type:"&mdash;",
				halfyear:"10.00",
				quarter:"5.00",
				month:"1.67",
				annual:"20.00"
        	},
        	{
				title:"Term Rider (Payor)",
				terms:"20 yrs",
				sum:"10,000",
				type:"&mdash;",
				halfyear:"10.00",
				quarter:"5.00",
				month:"1.67",
				annual:"20.00"
        	},
        	{
				title:"Accelerated Critical Illness",
				terms:"20 yrs",
				sum:"10,000",
				type:"&mdash;",
				halfyear:"15.00",
				quarter:"7.50",
				month:"2.50",
				annual:"30.00"
        	},
        	{
				title:"Additional Critical Illness",
				terms:"20 yrs",
				sum:"10,000",
				type:"&mdash;",
				halfyear:"15.00",
				quarter:"7.50",
				month:"2.50",
				annual:"30.00"
        	},
        	{
				title:"Payor Benefit Rider",
				terms:"20 yrs",
				sum:"10,000",
				type:"&mdash;",
				halfyear:"7.50",
				quarter:"3.75",
				month:"1.25",
				annual:"15.00"
        	},
        	{
				title:"Hospital Income Benefit",
				terms:"20 yrs",
				sum:"10,000",
				type:"&mdash;",
				halfyear:"10.00",
				quarter:"5.00",
				month:"1.67",
				annual:"20.00"
        	},
        	{
        		label:"Total",
        		total:"20.00"
        	},
        	{
        		label:"Grand Total",
        		total:"8,331.00"
        	}
        ]		
    },
    create: function() {
        this.inherited(arguments);
        this.dataChanged();
    },
    dataChanged: function() {
    	this.$.item0.setData(this.data[0]);
    	this.$.item1.setData(this.data[1]);
    	this.$.item2.setData(this.data[2]);
    	this.$.item3.setData(this.data[3]);
    	this.$.item4.setData(this.data[4]);
    	this.$.item5.setData(this.data[5]);
    	this.$.item6.setData(this.data[6]);
    	this.$.item7.setData(this.data[7]);
    	this.$.item8.setData(this.data[8]);
    	this.$.item9.setData(this.data[9]);
    	this.$.item10.setData(this.data[10]);
    	this.$.item11.setData(this.data[11]);
    }
});