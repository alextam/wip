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
        			content:"Step 5"
        		},
        		{
        			tag:"div",
        			classes:"breadCrumb2",
        			content:"CheckList - Interior, Acccesories"
        		},
        		{ fit:true }
        	]
        },
        { style:"height:15px" },
        { name:"quiz1", kind:"QuizBar", title:"1. Alarm / Remote Control / Central Locking  ?" },
        { name:"quiz2", kind:"QuizBar", title:"2. Windows (Auto / Manual) ?" },
        { name:"quiz3", kind:"QuizBar", title:"3. Sun and Door Visor ?" },
        { name:"quiz4", kind:"QuizBar", title:"4. Seats - Fabric/Leather (& electronics), Door trims / Head & Arm Rest ?" },
        { name:"quiz5", kind:"QuizBar", title:"5. Carpet Conditions / Floor Mats ?" },
        { name:"quiz6", kind:"QuizBar", title:"6. Tools / Jack & Wrench / Trunk board ?" },
        { name:"quiz7", kind:"QuizBar", title:"7. Audio Head Unit ?" },
        { name:"quiz8", kind:"QuizBar", title:"8. Speakers ?" },
        { name:"quiz9", kind:"QuizBar", title:"9. Warning lights, Airbags, ABS, ECU, Engine Oil, etc ?" },
        { name:"quiz10", kind:"QuizBar", title:"10. Speedometer, Odometer, RPM & others  ?" },
        { name:"quiz11", kind:"QuizBar", title:"11. Dashboard / Glove Compartments / Central Console  ?" },
        { name:"quiz12", kind:"QuizBar", title:"12. Steering Wheel (Freeplay/Wear Level)  ?" },
        { name:"quiz13", kind:"QuizBar", title:"13. Air Conditioning Lourve ?" },
        { name:"quiz14", kind:"QuizBar", title:"14. Seat Belts & Tensioner ?" },
        { name:"quiz15", kind:"QuizBar", title:"15. Door Locks & Handles ?" },
        { name:"quiz16", kind:"QuizBar", title:"16. Roof Lining ?" },
        { name:"quiz17", kind:"QuizBar", title:"17. Wiper Functionality & Wiper Arm ?" },
        { style:"height:55px" }

	], 
	handleNext:function(inSender,inEvent) {
		this.bubble("onChangePage");
	},
	handleBack: function(inSender,inEvent) {
		this.bubble("onBackPage",{page:"Step4Form"});
	}
});