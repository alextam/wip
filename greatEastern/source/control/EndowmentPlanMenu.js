enyo.kind({
    name: "EndowmentPlanMenu",
    classes:"inflatePadding",
    kind: "Control",
    components: [
        {
			kind: "onyx.Groupbox", 
			components: [
				{
					classes:"groupHeaderBar roundedTop",
					kind: "onyx.GroupboxHeader", 
					content: "Endowment Plan"
				},
				{	
					content: "Great Life Care", 
					classes: "selectorMenu"
				},
				{	
					content: "Great MaxiProtector", 
					classes: "selectorMenu"
				},
				{	
					content: "25 Year Great EduPlanner", 
					classes: "selectorMenu"
				},
				{	
					content: "Elite Builder", 
					classes: "selectorMenu"
				},
				{	
					content: "Great Cash Wonder", 
					classes: "selectorMenu"
				},
				{	
					content: "Great Cash Gain", 
					classes: "selectorMenu"
				},
				{	
					content: "5 Pay Great Treasure Wonder", 
					classes: "selectorMenu"
				},
				{	
					content: "10 Pay Great Treasure Wonder", 
					classes: "selectorMenu"
				},
				{	
					content: "Great Income Plus", 
					classes: "selectorMenu roundedBottom"
				}


			]
		}
    ]
});