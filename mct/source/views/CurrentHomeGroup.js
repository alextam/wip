enyo.kind({
    name: "CurrentHomeGroup",
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
                    content:"Owner",
                    value:"Owner"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Rented",
                    value:"Rented"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Stay with Family",
                    value:"Stay with Family"
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