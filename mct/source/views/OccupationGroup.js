enyo.kind({
    name: "OccupationGroup",
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
                    content:"Professional",
                    value:"Professional"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Businessman",
                    value:"Businessman"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Manager",
                    value:"Manager"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Executive",
                    value:"Executive"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Retiree",
                    value:"Retiree"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Others",
                    value:"Others"
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