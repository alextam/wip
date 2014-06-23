enyo.kind({
    name: "IncomeGroup",
    kind: "Control",
    classes:"mct-inputBoxGroup",
    components:[
        {
            kind:"Group",
            name:"txtGroup",
            components:[
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    active:true,
                    content:"Below RM 4,000",
                    value:"Below RM4,000"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"RM 4001 - RM 6,000",
                    value:"RM4001 - RM6,000"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"RM 6001 - RM 8,000",
                    value:"RM6001 - RM8,000"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"RM 8,001 & above",
                    value:"RM8,001 &amp; above"
                }
            ]
        }
    ],
    published:{
        active:0		
    },
    create: function() {
        this.inherited(arguments);
        this.activeChanged();
    },
    activeChanged:function() {
    	this.$.txtGroup.setActive(this.$.txtGroup.controls[this.getActive()]);
    	this.$.txtGroup.render();
    },
    getValue:function() {
    	return this.$.txtGroup.getActive().value;
    }
});