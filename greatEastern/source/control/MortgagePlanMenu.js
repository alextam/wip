enyo.kind({
    name: "MortgagePlanMenu",
    kind: "Control",
    classes:"inflatePadding",
    components: [
        {
			kind: "onyx.Groupbox", 
			components: [
				{
					classes:"groupHeaderBar roundedTop",
					kind: "onyx.GroupboxHeader", 
					content: "Mortgage Plan"
				},
				{	
					content: "Mortgage Decreasing Team Policy without Profit", 
					classes: "selectorMenu roundedBottom smaller"
				} 
				
			]
		}
    ]
});