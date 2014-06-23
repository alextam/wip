enyo.kind({
    name: "TitleGroup",
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
                    content:"Mr",
                    value:"Mr"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Mrs",
                    value:"Mrs"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Ms",
                    value:"Ms"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Dr",
                    value:"Dr"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Dato'",
                    value:"Dato'"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Datin",
                    value:"Datin"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Dato' Seri",
                    value:"Dato' Seri"
                },
                {
                    kind:"Button",
                    classes:"pickerLikeButton",
                    content:"Tan Sri",
                    value:"Tan Sri"
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