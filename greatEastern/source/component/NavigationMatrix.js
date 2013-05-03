enyo.kind({
	name: "NavigationMatrix",
	statics :{
		version:"1.0.0",
		currentIndex:0,
		currentPage:"home0",
		matrix: TAFFY([
			{
				id:0,
				plan:"home0",
				title:"iQuote Menu",
				left:{kind:"MainPlanMenu", selected:0},
				right:[
					{kind:"WholeLifePlanMenu"},
					{kind:"EndowmentPlanMenu"},
					{kind:"TermAssurancePlanMenu"},
					{kind:"MortgagePlanMenu"},
					{tag:"br"}
				]
			},
			{
				id:1,
				plan:"home1",
				title:"iQuote Menu",
				left:{kind:"MainPlanMenu", selected:1},
				right:[
					{kind:"InvestmentLinkedPlanMenu"} 
				]
			},
			{
				id:2,
				title:"Great Maxi Protector",
				plan:"greatmaxiprotector.clientdetailsform",
				left:{kind:"GreatMaxiProtectorMenu", selected:0},
				right:[
					{kind:"GreatMaxiProtector"},
					{tag:"br"}
				]
			},
			{
				id:3,
				title:"Great Maxi Protector",
				plan:"greatmaxiprotector.productentryform",
				left:{kind:"GreatMaxiProtectorMenu", selected:1},
				right:[
					{kind:"GreatMaxiProtector"},
					{tag:"br"}
				]
			},
			{
				id:4,
				title:"Great Maxi Protector",
				plan:"greatmaxiprotector.computepremiumform",
				left:{kind:"GreatMaxiProtectorMenu", selected:2},
				right:[
					{kind:"GreatMaxiProtector"},
					{tag:"br"}
				]
			}
		]),
		
		setContentIndex:function(index){
			this.currentIndex = index;
		},
		getContentIndex:function(){
			return this.currentIndex;
		},
		getContentPage:function(name){
			this.currentPage = name;
 			return this.matrix({plan:this.currentPage}).first();
		},
		gotoPlan:function(name){
			if (this.matrix({plan:name}).first()){
				this.currentIndex = this.matrix({plan:name}).first().id;
				return this.matrix({plan:name}).first();
			}
		},
		goHome:function(){
			this.currentIndex = 0;
			return this.matrix({id:this.currentIndex}).first();
		}
	}
});