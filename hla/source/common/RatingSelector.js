enyo.kind({
    name: "RatingSelector",
    kind: "Control",
    style:"margin-top:25px",
    components: [
        {
        	tag:"div",
        	classes:"ratingSelector",
        	layoutKind: "FittableColumnsLayout",
        	components:[
        		{
        			tag:"h1",
        			classes:"labels",
        			content:"Ranking"
        		},
        		{
        			kind:"StandardPicker",
        			name:"ratingPicker",
        			style:"width:454px;height:32px !important;",
        			data:[
        				{ content:"Rank 1",value:0, active:true },
        				{ content:"Rank 2",value:1},
        				{ content:"Rank 3",value:2},
        				{ content:"Rank 4",value:3},
        				{ content:"Rank 5",value:4},
        				{ content:"Rank 6",value:5}
        			]
        		}
        		
        	]
        }
    ]
});