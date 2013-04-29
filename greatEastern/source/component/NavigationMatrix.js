enyo.kind({
	name: "NavigationMatrix",
	statics :{
		version:"1.0.0",
		currentIndex:0,
		matrix: TAFFY([
			{
				id:0,
				plan:"home0",
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
				left:{kind:"MainPlanMenu", selected:1},
				right:[
					{tag:"h5",content:"Welcome"}
				]
			},
			{
				id:2,
				plan:"greatmaxiprotector",
				left:{kind:"GreatMaxiProtectorMenu"},
				right:[
					{kind:"GreatMaxiProtectorForm"},
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
		getContentPage:function(index){
			this.currentIndex = index;
			return this.matrix({id:this.currentIndex}).first();
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