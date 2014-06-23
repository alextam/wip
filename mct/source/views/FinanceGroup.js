enyo.kind({
    name: "FinanceGroup",
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
                    content:"Bank",
                    value:"Bank"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Company",
                    value:"Company"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Government",
                    value:"Government"

                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Cash",
                    value:"Cash"
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