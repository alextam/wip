enyo.kind({
    name: "WholeLifePlanMenu",
    kind: "Control",
    naviMatrix: NavigationMatrix,
    classes:"inflatePadding",
    components: [
        {
			kind: "onyx.Groupbox", 
			components: [
				{
					classes:"groupHeaderBar roundedTop",
					kind: "onyx.GroupboxHeader", 
					content: "Whole Life Plan"
				},
				{	
					content: "Great Life Care", 
					classes: "selectorMenu",
					plan:"greatlifecare",
					onclick:"handleSelectPlan" 
				},
				{	
					content: "Great MaxiProtector", 
					classes: "selectorMenu",
					plan:"greatmaxiprotector",
					onclick:"handleSelectPlan" 
				},
				{	
					content: "Great Ideal Living",
					onclick:"handleSelectPlan",
					plan:"greatidealliving", 
					classes: "selectorMenu roundedBottom" 
				}
				
			] 
			
		}
    ],
    handleSelectPlan:function(inSender,inEvent) {
		this.bubble("onUpdateDetail",inSender,inEvent);
		return true;
	}
});