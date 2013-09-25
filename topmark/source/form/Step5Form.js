enyo.kind({
	name: "Step5Form",
	kind: "FittableRows",
	components:[
		{
            kind:"Header",
            title:"Other Info",
            buttons:[
            	{
			    	name:"btnBack",
			    	visible:true,
			    	content:"Back",
			    	page:"Step4Form",
			    	event:"onBtnBack"
		    	}
            ],
            onBtnBack:"handleBack"
        },
        { kind:"BannerHeader" },	
        {
        	layoutKind: "FittableColumnsLayout",
        	style:"margin:1px",
        	components:[
        		{
        			tag:"div",
        			classes:"breadCrumb1",
        			content:"Step N"
        		},
        		{
        			tag:"div",
        			classes:"breadCrumb2",
        			content:"In Progress"
        		},
        		{ fit:true }
        	]
        },
        {
        	tag:"h1",
        	classes:"standardH1 txtAlignCenter",
        	content:"Coming Soon..."
        }
	],
	handleNext:function(inSender,inEvent) {
		this.bubble("onChangePage");
	},
	handleBack: function(inSender,inEvent) {
		this.bubble("onBackPage",{page:"Step4Form"});
	}
});