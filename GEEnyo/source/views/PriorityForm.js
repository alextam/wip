enyo.kind({
    name: "PriorityForm",
    kind: "Control",
    components: [
        {
        	tag:"h1",
        	classes:"headerRed",
        	content:"Life Priorities"
        },
        {
        	tag:"div",
        	classes:"dataBox",
        	style:"height:350px;",
        	components:[
        		{
        			layoutKind: "FittableColumnsLayout",
        			components:[
        				{
        					kind:"VerticalSlider",
        					label:"Protection",
                            classes:"icon0"
        				},
        				{
        					kind:"VerticalSlider",
        					label:"Medical/Health",
                            classes:"icon1"
        				},
        				{
        					kind:"VerticalSlider",
        					label:"Debt Cancellation",
                            classes:"icon2"
        				},
        				{
        					kind:"VerticalSlider",
        					label:"Education",
                            classes:"icon3"
        				},
        				{
        					kind:"VerticalSlider",
        					label:"Retirement",
                            classes:"icon4"
        				},
        				{
        					kind:"VerticalSlider",
        					label:"Investment",
                            classes:"icon5"
        				}
        			]
        		}
        	]
        }
    ]
});