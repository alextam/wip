enyo.kind({
    name: "SortBy",
    kind: "Control",
    components: [
        {
        	classes: "sortByContainerBox",
        	layoutKind: "FittableColumnsLayout",
        	components:[
        		{
        			tag:"h1",
        			classes:"sortByColumnLabel",
        			content:"Sort By"
        		},
        		{
        			fit:true,
        			name:"groupSorter",
        			kind:"Group",
        			components:[
        				{
        					kind:"Button",
        					classes:"sortByButton",
        					ontap:"activeTapped",
        					activeIndex:0,
        					content:"Rate"
        				},
        				{
        					kind:"Button",
        					classes:"sortByButton",
        					ontap:"activeTapped",
        					activeIndex:1,
        					content:"Income"
        				},
        				{
        					kind:"Button",
        					classes:"sortByButton",
        					ontap:"activeTapped",
        					activeIndex:2,
        					content:"Name"
        				}
        			]
        		}
        	]
        }
    ],
    published:{
        activeIndex:0		
    },
    create: function() {
        this.inherited(arguments);
        this.activeIndexChanged();
    },
    activeTapped: function(inSender,inEvent) {
    	this.setActiveIndex(inSender.activeIndex);
    },
    activeIndexChanged: function() {
    	this.$.groupSorter.setActive(this.$.groupSorter.controls[this.getActiveIndex()]);
    	this.bubble("onChange",{activeIndex:this.getActiveIndex()});
    }
});