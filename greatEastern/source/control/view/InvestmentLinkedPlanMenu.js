enyo.kind({
    name: "InvestmentLinkedPlanMenu",
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
					content: "Investment Linked Insurance Plan"
				},
				{	
					content: "Link # 1", 
					classes: "selectorMenu",
					plan:"link1",
					onclick:"handleSelectPlan" 
				},
				{	
					content: "Link # 2", 
					classes: "selectorMenu",
					plan:"link2",
					onclick:"handleSelectPlan" 
				},
				{	
					content: "Link # 3",
					onclick:"handleSelectPlan",
					plan:"link3", 
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