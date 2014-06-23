enyo.kind({
    name: "AboutGroup",
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
                    content:"Internet",
                    value:"Internet"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Newspaper",
                    value:"Newspaper"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Exhibition",
                    value:"Exhibition"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Brochure",
                    value:"Brochure"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Word of Mouth",
                    value:"Word of Mouth"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Street Bunting",
                    value:"Street Bunting"
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