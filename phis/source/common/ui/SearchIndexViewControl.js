enyo.kind({
    name: "SearchIndexViewControl",
    kind: "FittableRows",
    classes:"enyo-unselectable",
    hideDivider: false,
    filtered:[],
    filter:"",
    jobcode:-1,
    components: [
        {
        	kind:"SearchInput",
        	placeholder:"Search Filter...",
        	onSearch:"handleSearch"
        },
        {   
    		name:"contentList", 
    		kind:"List", 
    		fit:true, 
    		count:0, 
    		touch:true, 
    		thumb:true,
    		onSetupItem:"setupItem", 
    		components: [
    			{
					name:"divider",
					classes:"dividerHeader",
					components:[
						{
							name:"labelDivider",
							tag:"h1",
							content:"Header"
						}
					]
				},
				{
     				name:"listItem",
     				kind:"SelectableItemList"
    			}
    		]
        }
    ],
    data: TAFFY([
		{content:"Architect",code:0,index:0},
		{content:"Accountant",code:1,index:1},
		{content:"Botanist",code:2,index:2},
		{content:"Chemist",code:3,index:3},
		{content:"Doctor",code:4,index:4},
		{content:"Dentist",code:5,index:5},
		{content:"Developer",code:6,index:6},
		{content:"Engineer",code:7,index:7},
		{content:"Entrepreneur",code:8,index:8},
		{content:"Finance",code:9,index:9},
		{content:"Fitness Trainer",code:10,index:10},
		{content:"Garderner",code:11,index:11},
		{content:"Hospital Administrator",code:12,index:12},
		{content:"IT Executive",code:13,index:13},
		{content:"Janitor",code:14,index:14}
	]),

	create:function(){
		this.inherited(arguments);
		this.$.contentList.reset();
		this.refreshList();
	},
	rendered:function(){
		this.inherited(arguments);
		this.findSelectedItem(this.jobcode);
	},
	refreshList:function(){
		this.$.contentList.reset();
		this.$.contentList.setCount(0);
		this.filtered = [];
 		this.filtered = this.generateFilteredData(this.filter);
		this.$.contentList.setCount(this.filtered.length);
		this.reflow();
		this.$.contentList.refresh();
	},
 	findSelectedItem:function(jobcode){
  		var i = this.data({code:{is:jobcode}}).first();
  		if(jobcode != -1){
 			this.$.contentList.select(i.index);
 		}
 	},
	generateFilteredData:function(searchValue){
		var returnedObject;
		if (searchValue == ""){
			returnedObject = this.data().get();	
		} else {
			returnedObject = this.data({content:{likenocase:searchValue}}).get();
		}
		return returnedObject;
	},
	setupItem:function(inSender,inEvent) {
		// Make sure is single array coming in.
		var	occupation = this.filtered[inEvent.index];		
		this.$.listItem.code = occupation.code;
  		this.$.listItem.setContent(occupation.content);
		this.$.listItem.setSelected(inSender.isSelected(inEvent.index));
  		
  		if (!this.hideDivider) {
			var dividerText = occupation.content[0];
			var prev = this.data().get()[inEvent.index-1];
			var bShowDivider = dividerText != (prev && prev.content[0]);
			var reg = /^[a-zA-Z ]*$/;
			if( !reg.test(dividerText) ){
				dividerText = "#";
			}
			this.$.labelDivider.setContent(dividerText);
			this.$.divider.canGenerate = bShowDivider;
		}
 	},
    handleSearch:function(inSender,inEvent) {
		this.filter = inEvent.getValue();
		this.refreshList();
    },	
    itemTap:function(inSender,inEvent) {
    	console.log(this.filtered[inEvent.index]);
     	enyo.Signals.send("onSelect", this.filtered[inEvent.index]);
    }
 });