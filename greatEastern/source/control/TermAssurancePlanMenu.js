enyo.kind({
    name: "TermAssurancePlanMenu",
    kind: "Control",
    classes:"inflatePadding",
    components: [
        {
			kind: "onyx.Groupbox", 
			components: [
				{
					classes:"groupHeaderBar roundedTop",
					kind: "onyx.GroupboxHeader", 
					content: "Term Assurance Plan"
				},
				{	
					content: "Great SecureCare", 
					classes: "selectorMenu"
				},
				{	
					content: "Great Prime Protect", 
					classes: "selectorMenu roundedBottom"
				} 
				
			]
		}
    ]
});