enyo.kind({
    name: "AgeGroup",
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
                    content:"20 - 30 years old",
                    value:"20 - 30"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"31 - 40 years old",
                    value:"31 - 40"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"40 - 50 years old",
                    value:"40 - 50"

                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"51 years old & above",
                    value:"51 &amp; above"
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