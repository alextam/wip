enyo.kind({
    name: "QuotationP2",
    kind: "Control",
    components: [
        {
        	tag:"h1",
        	classes:"headerRed",
        	content:"Quotation Calculation Demo"
        },
        {
        	kind:"Group",
        	name:"grpGender",
        	components:[
        		{
        			kind:"Button",
        			content:"Male"
        		},
        		{
        			kind:"Button",
        			content:"Female"
        		}
        	]
        },
         {
        	kind:"Group",
        	name:"grpSmoker",
        	components:[
        		{
        			kind:"Button",
        			content:"Smoker"
        		},
        		{
        			kind:"Button",
        			content:"Non-Smoker"
        		}
        	]
        },
        {
        	kind:"Input",
        	name:"txtAge",
        	placeholder:"Insert Age..."
        },
        {
        	
        }
    ]
});	