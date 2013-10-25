enyo.kind({
    name: "MemberListItem",
    kind: "Control",
    classes:"memberListItem",
    //ontap:"handleUpdateStar",
    layoutKind: "FittableColumnsLayout",
    components: [
        {
        	name:"photo",
            classes:"photoBase",
        	style:"width:80px;height:80px;margin-right:10px;",
            components:[
                {
                    name:"photoFrame",
                    kind:"Image",
                    style:"margin:5px;width:70px;height:70px;background:black"
                }
            ]
        },
        {
        	name:"dataDiv",
        	style:"width:310px",
            FittableColumnsLayout:"FittableRowsLayout",
        	components:[
        		{
	        		tag:"h3",
	        		name:"headerTitle",
        			content:"Set Name...",
        			classes:"standardSeanH3 truncate"
        		},
        		{
        			style:"width:310px;height:30px;",
                    components:[
                        {
                            name:"voteControl",
                            style:"float:right;text-align:right;width:160px;margin-right:5px",
                            components:[
                                {
                                    name:"star0",
                                    classes:"icon-star starButton"
                                },
                                {
                                    name:"star1",
                                    classes:"icon-star starButton"
                                },
                                {
                                    name:"star2",
                                    classes:"icon-star starButton"
                                }
                            ]
                        }
                    ]
        		}
        	]
        }
    ],

    published:{
        data:null		
    },
    create: function() {
        this.inherited(arguments);
        if (this.data != null) {
            this.dataChanged();
        }
    },
    updateStar: function() {
        this.data.vote++;
        if (this.data.vote > 3) {
            this.data.vote = 3;
        }
        console.log(this.data.vote);
        this.setStar(this.data.vote);
    },
    setStar: function(value) {
        console.log(value);
        switch(value){
            case 0:
                this.$.star0.setClasses("icon-star starButton");
                this.$.star1.setClasses("icon-star starButton");
                this.$.star2.setClasses("icon-star starButton");
            break;

            case 1:
                this.$.star0.setClasses("icon-star starButton active");
                this.$.star1.setClasses("icon-star starButton");
                this.$.star2.setClasses("icon-star starButton");
            break;

            case 2:
                this.$.star0.setClasses("icon-star starButton active");
                this.$.star1.setClasses("icon-star starButton active");
                this.$.star2.setClasses("icon-star starButton");
            break;

            case 3:
                this.$.star0.setClasses("icon-star starButton active");
                this.$.star1.setClasses("icon-star starButton active");
                this.$.star2.setClasses("icon-star starButton active");
            break;
        }
    },
    dataChanged: function() {
    	this.$.headerTitle.setContent(this.data.name);
        this.setStar(this.data.vote);
        this.$.photoFrame.setSrc("./assets/img/"+this.data.photo);
    }
});