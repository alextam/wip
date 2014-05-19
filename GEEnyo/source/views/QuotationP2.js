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
        			classes:"justButton",
        			content:"Male"
        		},
        		{
        			kind:"Button",
        			classes:"justButton",
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
        			classes:"justButton",
        			content:"Smoker"
        		},
        		{
        			kind:"Button",
        			classes:"justButton",
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