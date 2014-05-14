enyo.kind({
    name: "ExistingPlan",
    kind: "Control",
    components: [
         {
        	tag:"h1",
        	classes:"headerRed",
        	content:"Existing Plan"
        },
        {
        	tag:"div",
        	classes:"gridContainerBox",
        	components:[
        		{
		        	layoutKind: "FittableColumnsLayout",
		        	classes:"gridHeader",
		        	components:[
		        		{
		        			fit:true,
		        			classes:"cell",
		        			content:"Policy Type"
		        		},
		        		{
		        			style:"width:135px",
		        			classes:"cell alignRight",
		        			content:"Annual Premium"
		        		},
		        		{
		        			style:"width:135px",
		        			classes:"cell alignRight",
		        			content:"Sum Insured"
		        		},
		        		{
		        			style:"width:125px",
		        			classes:"cell alignRight",
		        			content:"Maturity Date"
		        		},
		        		{
		        			style:"width:125px",
		        			classes:"cell alignRight",
		        			content:"Life Insured"
		        		}
		        	]
		        },
        		{
    				kind: "Scroller",
    				classes:"gridScroller",
    				name: "contentControl",
    				touch:true, 
    				thumb:true,
    				components:[
    					{
    						name:"gridRepeater",
    						kind:"GridRepeater"
    					}
    				]
        		}
  			]
        }
    ],
    published:{
        data:[
			{
				name:"Investment Plan",
				annual:"100,000",
				sum:"200,000",
				maturity:"20 May 2020",
				age:"15 yrs"
			},
			{
				name:"Medical/Health Plan",
				annual:"50,000",
				sum:"100,000",
				maturity:"11 Jun 2010",
				age:"8 yrs"
			}
		]		
    },
    create: function() {
        this.inherited(arguments);
        this.dataChanged();
    },
    dataChanged: function() {
    	this.$.gridRepeater.setData(this.data);
    }
});